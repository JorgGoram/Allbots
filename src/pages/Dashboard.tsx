import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain,
  Zap,
  Users,
  Bot,
  ArrowUpRight,
  Shield,
  Activity,
  CheckCircle2,
  AlertTriangle,
  Server
} from 'lucide-react';
import { QuantumCard } from '@/components/ui/QuantumCard';
import { Button } from '@/components/ui/button';
import { ThreeDCard, ThreeDCardTitle, ThreeDCardContent, ThreeDCardIcon } from '@/components/ui/3d-card';
import { useAnimatedCounter } from '@/hooks/useAnimatedCounter';

const Dashboard = () => {
  // Animated counters for key metrics
  const activeUsers = useAnimatedCounter(4378);
  const activeChats = useAnimatedCounter(156);
  const systemUptime = useAnimatedCounter(99.98);
  const responseTime = useAnimatedCounter(0.85);

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="text-xs text-white/40 uppercase">YOU ARE HERE {'>'} Dashboard</div>
          <h1 className="text-2xl font-bold">Command Center</h1>
          <p className="text-white/60 mt-1">Real-time system overview and key metrics</p>
        </div>
        <div className="flex items-center gap-3">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.03] text-white/60
              hover:bg-white/[0.05] border border-white/[0.08] transition-colors"
          >
            <Brain className="w-5 h-5" />
            <span>AI Insights</span>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white text-black
              hover:bg-white/90 transition-colors"
          >
            <Zap className="w-5 h-5" />
            <span>Quick Actions</span>
          </motion.button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <ThreeDCard depth="medium" glowColor="accent-blue" className="relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-accent-blue/10 rounded-full blur-3xl -mr-10 -mt-10 opacity-50"></div>
          <ThreeDCardIcon className="bg-accent-blue/20">
            <Users className="w-6 h-6 text-accent-blue" />
          </ThreeDCardIcon>
          <ThreeDCardTitle>Active Users</ThreeDCardTitle>
          <ThreeDCardContent>
            <div className="flex items-baseline gap-2 mt-1">
              <span className="text-3xl font-bold">{activeUsers}</span>
              <span className="text-sm text-success flex items-center">
                <ArrowUpRight className="w-3 h-3 mr-0.5" />
                +12.5%
              </span>
            </div>
            <p className="text-xs text-white/40 mt-2">Current online users across all platforms</p>
          </ThreeDCardContent>
        </ThreeDCard>

        <ThreeDCard depth="medium" glowColor="accent-secondary" className="relative overflow-hidden">
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent-secondary/10 rounded-full blur-3xl -ml-10 -mb-10 opacity-50"></div>
          <ThreeDCardIcon className="bg-accent-secondary/20">
            <Bot className="w-6 h-6 text-accent-secondary" />
          </ThreeDCardIcon>
          <ThreeDCardTitle>Active Conversations</ThreeDCardTitle>
          <ThreeDCardContent>
            <div className="flex items-baseline gap-2 mt-1">
              <span className="text-3xl font-bold">{activeChats}</span>
              <span className="text-sm text-success flex items-center">
                <ArrowUpRight className="w-3 h-3 mr-0.5" />
                +8.3%
              </span>
            </div>
            <p className="text-xs text-white/40 mt-2">Ongoing chat sessions with AI agents</p>
          </ThreeDCardContent>
        </ThreeDCard>

        <ThreeDCard depth="medium" glowColor="success" className="relative overflow-hidden">
          <div className="absolute top-0 left-0 w-32 h-32 bg-success/10 rounded-full blur-3xl -ml-10 -mt-10 opacity-50"></div>
          <ThreeDCardIcon className="bg-success/20">
            <Shield className="w-6 h-6 text-success" />
          </ThreeDCardIcon>
          <ThreeDCardTitle>System Uptime</ThreeDCardTitle>
          <ThreeDCardContent>
            <div className="flex items-baseline gap-2 mt-1">
              <span className="text-3xl font-bold">{systemUptime}%</span>
              <span className="text-sm text-success flex items-center">
                <CheckCircle2 className="w-3 h-3 mr-0.5" />
                Stable
              </span>
            </div>
            <p className="text-xs text-white/40 mt-2">30-day rolling average uptime</p>
          </ThreeDCardContent>
        </ThreeDCard>

        <ThreeDCard depth="medium" glowColor="accent-cyan" className="relative overflow-hidden">
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-accent-cyan/10 rounded-full blur-3xl -mr-10 -mb-10 opacity-50"></div>
          <ThreeDCardIcon className="bg-accent-cyan/20">
            <Zap className="w-6 h-6 text-accent-cyan" />
          </ThreeDCardIcon>
          <ThreeDCardTitle>Response Time</ThreeDCardTitle>
          <ThreeDCardContent>
            <div className="flex items-baseline gap-2 mt-1">
              <span className="text-3xl font-bold">{responseTime}s</span>
              <span className="text-sm text-success flex items-center">
                <ArrowUpRight className="w-3 h-3 mr-0.5" />
                -0.2s
              </span>
            </div>
            <p className="text-xs text-white/40 mt-2">Average API response time</p>
          </ThreeDCardContent>
        </ThreeDCard>
      </div>

      {/* Main Dashboard Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* System Status Overview */}
        <QuantumCard className="lg:col-span-2">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-lg font-semibold">System Status</h2>
              <p className="text-sm text-white/60 mt-1">Real-time health monitoring</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-success animate-pulse"></div>
                <span className="text-xs text-white/60">Live</span>
              </div>
              <Button variant="outline" size="sm" className="ml-2">
                <Activity className="w-4 h-4 mr-2" />
                Details
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            {[
              { name: 'API Gateway', status: 'healthy', icon: Server, metric: '99.9% Uptime' },
              { name: 'Database Cluster', status: 'healthy', icon: Activity, metric: '45ms Response' },
              { name: 'AI Processing', status: 'healthy', icon: Brain, metric: '78% Capacity' },
              { name: 'Network', status: 'healthy', icon: Activity, metric: '1.2Gbps Traffic' }
            ].map((system) => (
              <div
                key={system.name}
                className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.08]
                  hover:bg-white/[0.04] transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-success/10">
                      <system.icon className="w-4 h-4 text-success" />
                    </div>
                    <div>
                      <h3 className="font-medium">{system.name}</h3>
                      <span className="text-xs text-white/40 capitalize">{system.status}</span>
                    </div>
                  </div>
                  <span className="text-sm">{system.metric}</span>
                </div>
              </div>
            ))}
          </div>
        </QuantumCard>

        {/* Quick Insights */}
        <QuantumCard>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold">Quick Insights</h2>
            <Brain className="w-5 h-5 text-accent" />
          </div>

          <div className="space-y-4">
            <div className="p-3 rounded-xl bg-success/10 border border-success/20">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-success mt-0.5" />
                <div>
                  <h3 className="text-sm font-medium text-success">All Systems Operational</h3>
                  <p className="text-sm text-success/60 mt-1">
                    No incidents reported in the last 24 hours
                  </p>
                </div>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-accent/10 border border-accent/20">
              <div className="flex items-start gap-3">
                <Brain className="w-5 h-5 text-accent mt-0.5" />
                <div>
                  <h3 className="text-sm font-medium text-accent">AI Performance Optimized</h3>
                  <p className="text-sm text-accent/60 mt-1">
                    Response times improved by 15% after latest update
                  </p>
                </div>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-warning/10 border border-warning/20">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-warning mt-0.5" />
                <div>
                  <h3 className="text-sm font-medium text-warning">Traffic Spike Detected</h3>
                  <p className="text-sm text-warning/60 mt-1">
                    Unusual activity from EU region (14:00-16:00)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </QuantumCard>
      </div>
    </div>
  );
};

export default Dashboard;