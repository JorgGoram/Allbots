import React from 'react';
import { motion } from 'framer-motion';
import { DivideIcon as LucideIcon } from 'lucide-react';
import { QuantumCard } from '@/components/ui/QuantumCard';

interface StatCardProps {
  title: string;
  value: string;
  icon: LucideIcon;
  trend?: string;
  trendDirection?: 'up' | 'down';
  color?: string;
  className?: string;
  onClick?: () => void;
}

const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  icon: Icon,
  trend,
  trendDirection = 'up',
  color = 'accent',
  className,
  onClick
}) => {
  const trendColor = trendDirection === 'up' ? 'text-success' : 'text-error';
  
  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      onClick={onClick}
      className={className}
    >
      <QuantumCard className="cursor-pointer">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-sm text-white/60">{title}</h3>
            <div className="flex items-baseline gap-2 mt-1">
              <span className="text-2xl font-bold">{value}</span>
              {trend && (
                <span className={`text-sm ${trendColor} flex items-center`}>
                  {trend}
                </span>
              )}
            </div>
          </div>
          <div className={`p-2 rounded-lg bg-${color}/10`}>
            <Icon className={`w-5 h-5 text-${color}`} />
          </div>
        </div>
      </QuantumCard>
    </motion.div>
  );
};

export default StatCard;