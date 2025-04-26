import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Database, Activity, HardDrive } from 'lucide-react';
import { QuantumCard } from '@/components/ui/QuantumCard';

const ResourceMonitor = () => {
  const resources = [
    { name: 'CPU Usage', value: 42, icon: Cpu, color: 'bg-accent-blue' },
    { name: 'Memory', value: 68, icon: Database, color: 'bg-accent-secondary' },
    { name: 'Network', value: 35, icon: Activity, color: 'bg-accent-cyan' },
    { name: 'Disk I/O', value: 57, icon: HardDrive, color: 'bg-accent-yellow' }
  ];

  const getProgressColor = (value: number) => {
    if (value > 80) return 'bg-error';
    if (value > 60) return 'bg-warning';
    return 'bg-success';
  };

  return (
    <QuantumCard>
      <h2 className="text-lg font-semibold mb-4">Resource Monitor</h2>
      <div className="space-y-4">
        {resources.map((resource, index) => (
          <motion.div
            key={resource.name}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center gap-2">
                <div className={`p-1.5 rounded-lg ${resource.color}/10`}>
                  <resource.icon className={`w-3.5 h-3.5 ${resource.color}`} />
                </div>
                <span className="text-sm">{resource.name}</span>
              </div>
              <span className="text-sm font-medium">{resource.value}%</span>
            </div>
            <div className="w-full h-2 bg-white/[0.05] rounded-full overflow-hidden">
              <div 
                className={`h-full rounded-full ${getProgressColor(resource.value)}`}
                style={{ width: `${resource.value}%` }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </QuantumCard>
  );
};

export default ResourceMonitor;