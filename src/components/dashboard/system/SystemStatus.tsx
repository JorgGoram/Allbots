import React from 'react';
import { motion } from 'framer-motion';
import { Server, Database, Cpu, Network, CheckCircle, AlertTriangle, XCircle } from 'lucide-react';
import { QuantumCard } from '@/components/ui/QuantumCard';

const SystemStatus = () => {
  const systems = [
    { name: 'API Gateway', status: 'healthy', icon: Server, metric: '99.9% Uptime' },
    { name: 'Database Cluster', status: 'healthy', icon: Database, metric: '45ms Response' },
    { name: 'Processing Nodes', status: 'warning', icon: Cpu, metric: '78% Capacity' },
    { name: 'Network', status: 'healthy', icon: Network, metric: '1.2Gbps Traffic' }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'healthy':
        return <CheckCircle className="w-4 h-4 text-success" />;
      case 'warning':
        return <AlertTriangle className="w-4 h-4 text-warning" />;
      case 'critical':
        return <AlertTriangle className="w-4 h-4 text-error" />;
      case 'offline':
        return <XCircle className="w-4 h-4 text-white/40" />;
      default:
        return <CheckCircle className="w-4 h-4 text-success" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'healthy':
        return 'bg-success/10 border-success/20 text-success';
      case 'warning':
        return 'bg-warning/10 border-warning/20 text-warning';
      case 'critical':
        return 'bg-error/10 border-error/20 text-error';
      case 'offline':
        return 'bg-white/[0.03] border-white/[0.08] text-white/40';
      default:
        return 'bg-success/10 border-success/20 text-success';
    }
  };

  return (
    <QuantumCard>
      <h2 className="text-lg font-semibold mb-4">System Status</h2>
      <div className="space-y-3">
        {systems.map((system, index) => (
          <motion.div
            key={system.name}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`p-3 rounded-lg border ${getStatusColor(system.status)}`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-white/[0.05]">
                  <system.icon className="w-4 h-4" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium">{system.name}</span>
                    {getStatusIcon(system.status)}
                  </div>
                  <span className="text-xs opacity-60">{system.metric}</span>
                </div>
              </div>
              <span className="text-xs capitalize">{system.status}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </QuantumCard>
  );
};

export default SystemStatus;