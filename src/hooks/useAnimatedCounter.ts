import { useState, useEffect } from 'react';
import { animate } from 'framer-motion';

export const useAnimatedCounter = (value: number, duration: number = 1) => {
  const [displayValue, setDisplayValue] = useState(value);

  useEffect(() => {
    const controls = animate(displayValue, value, {
      duration,
      onUpdate: (latest) => setDisplayValue(latest),
    });

    return () => controls.stop();
  }, [value, duration]);

  return Math.round(displayValue);
};