import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BarChart2, 
  Users, 
  Bot, 
  Clock, 
  ArrowUp, 
  Zap,
  Shield,
  Settings,
  Bell,
  HelpCircle,
  Download,
  Filter,
  Search,
  Plus
} from 'lucide-react';
import { QuantumCard } from '@/components/ui/QuantumCard';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { useAnimatedCounter } from '@/hooks/useAnimatedCounter';

interface ClientMetrics {
  activeClients: number;
  totalBots: number;
  revenueMetrics: {
    monthly: number;
    recurring: number;
    pending: number;
  };
  healthScores: {
    satisfaction: number;
    engagement: number;
    retention: number;
  };
}

const ClientPortal = () => {
  const [activeView, setActiveView] = useState<'overview' | 'clients' | 'resources'>('overview');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState<'all' | 'active' | 'inactive'>('all');

  // Mock data
  const metrics: ClientMetrics = {
    activeClients: 156,
    totalBots: 24,
    revenueMetrics: {
      monthly: 45000,
      recurring: 38000,
      pending: 7200
    },
    healthScores: {
      satisfaction: 92,
      engagement: 88,
      retention: 95
    }
  };

  const { elementRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    freezeOnceVisible: true
  });

  const animatedActiveClients = useAnimatedCounter(metrics.activeClients);
  const animatedTotalBots = useAnimatedCounter(metrics.totalBots);
  const animatedMonthlyRevenue = useAnimatedCounter(metrics.revenueMetrics.monthly);

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">Client Portal</h1>
          <p className="text-white/60 mt-1">Manage your clients and monitor performance</p>
        </div>
        <div className="flex items-center gap-2">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2 px-4 py-2 bg-white/[0.03] text-white/60 rounded-xl
              hover:bg-white/[0.05] transition-colors duration-200"
          >
            <Download className="w-5 h-5" />
            <span>Export Data</span>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2 px-4 py-2 bg-accent text-white rounded-xl
              hover:bg-accent-hover transition-colors duration-200"
          >
            <Plus className="w-5 h-5" />
            <span>Add Client</span>
          </motion.button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <QuantumCard>
            <div className="flex items-start justify-between">
              <div>
                <p className="text-white/60">Active Clients</p>
                <div className="flex items-baseline space-x-2 mt-1">
                  <span className="text-2xl font-bold">{animatedActiveClients}</span>
                  <span className="text-success text-sm flex items-center">
                    <ArrowUp className="w-3 h-3 mr-1" />
                    12%
                  </span>
                </div>
              </div>
              <div className="p-2 rounded-lg bg-accent/10">
                <Users className="w-5 h-5 text-accent" />
              </div>
            </div>
          </QuantumCard>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <QuantumCard>
            <div className="flex items-start justify-between">
              <div>
                <p className="text-white/60">Active Bots</p>
                <div className="flex items-baseline space-x-2 mt-1">
                  <span className="text-2xl font-bold">{animatedTotalBots}</span>
                  <span className="text-success text-sm flex items-center">
                    <ArrowUp className="w-3 h-3 mr-1" />
                    8%
                  </span>
                </div>
              </div>
              <div className="p-2 rounded-lg bg-accent/10">
                <Bot className="w-5 h-5 text-accent" />
              </div>
            </div>
          </QuantumCard>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <QuantumCard>
            <div className="flex items-start justify-between">
              <div>
                <p className="text-white/60">Monthly Revenue</p>
                <div className="flex items-baseline space-x-2 mt-1">
                  <span className="text-2xl font-bold">${animatedMonthlyRevenue}</span>
                  <span className="text-success text-sm flex items-center">
                    <ArrowUp className="w-3 h-3 mr-1" />
                    15%
                  </span>
                </div>
              </div>
              <div className="p-2 rounded-lg bg-accent/10">
                <BarChart2 className="w-5 h-5 text-accent" />
              </div>
            </div>
          </QuantumCard>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <QuantumCard>
            <div className="flex items-start justify-between">
              <div>
                <p className="text-white/60">Health Score</p>
                <div className="flex items-baseline space-x-2 mt-1">
                  <span className="text-2xl font-bold">92%</span>
                  <span className="text-success text-sm flex items-center">
                    <ArrowUp className="w-3 h-3 mr-1" />
                    3%
                  </span>
                </div>
              </div>
              <div className="p-2 rounded-lg bg-accent/10">
                <Shield className="w-5 h-5 text-accent" />
              </div>
            </div>
          </QuantumCard>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Client Overview */}
        <div className="xl:col-span-2 space-y-6">
          <QuantumCard>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold">Client Overview</h2>
              <div className="flex items-center gap-2">
                <button className="p-2 rounded-lg bg-white/[0.03] hover:bg-white/[0.05] transition-colors">
                  <Filter className="w-5 h-5 text-white/60" />
                </button>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                  <input
                    type="text"
                    placeholder="Search clients..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full h-10 pl-10 pr-4 bg-white/[0.03] border border-white/[0.05] rounded-xl
                      focus:border-accent focus:ring-1 focus:ring-accent outline-none
                      text-white placeholder-white/40"
                  />
                </div>
              </div>
            </div>

            {/* Client List will be implemented here */}
            <div className="space-y-4">
              {/* Placeholder for client list */}
              <div className="h-[400px] flex items-center justify-center text-white/40">
                Client list implementation coming soon
              </div>
            </div>
          </QuantumCard>
        </div>

        {/* Quick Actions & Notifications */}
        <div className="space-y-6">
          {/* Quick Actions */}
          <QuantumCard>
            <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
            <div className="space-y-2">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full p-3 rounded-lg bg-accent/10 text-accent
                  hover:bg-accent/20 transition-colors flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <Bot className="w-5 h-5" />
                  <span>Deploy New Bot</span>
                </div>
                <ArrowUp className="w-4 h-4 rotate-45 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full p-3 rounded-lg bg-white/[0.03] text-white/60
                  hover:bg-white/[0.05] transition-colors flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <Settings className="w-5 h-5" />
                  <span>Configure Settings</span>
                </div>
                <ArrowUp className="w-4 h-4 rotate-45 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full p-3 rounded-lg bg-white/[0.03] text-white/60
                  hover:bg-white/[0.05] transition-colors flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <Bell className="w-5 h-5" />
                  <span>Notification Settings</span>
                </div>
                <ArrowUp className="w-4 h-4 rotate-45 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </div>
          </QuantumCard>

          {/* System Health */}
          <QuantumCard>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">System Health</h2>
              <Zap className="w-5 h-5 text-accent" />
            </div>
            <div className="space-y-4">
              <div className="p-3 rounded-lg bg-success/10 border border-success/20">
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-success mt-0.5" />
                  <div>
                    <h3 className="text-sm font-medium text-success">All Systems Operational</h3>
                    <p className="text-sm text-success/60 mt-1">
                      Services are running optimally
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-3 rounded-lg bg-accent/10 border border-accent/20">
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-accent mt-0.5" />
                  <div>
                    <h3 className="text-sm font-medium text-accent">Response Time: 120ms</h3>
                    <p className="text-sm text-accent/60 mt-1">
                      Within expected parameters
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </QuantumCard>

          {/* Help & Support */}
          <QuantumCard>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Help & Support</h2>
              <HelpCircle className="w-5 h-5 text-white/40" />
            </div>
            <p className="text-sm text-white/60 mb-4">
              Need assistance? Our support team is here to help you 24/7.
            </p>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full p-3 rounded-lg bg-accent text-white
                hover:bg-accent-hover transition-colors flex items-center justify-center gap-2"
            >
              <HelpCircle className="w-5 h-5" />
              <span>Contact Support</span>
            </motion.button>
          </QuantumCard>
        </div>
      </div>
    </div>
  );
};

export default ClientPortal;