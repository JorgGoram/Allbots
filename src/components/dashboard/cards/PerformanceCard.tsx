import React from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { QuantumCard } from '@/components/ui/QuantumCard';

interface PerformanceCardProps {
  onClose?: () => void;
}

const PerformanceCard: React.FC<PerformanceCardProps> = ({ onClose }) => {
  // Performance metrics
  const metrics = [
    { name: 'This Period', value: '60%', color: 'border-accent', trend: 'up' },
    { name: 'Last Period', value: '54%', color: 'border-accent-yellow', trend: 'down' }
  ];

  // Performance categories
  const categories = [
    { name: 'CPU', value: '54%', color: 'bg-accent' },
    { name: 'Integration', value: '37%', color: 'bg-accent-secondary' },
    { name: 'Memory', value: '57%', color: 'bg-accent-cyan' }
  ];

  return (
    <QuantumCard className="relative">
      {onClose && (
        <button 
          onClick={onClose}
          className="absolute top-2 right-2 p-1 rounded-md hover:bg-white/10 text-white/40 hover:text-white/80 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      )}
      
      <h2 className="text-lg font-semibold mb-4">App Performance</h2>
      
      <div className="space-y-3 mb-4">
        {metrics.map((metric) => (
          <div key={metric.name} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className={`w-1 h-4 ${metric.color}`}></div>
              <span className="text-sm">{metric.name}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">{metric.value}</span>
              <div className={`w-16 h-1 rounded-full bg-white/10 relative overflow-hidden`}>
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: metric.value }}
                  className={`absolute h-full ${metric.color.replace('border', 'bg')}`}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="space-y-3">
        {categories.map((category) => (
          <div key={category.name} className="space-y-1">
            <div className="flex items-center justify-between text-sm">
              <span className="text-white/60">{category.name}</span>
              <span className="font-medium">{category.value}</span>
            </div>
            <div className="w-full h-1.5 bg-white/[0.05] rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: category.value }}
                className={`h-full ${category.color}`}
              />
            </div>
          </div>
        ))}
      </div>
    </QuantumCard>
  );
};

export default PerformanceCard;