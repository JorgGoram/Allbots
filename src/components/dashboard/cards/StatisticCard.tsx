import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { QuantumCard } from '@/components/ui/QuantumCard';

interface StatisticCardProps {
  title: string;
  value: string;
  period?: string;
  trend?: string;
  trendDirection?: 'up' | 'down';
}

const StatisticCard: React.FC<StatisticCardProps> = ({
  title,
  value,
  period = 'Weekly',
  trend,
  trendDirection = 'up'
}) => {
  const trendColor = trendDirection === 'up' ? 'text-success' : 'text-error';
  
  return (
    <QuantumCard>
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-base font-semibold">Statistic {title}</h3>
        <div className="px-2 py-1 text-xs bg-white/[0.03] rounded-full">
          {period}
        </div>
      </div>
      
      <div className="flex items-baseline gap-2 mt-3">
        <span className="text-3xl font-bold">{value}</span>
        {trend && (
          <span className={`text-sm ${trendColor} flex items-center`}>
            <ArrowUpRight className="w-3 h-3 mr-0.5" />
            {trend}
          </span>
        )}
      </div>
    </QuantumCard>
  );
};

export default StatisticCard;