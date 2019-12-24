const getParticleParams = ({ palette: { primary, error } }) => ({
  particles: {
    number: {
      value: 300,
      density: {
        enable: true,
        value_area: 10000,
      },
    },
    color: {
      value: primary.dark,
    },
    shape: {
      type: 'circle',
    },
    opacity: {
      value: 1,
      anim: {
        enable: true,
        speed: 1,
        opacity_min: 0.75,
        sync: false,
      },
    },
    size: {
      value: 3.5,
      random: true,
      anim: {
        enable: true,
        speed: 1,
        size_min: 3,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 50,
      color: error.main,
      opacity: 1,
      width: 0.5,
    },
    move: {
      direction: 'right',
      speed: 0.25,
    },
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: {
        enable: true,
        mode: 'grab',
      },
      onclick: {
        enable: true,
        mode: 'repulse',
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 200,
        line_linked: {
          opacity: 1,
        },
      },
      repulse: {
        distance: 200,
        duration: 4,
      },
    },
  },
  retina_detect: true,
});

export default getParticleParams;
