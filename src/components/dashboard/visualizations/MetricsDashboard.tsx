import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Cpu, 
  Database, 
  Network, 
  Users, 
  MessageSquare, 
  Clock,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react';

const MetricsDashboard: React.FC = () => {
  const [metrics, setMetrics] = useState({
    cpu: 42,
    memory: 68,
    network: 35,
    activeUsers: 4378,
    conversations: 156,
    responseTime: 85
  });
  
  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics(prev => ({
        cpu: Math.min(100, Math.max(10, prev.cpu + (Math.random() * 10 - 5))),
        memory: Math.min(100, Math.max(20, prev.memory + (Math.random() * 6 - 3))),
        network: Math.min(100, Math.max(5, prev.network + (Math.random() * 8 - 4))),
        activeUsers: Math.max(4000, prev.activeUsers + Math.floor(Math.random() * 20 - 10)),
        conversations: Math.max(100, prev.conversations + Math.floor(Math.random() * 6 - 3)),
        responseTime: Math.max(50, Math.min(200, prev.responseTime + Math.floor(Math.random() * 10 - 5)))
      }));
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);
  
  const getProgressColor = (value: number, inverse: boolean = false) => {
    if (inverse) {
      if (value > 80) return 'bg-error';
      if (value > 60) return 'bg-warning';
      return 'bg-success';
    } else {
      if (value > 80) return 'bg-success';
      if (value > 60) return 'bg-accent-blue';
      return 'bg-accent-secondary';
    }
  };
  
  return (
    <div className="space-y-6">
      {/* System Resources */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium">System Resources</h3>
        
        <div className="space-y-3">
          <div className="space-y-1">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Cpu className="w-4 h-4 text-accent-blue" />
                <span className="text-sm">CPU Usage</span>
              </div>
              <span className="text-sm font-medium">{Math.round(metrics.cpu)}%</span>
            </div>
            <div className="w-full h-1.5 bg-white/[0.05] rounded-full overflow-hidden">
              <motion.div 
                animate={{ width: `${metrics.cpu}%` }}
                transition={{ duration: 0.5 }}
                className={`h-full rounded-full ${getProgressColor(metrics.cpu, true)}`}
              />
            </div>
          </div>
          
          <div className="space-y-1">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Database className="w-4 h-4 text-accent-secondary" />
                <span className="text-sm">Memory Usage</span>
              </div>
              <span className="text-sm font-medium">{Math.round(metrics.memory)}%</span>
            </div>
            <div className="w-full h-1.5 bg-white/[0.05] rounded-full overflow-hidden">
              <motion.div 
                animate={{ width: `${metrics.memory}%` }}
                transition={{ duration: 0.5 }}
                className={`h-full rounded-full ${getProgressColor(metrics.memory, true)}`}
              />
            </div>
          </div>
          
          <div className="space-y-1">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Network className="w-4 h-4 text-accent-cyan" />
                <span className="text-sm">Network Traffic</span>
              </div>
              <span className="text-sm font-medium">{Math.round(metrics.network)}%</span>
            </div>
            <div className="w-full h-1.5 bg-white/[0.05] rounded-full overflow-hidden">
              <motion.div 
                animate={{ width: `${metrics.network}%` }}
                transition={{ duration: 0.5 }}
                className={`h-full rounded-full ${getProgressColor(metrics.network, true)}`}
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* User Metrics */}
      <div className="space-y-4 pt-4 border-t border-white/[0.08]">
        <h3 className="text-sm font-medium">User Metrics</h3>
        
        <div className="grid grid-cols-2 gap-3">
          <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.08]">
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-accent-blue" />
                <span className="text-sm">Active Users</span>
              </div>
            </div>
            <div className="flex items-baseline justify-between">
              <span className="text-lg font-semibold">{metrics.activeUsers.toLocaleString()}</span>
              <span className="text-xs text-success flex items-center">
                <ArrowUpRight className="w-3 h-3 mr-0.5" />
                12.5%
              </span>
            </div>
          </div>
          
          <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.08]">
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-accent-secondary" />
                <span className="text-sm">Conversations</span>
              </div>
            </div>
            <div className="flex items-baseline justify-between">
              <span className="text-lg font-semibold">{metrics.conversations}</span>
              <span className="text-xs text-success flex items-center">
                <ArrowUpRight className="w-3 h-3 mr-0.5" />
                8.3%
              </span>
            </div>
          </div>
        </div>
        
        <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.08]">
          <div className="flex items-center justify-between mb-1">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-accent-cyan" />
              <span className="text-sm">Response Time</span>
            </div>
            <span className="text-sm font-medium">{metrics.responseTime} ms</span>
          </div>
          <div className="w-full h-1.5 bg-white/[0.05] rounded-full overflow-hidden">
            <motion.div 
              animate={{ width: `${(metrics.responseTime / 200) * 100}%` }}
              transition={{ duration: 0.5 }}
              className={`h-full rounded-full ${
                metrics.responseTime < 100 ? 'bg-success' : 
                metrics.responseTime < 150 ? 'bg-warning' : 'bg-error'
              }`}
            />
          </div>
          <div className="flex justify-end mt-1">
            <span className="text-xs text-success flex items-center">
              <ArrowDownRight className="w-3 h-3 mr-0.5" />
              -12.5%
            </span>
          </div>
        </div>
      </div>
      
      {/* Status Indicators */}
      <div className="pt-4 border-t border-white/[0.08]">
        <div className="grid grid-cols-2 gap-3">
          <div className="p-3 rounded-lg bg-success/10 border border-success/20 flex items-center justify-between">
            <span className="text-sm text-success">API Gateway</span>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 rounded-full bg-success animate-pulse"></div>
              <span className="text-xs text-success">Online</span>
            </div>
          </div>
          
          <div className="p-3 rounded-lg bg-success/10 border border-success/20 flex items-center justify-between">
            <span className="text-sm text-success">Database</span>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 rounded-full bg-success animate-pulse"></div>
              <span className="text-xs text-success">Online</span>
            </div>
          </div>
          
          <div className="p-3 rounded-lg bg-success/10 border border-success/20 flex items-center justify-between">
            <span className="text-sm text-success">AI Processing</span>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 rounded-full bg-success animate-pulse"></div>
              <span className="text-xs text-success">Online</span>
            </div>
          </div>
          
          <div className="p-3 rounded-lg bg-success/10 border border-success/20 flex items-center justify-between">
            <span className="text-sm text-success">Network</span>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 rounded-full bg-success animate-pulse"></div>
              <span className="text-xs text-success">Online</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MetricsDashboard;