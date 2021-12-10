/* MODALS */
export const dropIn = {
  initial: {
    y: '-100vh',
    opacity: 0,
  },
  animate: {
    y: '0%',
    opacity: 1,
    transition: {
      duration: 0.5,
      type: 'spring',
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: '100vh',
    opacity: 0,
    transition: {
      duration: 0.5,
      when: 'afterChildren',
    },
  },
};

export const flip = {
  initial: {
    transform: 'scale(0) rotateX(-360deg)',
    opacity: 0,
    transition: {
      delay: 0.3,
    },
  },
  animate: {
    transform: ' scale(1) rotateX(0deg)',
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    transform: 'scale(0) rotateX(360deg)',
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export const newspaper = {
  initial: {
    transform: 'scale(0) rotate(720deg)',
    opacity: 0,
    transition: {
      delay: 0.3,
    },
  },
  animate: {
    transform: ' scale(1) rotate(0deg)',
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    transform: 'scale(0) rotate(-720deg)',
    opacity: 0,
    transition: {
      duration: 0.3,
    },
  },
};

export const badSuspension = {
  initial: {
    y: '-100vh',
    opacity: 0,
    transform: 'scale(0) rotateX(-360deg)',
  },
  animate: {
    y: '0vh',
    opacity: 1,
    transition: {
      duration: 0.2,
      type: 'spring',
      damping: 15,
      stiffness: 500,
    },
  },
  exit: {
    y: '-100vh',
    opacity: 0,
  },
};

/* NOTIFICATIONS */
export const toLeft = {
  initial: {
    opacity: 0,
    x: 200,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      stiffness: 500,
      damping: 30,
      when: 'beforeChildren',
      delayChildren: 0.5,
      staggerChildren: 0.05,
    },
    transitionEnd: {
      overflow: 'auto',
    },
  },
  exit: {
    opacity: 1,
    x: -200,
    transition: {
      duration: 0.5,
      stiffness: 500,
      damping: 30,
    },
  },
};

export const toRight = {
  initial: {
    opacity: 0,
    x: -200,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      stiffness: 500,
      damping: 30,
      when: 'beforeChildren',
      delayChildren: 0.5,
      staggerChildren: 0.05,
    },
    transitionEnd: {
      overflow: 'auto',
    },
  },
  exit: {
    opacity: 0,
    x: 200,
    transition: {
      duration: 0.5,
      stiffness: 500,
      damping: 30,
    },
  },
};

export const fromRightToBottom = {
  initial: {
    opacity: 0,
    x: -200,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      stiffness: 500,
      damping: 30,
      when: 'beforeChildren',
      delayChildren: 0.5,
      staggerChildren: 0.05,
    },
    transitionEnd: {
      overflow: 'auto',
    },
  },
  exit: {
    opacity: 0,
    y: 200,
    transition: {
      duration: 0.5,
      stiffness: 500,
      damping: 30,
    },
  },
};

export const fromLeftToBottom = {
  initial: {
    opacity: 0,
    x: 200,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      stiffness: 500,
      damping: 30,
      when: 'beforeChildren',
      delayChildren: 0.5,
      staggerChildren: 0.05,
    },
    transitionEnd: {
      overflow: 'auto',
    },
  },
  exit: {
    opacity: 0,
    y: 200,
    transition: {
      duration: 0.5,
      stiffness: 500,
      damping: 30,
    },
  },
};
