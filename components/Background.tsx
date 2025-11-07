"use client";

import { useEffect, useRef, useState } from "react";

interface WaveLayer {
  points: { x: number; y: number; vy: number }[];
  colorIndex: number;
  baseY: number;
  amplitude: number;
  frequency: number;
  phase: number;
  phaseSpeed: number;
}

export default function Background() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const layersRef = useRef<WaveLayer[]>([]);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const checkDarkMode = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };

    checkDarkMode();

    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      const numPoints = 50;
      layersRef.current = Array.from({ length: 6 }, (_, i) => ({
        points: Array.from({ length: numPoints }, (_, j) => ({
          x: (canvas.width / (numPoints - 1)) * j,
          y: 0,
          vy: 0,
        })),
        colorIndex: i,
        baseY: canvas.height * (0.3 + i * 0.15),
        amplitude: 80 + i * 30,
        frequency: 0.002 + i * 0.0003,
        phase: Math.random() * Math.PI * 2,
        phaseSpeed: 0.0005 + i * 0.0002,
      }));
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", handleMouseMove);

    let animationId: number;
    const animate = () => {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const lightColors = [
        "rgba(0, 191, 255, 0.5)",
        "rgba(0, 191, 255, 0.6)",
        "rgba(255, 255, 255, 1)",
        "rgba(247, 126, 45, 0.8)",
        "rgba(247, 126, 45, 0.7)",
        "rgba(247, 126, 45, 0.6)",
        "rgba(247, 126, 45, 0.5)",
      ];

      const darkColors = [
        "rgba(50, 55, 74, 0.9)",
        "rgba(50, 55, 74, 1)",
        "rgba(89, 79, 99, 1)",
        "rgba(0, 0, 0, 0.6)",
        "rgba(89, 79, 99, 0.9)",
        "rgba(89, 79, 99, 0.8)",
        "rgba(89, 79, 99, 0.7)",
      ];

      const colors = isDark ? darkColors : lightColors;

      layersRef.current.forEach((layer) => {
        layer.phase += layer.phaseSpeed;

        layer.points.forEach((point) => {
          const distToMouse = Math.sqrt(
            Math.pow(point.x - mouseRef.current.x, 2) +
              Math.pow(layer.baseY - mouseRef.current.y, 2)
          );

          const mouseInfluence = Math.max(0, 1 - distToMouse / 300);
          const mouseOffset = mouseInfluence * 20;

          const targetY =
            layer.baseY +
            Math.sin(point.x * layer.frequency + layer.phase) *
              layer.amplitude -
            mouseOffset;

          point.vy += (targetY - point.y) * 0.02;
          point.vy *= 0.85;
          point.y += point.vy;
        });

        ctx.beginPath();
        ctx.moveTo(layer.points[0].x, layer.points[0].y);

        for (let i = 0; i < layer.points.length - 1; i++) {
          const current = layer.points[i];
          const next = layer.points[i + 1];
          const midX = (current.x + next.x) / 2;
          const midY = (current.y + next.y) / 2;

          ctx.quadraticCurveTo(current.x, current.y, midX, midY);
        }

        const lastPoint = layer.points[layer.points.length - 1];
        ctx.lineTo(lastPoint.x, lastPoint.y);
        ctx.lineTo(canvas.width, canvas.height);
        ctx.lineTo(0, canvas.height);
        ctx.closePath();

        const gradient = ctx.createLinearGradient(
          0,
          layer.baseY - 200,
          0,
          canvas.height
        );
        gradient.addColorStop(0, colors[layer.colorIndex % colors.length]);
        gradient.addColorStop(
          1,
          colors[layer.colorIndex % colors.length].replace(/[\d.]+\)$/, "0)")
        );

        ctx.fillStyle = gradient;
        ctx.fill();
      });

      animationId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, [isDark]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none opacity-50 blur-sm dark:blur-none mix-blend-normal z-0"
    />
  );
}
