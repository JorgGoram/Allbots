import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, X } from 'lucide-react';
import { QuantumCard } from '@/components/ui/QuantumCard';

interface VisitCardProps {
  visits: number;
  change: number;
  logins: number;
  signOuts: number;
  rate: number;
  onClose?: () => void;
}

const VisitCard: React.FC<VisitCardProps> = ({
  visits = 4332,
  change = 830,
  logins = 0,
  signOuts = 0,
  rate = 4.5,
  onClose
}) => {
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
      
      <h2 className="text-lg font-semibold mb-3">Visits Today</h2>
      
      <div className="flex items-end gap-3 mb-4">
        <span className="text-3xl font-bold">{visits.toLocaleString()}</span>
        <div className="flex items-center text-success mb-1">
          <ArrowUpRight className="w-4 h-4 mr-0.5" />
          <span>+{change}</span>
        </div>
      </div>
      
      <div className="grid grid-cols-3 gap-2 text-center">
        <div className="p-2 rounded-lg bg-white/[0.03]">
          <div className="text-xs text-white/40">Logins</div>
          <div className="font-medium">{logins}</div>
        </div>
        
        <div className="p-2 rounded-lg bg-white/[0.03]">
          <div className="text-xs text-white/40">Sign Out</div>
          <div className="font-medium">{signOuts}</div>
        </div>
        
        <div className="p-2 rounded-lg bg-white/[0.03]">
          <div className="text-xs text-white/40">Rate</div>
          <div className="font-medium">{rate}%</div>
        </div>
      </div>
    </QuantumCard>
  );
};

export default VisitCard;