import * as React from "react";

import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex shrink-0 cursor-pointer items-center justify-center gap-2 rounded-md text-sm font-medium whitespace-nowrap transition-all outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:bg-destructive/60 dark:focus-visible:ring-destructive/40",
        outline:
          "border border-accent/30 bg-accent/15 text-foreground/70 shadow-xs hover:scale-105 hover:bg-accent/20 hover:text-foreground/90",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-input/75",
        link: "text-primary underline-offset-4 hover:underline",
        glass:
          "relative overflow-hidden border border-white/30 bg-white/50 shadow-[0_8px_32px_rgba(0,0,0,0.1)] backdrop-blur-xl before:absolute before:inset-0 before:bg-linear-to-br before:from-white/40 before:to-transparent before:opacity-50 hover:scale-105 hover:bg-white/65 hover:shadow-[0_12px_40px_rgba(0,0,0,0.15)] active:scale-95 active:bg-white/80 active:shadow-[0_4px_16px_rgba(0,0,0,0.2)] dark:border-white/20 dark:bg-white/20 dark:shadow-[0_8px_32px_rgba(0,0,0,0.3)] dark:drop-shadow-2xl dark:drop-shadow-background/50 dark:hover:bg-white/15 dark:active:bg-white/40",
        "glass-tinted":
          "relative overflow-hidden border border-accent/30 bg-accent/20 shadow-[0_8px_32px_rgba(0,0,0,0.1)] backdrop-blur-xl before:absolute before:inset-0 before:bg-linear-to-br before:from-accent/40 before:to-transparent before:opacity-50 hover:scale-105 hover:bg-accent/30 hover:shadow-[0_12px_40px_rgba(0,0,0,0.15)] active:scale-95 active:bg-blue-400/30 active:shadow-[0_4px_16px_rgba(0,0,0,0.2)] dark:border-accent/20 dark:shadow-[0_8px_32px_rgba(0,0,0,0.3)] dark:drop-shadow-2xl dark:drop-shadow-background/50 dark:hover:bg-accent/15 dark:active:bg-blue-500/20",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 gap-1.5 rounded-md px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9 hover:scale-110",
        "lg-icon": "size-12 rounded-2xl border-2 text-xl font-bold hover:scale-105",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
