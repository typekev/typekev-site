import theme from 'resources/theme';

const {
  palette: { primary, secondary },
} = theme;

const particleParams = {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: secondary.main,
    },
    shape: {
      type: 'circle',
    },
    opacity: {
      value: 1,
      anim: {
        enable: true,
        speed: 1,
        opacity_min: 0.25,
        sync: false,
      },
    },
    size: {
      value: 5,
      random: true,
      anim: {
        enable: true,
        speed: 5,
        size_min: 3,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 50,
      color: primary.light,
      opacity: 1,
      width: 2.25,
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
        distance: 50,
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
};

export default particleParams;
