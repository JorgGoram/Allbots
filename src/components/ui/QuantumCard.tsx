import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface QuantumCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: 'default' | 'glass' | 'accent';
}

export function QuantumCard({ 
  children, 
  className,
  variant = 'default',
  ...props 
}: QuantumCardProps) {
  const variants = {
    default: 'bg-black/[0.2] border-white/[0.05]',
    glass: 'bg-black/[0.3] border-white/[0.08] backdrop-blur-md',
    accent: 'bg-white/5 border-white/20'
  };

  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.2 }}
      className={cn(
        'relative overflow-hidden rounded-xl p-6',
        'backdrop-blur-sm',
        variants[variant],
        'border',
        'hover:bg-black/[0.3] hover:border-white/[0.08]',
        'transition-all duration-200',
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
}