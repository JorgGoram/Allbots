import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ThreeDCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  depth?: 'shallow' | 'medium' | 'deep';
  glowColor?: string;
  className?: string;
  disabled?: boolean;
}

export const ThreeDCard = React.forwardRef<HTMLDivElement, ThreeDCardProps>(
  ({ children, depth = 'medium', glowColor = 'white', className, disabled = false, ...props }, ref) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isPressed, setIsPressed] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const cardRef = useRef<HTMLDivElement>(null);
    const combinedRef = (node: HTMLDivElement) => {
      // Handle both the forwarded ref and our local ref
      if (typeof ref === 'function') ref(node);
      else if (ref) ref.current = node;
      cardRef.current = node;
    };

    // Shadow depths based on the depth prop
    const shadowDepths = {
      shallow: {
        default: 'shadow-[0_2px_4px_rgba(0,0,0,0.1),0_4px_6px_rgba(0,0,0,0.06)]',
        hover: 'shadow-[0_4px_8px_rgba(0,0,0,0.12),0_8px_12px_rgba(0,0,0,0.08)]',
        active: 'shadow-[0_6px_12px_rgba(0,0,0,0.15),0_12px_16px_rgba(0,0,0,0.1)]'
      },
      medium: {
        default: 'shadow-[0_4px_6px_rgba(0,0,0,0.12),0_6px_8px_rgba(0,0,0,0.08),0_8px_12px_rgba(0,0,0,0.06)]',
        hover: 'shadow-[0_6px_10px_rgba(0,0,0,0.14),0_10px_14px_rgba(0,0,0,0.1),0_14px_18px_rgba(0,0,0,0.08)]',
        active: 'shadow-[0_8px_16px_rgba(0,0,0,0.16),0_12px_20px_rgba(0,0,0,0.12),0_16px_24px_rgba(0,0,0,0.1)]'
      },
      deep: {
        default: 'shadow-[0_6px_8px_rgba(0,0,0,0.15),0_8px_12px_rgba(0,0,0,0.1),0_12px_18px_rgba(0,0,0,0.08)]',
        hover: 'shadow-[0_8px_14px_rgba(0,0,0,0.18),0_14px_20px_rgba(0,0,0,0.14),0_20px_26px_rgba(0,0,0,0.12)]',
        active: 'shadow-[0_12px_22px_rgba(0,0,0,0.2),0_18px_28px_rgba(0,0,0,0.16),0_24px_34px_rgba(0,0,0,0.14)]'
      }
    };

    // Handle mouse move for parallax effect
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      if (!cardRef.current || disabled) return;
      
      const rect = cardRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      // Calculate normalized position (-1 to 1)
      const normalizedX = (e.clientX - centerX) / (rect.width / 2);
      const normalizedY = (e.clientY - centerY) / (rect.height / 2);
      
      setMousePosition({ x: normalizedX, y: normalizedY });
    };

    // Reset transforms when mouse leaves
    const handleMouseLeave = () => {
      setIsHovered(false);
      setMousePosition({ x: 0, y: 0 });
    };

    // Handle parallax effect for inner elements
    useEffect(() => {
      if (!cardRef.current || disabled) return;
      
      const innerElements = cardRef.current.querySelectorAll('.parallax-element');
      innerElements.forEach((element, index) => {
        const depth = 1 - (index + 1) * 0.1; // Deeper elements move less
        const translateX = mousePosition.x * 5 * depth; // Max 5px movement
        const translateY = mousePosition.y * 5 * depth;
        
        (element as HTMLElement).style.transform = `translate(${translateX}px, ${translateY}px)`;
      });
    }, [mousePosition, disabled]);

    // Determine shadow based on state
    const getShadowClass = () => {
      if (disabled) return shadowDepths[depth].default;
      if (isPressed) return shadowDepths[depth].active;
      if (isHovered) return shadowDepths[depth].hover;
      return shadowDepths[depth].default;
    };

    // Calculate 3D transform based on mouse position
    const getTransform = () => {
      if (disabled) return 'translate3d(0, 0, 0) scale(0.97)';
      
      const rotateX = isHovered ? mousePosition.y * -10 : 0; // Max 10 degrees rotation
      const rotateY = isHovered ? mousePosition.x * 10 : 0;
      const translateZ = isHovered ? '20px' : '0px';
      const scale = isPressed ? 0.95 : isHovered ? 1 : 0.97; // Scale down when not hovered
      
      return `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(${translateZ}) scale(${scale})`;
    };

    // Get glow effect styles
    const getGlowStyles = () => {
      if (disabled || !isHovered) return {};
      
      // Position glow based on mouse position
      const x = 50 + mousePosition.x * 30; // 20-80% horizontal position
      const y = 50 + mousePosition.y * 30; // 20-80% vertical position
      
      return {
        background: `radial-gradient(circle at ${x}% ${y}%, var(--${glowColor}-glow, rgba(255,255,255,0.3)) 0%, transparent 70%)`,
        opacity: isPressed ? 0.7 : 0.5
      };
    };

    return (
      <motion.div
        ref={combinedRef}
        className={cn(
          'relative overflow-hidden rounded-xl bg-black/[0.2] border border-white/[0.05]',
          'transition-all duration-300 ease-out transform-gpu will-change-transform',
          getShadowClass(),
          disabled ? 'opacity-70 cursor-not-allowed' : 'cursor-pointer',
          className
        )}
        style={{
          transform: getTransform(),
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        onMouseDown={() => setIsPressed(true)}
        onMouseUp={() => setIsPressed(false)}
        {...props}
      >
        {/* Content */}
        <div className="relative z-10 p-6">
          {children}
        </div>
        
        {/* Rim lighting effect */}
        {isHovered && !disabled && (
          <div 
            className={`absolute inset-0 pointer-events-none border border-white/30 rounded-xl`}
            style={{ boxShadow: `inset 0 0 1px 1px var(--${glowColor}-glow, rgba(255,255,255,0.3))` }}
          />
        )}
        
        {/* Glow effect */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-0 transition-opacity duration-300"
          style={getGlowStyles()}
        />
      </motion.div>
    );
  }
);

ThreeDCard.displayName = "ThreeDCard";

// Inner components for parallax effect
export const ThreeDCardTitle = ({ children, className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
  <h3 
    className={cn("text-lg font-semibold mb-2 parallax-element", className)} 
    {...props}
  >
    {children}
  </h3>
);

export const ThreeDCardContent = ({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div 
    className={cn("text-white/70 parallax-element", className)} 
    {...props}
  >
    {children}
  </div>
);

export const ThreeDCardFooter = ({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div 
    className={cn("mt-4 pt-4 border-t border-white/[0.08] parallax-element", className)} 
    {...props}
  >
    {children}
  </div>
);

export const ThreeDCardIcon = ({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div 
    className={cn("p-2 rounded-lg bg-white/[0.03] mb-3 inline-block parallax-element", className)} 
    {...props}
  >
    {children}
  </div>
);