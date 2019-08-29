import theme from 'resources/theme';

const {
  palette: { secondary },
} = theme;

const particleParams = {
  particles: {
    number: {
      value: 150,
      density: {
        enable: true,
        value_area: 300,
      },
    },
    color: {
      value: secondary.light,
    },
    shape: {
      type: 'circle',
    },
    opacity: {
      value: 1,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.05,
        sync: false,
      },
    },
    size: {
      value: 2.5,
      random: true,
    },
    line_linked: {
      enable: true,
      distance: 50,
      color: secondary.dark,
      opacity: 0.5,
      width: 0.6,
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
