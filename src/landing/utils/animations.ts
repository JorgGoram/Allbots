import { Variants } from 'framer-motion';

// Fade in animation variants
export const fadeIn = (delay: number = 0, duration: number = 0.5): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay,
      duration,
      ease: 'easeOut'
    }
  }
});

// Fade in up animation variants
export const fadeInUp = (delay: number = 0, duration: number = 0.5, y: number = 30): Variants => ({
  hidden: { opacity: 0, y },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration,
      ease: 'easeOut'
    }
  }
});

// Fade in down animation variants
export const fadeInDown = (delay: number = 0, duration: number = 0.5, y: number = -30): Variants => ({
  hidden: { opacity: 0, y },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration,
      ease: 'easeOut'
    }
  }
});

// Scale animation variants
export const scaleIn = (delay: number = 0, duration: number = 0.5): Variants => ({
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay,
      duration,
      ease: 'easeOut'
    }
  }
});

// Staggered children animation variants
export const staggerContainer = (staggerChildren: number = 0.1, delayChildren: number = 0): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren,
      delayChildren
    }
  }
});

// Slide in from left animation variants
export const slideInLeft = (delay: number = 0, duration: number = 0.5, x: number = -100): Variants => ({
  hidden: { opacity: 0, x },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay,
      duration,
      ease: 'easeOut'
    }
  }
});

// Slide in from right animation variants
export const slideInRight = (delay: number = 0, duration: number = 0.5, x: number = 100): Variants => ({
  hidden: { opacity: 0, x },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay,
      duration,
      ease: 'easeOut'
    }
  }
});

// Bounce animation variants
export const bounceIn = (delay: number = 0): Variants => ({
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: [0.8, 1.1, 1],
    transition: {
      delay,
      times: [0, 0.6, 1],
      duration: 0.6,
      ease: 'easeOut'
    }
  }
});

// Animation for cards with hover effects
export const cardHoverEffect = {
  rest: {
    scale: 1,
    y: 0,
    transition: {
      duration: 0.3,
      type: "tween",
      ease: "easeOut"
    }
  },
  hover: {
    scale: 1.05,
    y: -10,
    transition: {
      duration: 0.3,
      type: "tween",
      ease: "easeOut"
    }
  }
};

// Animation for button hover effects
export const buttonHoverEffect = {
  rest: {
    scale: 1,
    transition: {
      duration: 0.3,
      type: "tween",
      ease: "easeOut"
    }
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.3,
      type: "tween",
      ease: "easeOut"
    }
  },
  tap: {
    scale: 0.95,
    transition: {
      duration: 0.15,
      type: "tween",
      ease: "easeOut"
    }
  }
};

// Path animation for SVG elements
export const drawPath = (delay: number = 0, duration: number = 2) => ({
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: {
        delay,
        type: "spring",
        duration,
        bounce: 0
      },
      opacity: {
        delay,
        duration: 0.5
      }
    }
  }
});

// Scroll triggered animations
export const scrollTriggeredAnimation = (threshold: number = 0.1) => ({
  offscreen: {
    y: 50,
    opacity: 0
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  },
  viewport: { once: true, amount: threshold }
});