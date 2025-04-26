import { useEffect, useRef } from 'react';
import { useDrag } from '@use-gesture/react';

interface UseGesturesProps {
  onSwipe?: (direction: 'left' | 'right' | 'up' | 'down') => void;
  onDrag?: (movement: [number, number], down: boolean) => void;
  threshold?: number;
}

export const useGestures = ({ onSwipe, onDrag, threshold = 50 }: UseGesturesProps = {}) => {
  const elementRef = useRef<HTMLElement | null>(null);

  const bind = useDrag(
    ({ movement: [mx, my], down, direction: [dx, dy], velocity }) => {
      if (onDrag) {
        onDrag([mx, my], down);
      }

      if (onSwipe && velocity > 0.3 && !down) {
        const [dirX, dirY] = [mx, my].map(Math.abs);
        if (dirX > threshold || dirY > threshold) {
          if (dirX > dirY) {
            onSwipe(dx > 0 ? 'right' : 'left');
          } else {
            onSwipe(dy > 0 ? 'down' : 'up');
          }
        }
      }
    },
    {
      filterTaps: true,
      threshold: [threshold, threshold],
    }
  );

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    return () => {
      element.style.transform = '';
    };
  }, []);

  return { elementRef, bind };
};