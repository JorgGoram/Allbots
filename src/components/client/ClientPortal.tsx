import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart2, Users, Bot, Clock, ArrowUp, Zap,
  Shield, Settings, Bell, HelpCircle, Download,
  Filter, Search, Plus, ArrowRight, Activity
} from 'lucide-react';
import { QuantumCard } from '@/components/ui/QuantumCard';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { useAnimatedCounter } from '@/hooks/useAnimatedCounter';
import NeuralNetworkViz from './NeuralNetworkViz';

const ClientPortal = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Enhanced network data with additional metrics
  const networkData = {
    accuracy: 95,
    loss: 0.15,
    epochs: 100,
    learningRate: 0.001,
    batchSize: 32,
    optimizerType: 'Adam',
    modelArchitecture: 'Transformer',
    trainingTime: 3600,
    inferenceLatency: 15,
    memoryUsage: 512
  };

  const performanceData = {
    daily: [65, 75, 82, 78, 88, 92, 95],
    weekly: [2100, 1800, 2300, 2400, 2150, 2600, 2800]
  };

  const stats = [
    { 
      title: 'Total Revenue',
      value: '$175,200',
      trend: '+12.5%',
      color: 'from-[#4B6BFB] to-[#2CCED9]'
    },
    {
      title: 'Active Users',
      value: '2,542',
      trend: '+8.1%',
      color: 'from-[#7B5CFA] to-[#9D4BFF]'
    },
    {
      title: 'Conversion Rate',
      value: '9.3%',
      trend: '+3.2%',
      color: 'from-[#2CCED9] to-[#00D4FF]'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-accent via-accent-secondary to-accent-cyan">
            Performance Dashboard
          </h1>
          <p className="text-white/60 mt-1">Real-time analytics and insights</p>
        </div>
        <div className="flex items-center gap-2">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2 px-4 py-2 rounded-xl
              bg-gradient-to-r from-accent/10 to-accent-cyan/10 
              border border-accent/20 text-accent hover:border-accent/40
              transition-colors"
          >
            <Activity className="w-5 h-5" />
            <span>View Reports</span>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2 px-4 py-2 rounded-xl
              bg-gradient-to-r from-accent to-accent-cyan
              text-white shadow-lg shadow-accent/25
              hover:shadow-accent/40 transition-all"
          >
            <Plus className="w-5 h-5" />
            <span>New Project</span>
          </motion.button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r opacity-75 blur-lg
                group-hover:opacity-100 transition-opacity rounded-xl"
                style={{ backgroundImage: `linear-gradient(to right, ${stat.color})` }}
              />
              <QuantumCard className="relative bg-background/95 backdrop-blur-xl">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-white/60">{stat.title}</p>
                    <div className="flex items-baseline space-x-2 mt-1">
                      <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r"
                        style={{ backgroundImage: `linear-gradient(to right, ${stat.color})` }}>
                        {stat.value}
                      </span>
                      <span className="text-success text-sm flex items-center">
                        <ArrowUp className="w-3 h-3 mr-1" />
                        {stat.trend}
                      </span>
                    </div>
                  </div>
                </div>
              </QuantumCard>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Neural Network Visualization */}
        <div className="xl:col-span-2">
          <QuantumCard className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-accent-secondary/5 to-accent-cyan/5 opacity-50" />
            <div className="relative">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold bg-clip-text text-transparent 
                  bg-gradient-to-r from-accent to-accent-cyan">
                  Network Performance
                </h2>
                <div className="flex items-center gap-2">
                  <button className="p-2 rounded-lg bg-white/[0.03] hover:bg-white/[0.05] 
                    transition-colors text-white/60">
                    <Filter className="w-5 h-5" />
                  </button>
                  <button className="p-2 rounded-lg bg-white/[0.03] hover:bg-white/[0.05] 
                    transition-colors text-white/60">
                    <Settings className="w-5 h-5" />
                  </button>
                </div>
              </div>
              <NeuralNetworkViz data={networkData} />
            </div>
          </QuantumCard>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Quick Stats */}
          <QuantumCard className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-accent-secondary/5 to-accent-cyan/5 opacity-50" />
            <div className="relative">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold bg-clip-text text-transparent 
                  bg-gradient-to-r from-accent to-accent-cyan">
                  Quick Stats
                </h2>
                <Activity className="w-5 h-5 text-accent" />
              </div>
              <div className="space-y-4">
                <div className="p-3 rounded-xl bg-gradient-to-r from-accent/10 to-accent-cyan/10 
                  border border-accent/20">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-accent/20">
                        <Users className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <p className="text-sm text-white/60">Active Users</p>
                        <p className="text-lg font-semibold text-white">2,542</p>
                      </div>
                    </div>
                    <div className="text-success text-sm flex items-center">
                      <ArrowUp className="w-3 h-3 mr-1" />
                      8.1%
                    </div>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-gradient-to-r from-accent-secondary/10 to-accent/10 
                  border border-accent-secondary/20">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-accent-secondary/20">
                        <Bot className="w-5 h-5 text-accent-secondary" />
                      </div>
                      <div>
                        <p className="text-sm text-white/60">AI Responses</p>
                        <p className="text-lg font-semibold text-white">98.5%</p>
                      </div>
                    </div>
                    <div className="text-success text-sm flex items-center">
                      <ArrowUp className="w-3 h-3 mr-1" />
                      2.4%
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </QuantumCard>

          {/* System Status */}
          <QuantumCard className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-accent-secondary/5 to-accent-cyan/5 opacity-50" />
            <div className="relative">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold bg-clip-text text-transparent 
                  bg-gradient-to-r from-accent to-accent-cyan">
                  System Status
                </h2>
                <Shield className="w-5 h-5 text-accent" />
              </div>
              <div className="space-y-3">
                <div className="p-3 rounded-xl bg-success/10 border border-success/20">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-success/20">
                      <Shield className="w-4 h-4 text-success" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-success">All Systems Operational</p>
                      <p className="text-xs text-success/60 mt-1">Last checked: 2 mins ago</p>
                    </div>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-accent/10 border border-accent/20">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-accent/20">
                      <Activity className="w-4 h-4 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-accent">Response Time: 120ms</p>
                      <p className="text-xs text-accent/60 mt-1">Avg. over last hour</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </QuantumCard>
        </div>
      </div>
    </div>
  );
};

export default ClientPortal;