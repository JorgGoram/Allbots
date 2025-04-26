import React from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { QuantumCard } from '@/components/ui/QuantumCard';

interface ServerCardProps {
  onClose?: () => void;
}

const ServerCard: React.FC<ServerCardProps> = ({ onClose }) => {
  // Server metrics
  const metrics = [
    { name: 'CPU', value: '60%', color: 'border-accent' },
    { name: 'RAM', value: '54%', color: 'border-accent-secondary' },
    { name: 'SSD', value: '37%', color: 'border-accent-cyan' }
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
      
      <h2 className="text-lg font-semibold mb-4">Server Overview</h2>
      
      <div className="space-y-4">
        {metrics.map((metric) => (
          <div key={metric.name} className="space-y-1">
            <div className="flex items-center justify-between text-sm">
              <span className="text-white/60">{metric.name}</span>
              <span className="font-medium">{metric.value}</span>
            </div>
            <div className="w-full h-2 bg-white/[0.05] rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: metric.value }}
                className={`h-full ${metric.color.replace('border', 'bg')}`}
              />
            </div>
          </div>
        ))}
      </div>
    </QuantumCard>
  );
};

export default ServerCard;