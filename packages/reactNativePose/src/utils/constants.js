const colors = {
  green: '#3cba54',
  blue: '#4885ed',
  darkBlue: '#3875dd',
  red: '#db3236',
  yellow: '#f4c20d',
  white: '#ffffff'
};

const animationOptions = [
  {
    label: 'Fade In/Out',
    animation: { hidden: { opacity: 0 }, visible: { opacity: 1 } },
    component: 'square'
  },
  {
    label: 'Zoom In/Out',
    animation: {
      hidden: { opacity: 1, scaleX: 0, scaleY: 0 },
      visible: { opacity: 1, scaleX: 1, scaleY: 1 }
    },
    component: 'circle',
    visible: true
  },
  {
    label: 'Bounce In/Out',
    animation: {
      hidden: {
        opacity: 1,
        scaleX: 0,
        scaleY: 0
      },
      visible: {
        opacity: 1,
        scaleX: 1,
        scaleY: 1,
        transition: { type: 'spring', stiffness: 500 }
      }
    },
    component: 'square',
    visible: true
  },

  {
    label: 'Scale Horizontal',
    animation: {
      hidden: {
        scaleX: 0
      },
      visible: {
        scaleX: 1
      }
    },
    component: 'square',
    visible: true
  },

  {
    label: 'Scale Vertical',
    animation: {
      hidden: {
        scaleY: 0
      },
      visible: {
        scaleY: 1
      }
    },
    component: 'square',
    visible: true
  },
  {
    label: 'Rotate',
    animation: {
      hidden: { rotate: 360, transition: { duration: 2500 } },
      visible: { transition: { duration: 2500 } }
    },
    component: 'square',
    visible: true
  }
];

export { colors, animationOptions };
