import React from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { QuantumCard } from '@/components/ui/QuantumCard';

interface RevenueCardProps {
  onClose?: () => void;
}

const RevenueCard: React.FC<RevenueCardProps> = ({ onClose }) => {
  // Revenue breakdown data
  const revenueData = [
    { name: 'SMX', value: 45, color: 'bg-accent' },
    { name: 'RNS', value: 30, color: 'bg-accent-yellow' },
    { name: 'Networks', value: 25, color: 'bg-accent-secondary' }
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
      
      <h2 className="text-lg font-semibold mb-4">Revenue Breakdown</h2>
      
      <div className="flex justify-center mb-6">
        <div className="relative w-36 h-36">
          {/* Donut chart */}
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <circle 
              cx="50" 
              cy="50" 
              r="40" 
              fill="transparent" 
              stroke="rgba(255,255,255,0.05)" 
              strokeWidth="20" 
            />
            
            {/* Calculate stroke dasharray and offset for each segment */}
            <circle 
              cx="50" 
              cy="50" 
              r="40" 
              fill="transparent" 
              stroke="#2E6FF3" 
              strokeWidth="20" 
              strokeDasharray="251.2" 
              strokeDashoffset="0" 
              transform="rotate(-90 50 50)" 
            />
            <circle 
              cx="50" 
              cy="50" 
              r="40" 
              fill="transparent" 
              stroke="#FFB547" 
              strokeWidth="20" 
              strokeDasharray="251.2" 
              strokeDashoffset="113.04" 
              transform="rotate(-90 50 50)" 
            />
            <circle 
              cx="50" 
              cy="50" 
              r="40" 
              fill="transparent" 
              stroke="#7B5CFA" 
              strokeWidth="20" 
              strokeDasharray="251.2" 
              strokeDashoffset="188.4" 
              transform="rotate(-90 50 50)" 
            />
          </svg>
          
          {/* Center text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-xs text-white/40">Total</span>
            <span className="text-lg font-bold">100%</span>
          </div>
        </div>
      </div>
      
      {/* Legend */}
      <div className="space-y-2">
        {revenueData.map((item) => (
          <div key={item.name} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className={`w-3 h-3 rounded-full ${item.color}`}></div>
              <span className="text-sm">{item.name}</span>
            </div>
            <span className="text-sm font-medium">{item.value}%</span>
          </div>
        ))}
      </div>
    </QuantumCard>
  );
};

export default RevenueCard;