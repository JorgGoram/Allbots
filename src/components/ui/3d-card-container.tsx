import React from 'react';
import { cn } from '@/lib/utils';

interface ThreeDCardContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  columns?: 1 | 2 | 3 | 4;
  className?: string;
}

export const ThreeDCardContainer = React.forwardRef<HTMLDivElement, ThreeDCardContainerProps>(
  ({ children, columns = 3, className, ...props }, ref) => {
    const gridCols = {
      1: 'grid-cols-1',
      2: 'grid-cols-1 md:grid-cols-2',
      3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
      4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'
    };

    return (
      <div
        ref={ref}
        className={cn(
          'grid gap-6',
          gridCols[columns],
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

ThreeDCardContainer.displayName = "ThreeDCardContainer";