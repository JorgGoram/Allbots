// Animation variants for Framer Motion

export const fadeIn = (delay: number = 0) => ({
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      duration: 0.6,
      delay: delay,
      ease: "easeOut"
    }
  }
});

export const fadeInUp = (delay: number = 0, y: number = 30) => ({
  hidden: { opacity: 0, y: y },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6,
      delay: delay,
      ease: "easeOut"
    }
  }
});

export const fadeInDown = (delay: number = 0, y: number = -30) => ({
  hidden: { opacity: 0, y: y },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6,
      delay: delay,
      ease: "easeOut"
    }
  }
});

export const fadeInLeft = (delay: number = 0, x: number = -30) => ({
  hidden: { opacity: 0, x: x },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { 
      duration: 0.6,
      delay: delay,
      ease: "easeOut"
    }
  }
});

export const fadeInRight = (delay: number = 0, x: number = 30) => ({
  hidden: { opacity: 0, x: x },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { 
      duration: 0.6,
      delay: delay,
      ease: "easeOut"
    }
  }
});

export const scaleUp = (delay: number = 0, scale: number = 0.8) => ({
  hidden: { opacity: 0, scale: scale },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { 
      duration: 0.6,
      delay: delay,
      ease: "easeOut"
    }
  }
});

export const staggerContainer = (staggerChildren: number = 0.1, delayChildren: number = 0) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren,
      delayChildren
    }
  }
});

export const textVariant = (delay: number = 0) => ({
  hidden: {
    y: 50,
    opacity: 0
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 1.25,
      delay: delay
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


import { Variants } from 'framer-motion';

// Fade up animation for sections
export const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

// Stagger children animation for grids and lists
export const staggerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

// Scale animation for cards and buttons
export const scaleVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: 0.5
    }
  }
};

// Slide in from left animation
export const slideInLeftVariants: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.5
    }
  }
};

// Slide in from right animation
export const slideInRightVariants: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.5
    }
  }
};

// Hover animation for interactive elements
export const hoverScale = {
  scale: 1.05,
  transition: {
    duration: 0.2
  }
};

// Tap animation for interactive elements
export const tapScale = {
  scale: 0.95
};