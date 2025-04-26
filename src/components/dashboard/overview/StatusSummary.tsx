import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, AlertTriangle, XCircle, Clock } from 'lucide-react';
import { QuantumCard } from '@/components/ui/QuantumCard';

const StatusSummary = () => {
  const statuses = [
    { category: 'Systems', healthy: 12, warning: 1, critical: 0 },
    { category: 'Services', healthy: 8, warning: 2, critical: 0 },
    { category: 'Endpoints', healthy: 24, warning: 3, critical: 1 }
  ];

  return (
    <QuantumCard>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">Status Summary</h2>
        <div className="flex items-center gap-2 text-xs text-white/40">
          <Clock className="w-3 h-3" />
          <span>Updated 2 minutes ago</span>
        </div>
      </div>

      <div className="space-y-4">
        {statuses.map((status, index) => (
          <motion.div
            key={status.category}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.05]"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="font-medium">{status.category}</span>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-success" />
                  <span className="text-sm">{status.healthy}</span>
                </div>
                <div className="flex items-center gap-1">
                  <AlertTriangle className="w-3 h-3 text-warning" />
                  <span className="text-sm">{status.warning}</span>
                </div>
                <div className="flex items-center gap-1">
                  <XCircle className="w-3 h-3 text-error" />
                  <span className="text-sm">{status.critical}</span>
                </div>
              </div>
            </div>
            <div className="w-full h-2 bg-white/[0.05] rounded-full overflow-hidden flex">
              <div 
                className="h-full bg-success"
                style={{ width: `${(status.healthy / (status.healthy + status.warning + status.critical)) * 100}%` }}
              />
              <div 
                className="h-full bg-warning"
                style={{ width: `${(status.warning / (status.healthy + status.warning + status.critical)) * 100}%` }}
              />
              <div 
                className="h-full bg-error"
                style={{ width: `${(status.critical / (status.healthy + status.warning + status.critical)) * 100}%` }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </QuantumCard>
  );
};

export default StatusSummary;