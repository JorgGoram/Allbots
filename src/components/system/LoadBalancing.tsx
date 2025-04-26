import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Server, 
  Activity,
  ArrowUpRight,
  Settings,
  RefreshCw,
  Database,
  Cpu,
  Network,
  HardDrive,
  BarChart2
} from 'lucide-react';
import { QuantumCard } from '@/components/ui/QuantumCard';

const LoadBalancing = () => {
  const [autoScaling, setAutoScaling] = useState(true);

  const servers = [
    {
      id: 'server-1',
      name: 'Primary Server',
      status: 'healthy',
      load: 65,
      memory: '4.2GB',
      connections: 234
    },
    {
      id: 'server-2',
      name: 'Secondary Server',
      status: 'healthy',
      load: 45,
      memory: '3.1GB',
      connections: 156
    },
    {
      id: 'server-3',
      name: 'Backup Server',
      status: 'standby',
      load: 15,
      memory: '1.8GB',
      connections: 45
    }
  ];

  const metrics = [
    {
      title: 'Total Load',
      value: '42%',
      trend: '-5%',
      icon: Activity
    },
    {
      title: 'Active Connections',
      value: '435',
      trend: '+12',
      icon: Network
    },
    {
      title: 'Memory Usage',
      value: '9.1GB',
      trend: '+0.3GB',
      icon: Database
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">Load Balancing</h1>
          <p className="text-white/60 mt-1">Monitor and optimize resource distribution</p>
        </div>
        <div className="flex items-center gap-2">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2 px-4 py-2 bg-white/[0.03] text-white/60 rounded-xl
              hover:bg-white/[0.05] transition-colors"
          >
            <Settings className="w-5 h-5" />
            <span>Settings</span>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setAutoScaling(!autoScaling)}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-colors ${
              autoScaling
                ? 'bg-success text-white'
                : 'bg-white/[0.03] text-white/60'
            }`}
          >
            <RefreshCw className="w-5 h-5" />
            <span>Auto-Scaling {autoScaling ? 'ON' : 'OFF'}</span>
          </motion.button>
        </div>
      </div>

      {/* System Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {metrics.map((metric) => (
          <motion.div
            key={metric.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <QuantumCard>
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-sm text-white/60">{metric.title}</h3>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="text-2xl font-bold">{metric.value}</span>
                    <span className="text-sm text-success flex items-center">
                      <ArrowUpRight className="w-3 h-3 mr-0.5" />
                      {metric.trend}
                    </span>
                  </div>
                </div>
                <div className="p-2 rounded-lg bg-accent-blue/10">
                  <metric.icon className="w-5 h-5 text-accent-blue" />
                </div>
              </div>
            </QuantumCard>
          </motion.div>
        ))}
      </div>

      {/* Server Status */}
      <QuantumCard>
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-lg font-semibold">Server Status</h2>
            <p className="text-sm text-white/60 mt-1">Real-time server monitoring</p>
          </div>
          <Server className="w-5 h-5 text-white/40" />
        </div>
        <div className="space-y-4">
          {servers.map((server) => (
            <div
              key={server.id}
              className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.08]
                hover:bg-white/[0.04] transition-colors"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${
                    server.status === 'healthy' ? 'bg-success/10' : 'bg-accent-yellow/10'
                  }`}>
                    <HardDrive className={`w-5 h-5 ${
                      server.status === 'healthy' ? 'text-success' : 'text-accent-yellow'
                    }`} />
                  </div>
                  <div>
                    <h3 className="font-medium">{server.name}</h3>
                    <span className="text-sm text-white/40 capitalize">{server.status}</span>
                  </div>
                </div>
                <button className="p-2 rounded-lg bg-white/[0.03] hover:bg-white/[0.05] transition-colors">
                  <Settings className="w-4 h-4 text-white/60" />
                </button>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="p-3 rounded-lg bg-white/[0.03]">
                  <div className="text-sm text-white/40">Load</div>
                  <div className="text-lg font-medium mt-1">{server.load}%</div>
                </div>
                <div className="p-3 rounded-lg bg-white/[0.03]">
                  <div className="text-sm text-white/40">Memory</div>
                  <div className="text-lg font-medium mt-1">{server.memory}</div>
                </div>
                <div className="p-3 rounded-lg bg-white/[0.03]">
                  <div className="text-sm text-white/40">Connections</div>
                  <div className="text-lg font-medium mt-1">{server.connections}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </QuantumCard>

      {/* Load Distribution */}
      <QuantumCard>
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-lg font-semibold">Load Distribution</h2>
            <p className="text-sm text-white/60 mt-1">Traffic and resource allocation</p>
          </div>
          <BarChart2 className="w-5 h-5 text-white/40" />
        </div>
        <div className="h-[300px] flex items-center justify-center text-white/40">
          Load distribution chart will be implemented here
        </div>
      </QuantumCard>
    </div>
  );
};

export default LoadBalancing;