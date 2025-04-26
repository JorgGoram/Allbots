import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Cpu, MemoryStick as Memory, Activity, Zap, BarChart2, ArrowUpRight, Settings, RefreshCw, AlertTriangle, CheckCircle2 } from 'lucide-react';
import { QuantumCard } from '@/components/ui/QuantumCard';

const PerformanceTuning = () => {
  const [optimizing, setOptimizing] = useState(false);

  const metrics = [
    {
      title: 'CPU Usage',
      value: '45%',
      trend: '-5%',
      status: 'optimal',
      icon: Cpu
    },
    {
      title: 'Memory Usage',
      value: '3.2GB',
      trend: '+0.2GB',
      status: 'warning',
      icon: Memory
    },
    {
      title: 'Response Time',
      value: '120ms',
      trend: '-10ms',
      status: 'optimal',
      icon: Activity
    }
  ];

  const optimizations = [
    {
      title: 'Memory Optimization',
      description: 'Clear unused cache and optimize memory allocation',
      impact: 'high',
      duration: '~2 mins'
    },
    {
      title: 'Response Time Tuning',
      description: 'Optimize request handling and database queries',
      impact: 'medium',
      duration: '~5 mins'
    },
    {
      title: 'Load Balancing',
      description: 'Redistribute workload across available resources',
      impact: 'high',
      duration: '~3 mins'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">Performance Tuning</h1>
          <p className="text-white/60 mt-1">Optimize your system for peak performance</p>
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
            onClick={() => setOptimizing(true)}
            className="flex items-center gap-2 px-4 py-2 bg-accent-blue text-white rounded-xl
              hover:bg-accent-blue-hover transition-colors"
          >
            <Zap className="w-5 h-5" />
            <span>Auto-Optimize</span>
          </motion.button>
        </div>
      </div>

      {/* Performance Metrics */}
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
                    <span className={`text-sm flex items-center ${
                      metric.status === 'optimal' ? 'text-success' : 'text-warning'
                    }`}>
                      <ArrowUpRight className="w-3 h-3 mr-0.5" />
                      {metric.trend}
                    </span>
                  </div>
                </div>
                <div className={`p-2 rounded-lg ${
                  metric.status === 'optimal' ? 'bg-success/10' : 'bg-warning/10'
                }`}>
                  <metric.icon className={`w-5 h-5 ${
                    metric.status === 'optimal' ? 'text-success' : 'text-warning'
                  }`} />
                </div>
              </div>
            </QuantumCard>
          </motion.div>
        ))}
      </div>

      {/* System Load */}
      <QuantumCard>
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-lg font-semibold">System Load</h2>
            <p className="text-sm text-white/60 mt-1">Real-time performance monitoring</p>
          </div>
          <BarChart2 className="w-5 h-5 text-white/40" />
        </div>
        <div className="h-[300px] flex items-center justify-center text-white/40">
          Performance chart will be implemented here
        </div>
      </QuantumCard>

      {/* Optimization Tasks */}
      <QuantumCard>
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-lg font-semibold">Optimization Tasks</h2>
            <p className="text-sm text-white/60 mt-1">Available performance improvements</p>
          </div>
          <RefreshCw className="w-5 h-5 text-white/40" />
        </div>
        <div className="space-y-4">
          {optimizations.map((task) => (
            <div
              key={task.title}
              className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.08]
                hover:bg-white/[0.04] transition-colors"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-3">
                  <div className={`p-2 rounded-lg ${
                    task.impact === 'high' ? 'bg-accent-blue/10' : 'bg-accent-yellow/10'
                  }`}>
                    <Zap className={`w-5 h-5 ${
                      task.impact === 'high' ? 'text-accent-blue' : 'text-accent-yellow'
                    }`} />
                  </div>
                  <div>
                    <h3 className="font-medium">{task.title}</h3>
                    <p className="text-sm text-white/60 mt-1">{task.description}</p>
                    <div className="flex items-center gap-4 mt-2">
                      <span className="text-xs text-white/40">Impact: {task.impact}</span>
                      <span className="text-xs text-white/40">Duration: {task.duration}</span>
                    </div>
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-3 py-1.5 rounded-lg bg-white/[0.03] text-sm text-white/60
                    hover:bg-white/[0.05] transition-colors"
                >
                  Run
                </motion.button>
              </div>
            </div>
          ))}
        </div>
      </QuantumCard>

      {/* Optimization Modal */}
      {optimizing && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full max-w-md"
          >
            <QuantumCard>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-accent-blue/10 flex items-center justify-center mb-4">
                  <RefreshCw className="w-8 h-8 text-accent-blue animate-spin" />
                </div>
                <h2 className="text-xl font-semibold mb-2">System Optimization</h2>
                <p className="text-white/60 mb-6">Running automatic performance optimizations...</p>
                <div className="w-full h-2 bg-white/[0.03] rounded-full overflow-hidden mb-6">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '75%' }}
                    transition={{ duration: 2 }}
                    className="h-full bg-accent-blue rounded-full"
                  />
                </div>
                <button
                  onClick={() => setOptimizing(false)}
                  className="text-white/60 hover:text-white transition-colors"
                >
                  Cancel
                </button>
              </div>
            </QuantumCard>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default PerformanceTuning;