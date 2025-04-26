import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Users, 
  Key, 
  Lock,
  AlertTriangle,
  CheckCircle2,
  Eye,
  Clock,
  RefreshCw,
  Settings,
  UserPlus
} from 'lucide-react';
import { QuantumCard } from '@/components/ui/QuantumCard';

const SecurityCenter = () => {
  const [selectedTab, setSelectedTab] = useState('overview');

  const securityScore = 92;
  const lastScan = '2 hours ago';
  const activeUsers = 156;

  const securityAlerts = [
    {
      type: 'warning',
      message: 'Unusual login activity detected',
      time: '15 minutes ago',
      action: 'Review'
    },
    {
      type: 'success',
      message: 'Security scan completed',
      time: '2 hours ago',
      action: 'View Report'
    },
    {
      type: 'info',
      message: 'System updates available',
      time: '1 day ago',
      action: 'Update'
    }
  ];

  const accessLogs = [
    {
      user: 'John Doe',
      action: 'Login',
      status: 'success',
      time: '10 minutes ago',
      location: 'New York, US'
    },
    {
      user: 'Jane Smith',
      action: 'File Access',
      status: 'warning',
      time: '1 hour ago',
      location: 'London, UK'
    },
    {
      user: 'Mike Johnson',
      action: 'Settings Change',
      status: 'success',
      time: '2 hours ago',
      location: 'Toronto, CA'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">Security Center</h1>
          <p className="text-white/60 mt-1">Monitor and manage system security</p>
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
            className="flex items-center gap-2 px-4 py-2 bg-accent-blue text-white rounded-xl
              hover:bg-accent-blue-hover transition-colors"
          >
            <Shield className="w-5 h-5" />
            <span>Run Security Scan</span>
          </motion.button>
        </div>
      </div>

      {/* Security Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <QuantumCard>
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-sm text-white/60">Security Score</h3>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-2xl font-bold">{securityScore}%</span>
                  <span className="text-sm text-success flex items-center">
                    <CheckCircle2 className="w-3 h-3 mr-0.5" />
                    Good
                  </span>
                </div>
              </div>
              <div className="p-2 rounded-lg bg-success/10">
                <Shield className="w-5 h-5 text-success" />
              </div>
            </div>
          </QuantumCard>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <QuantumCard>
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-sm text-white/60">Active Users</h3>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-2xl font-bold">{activeUsers}</span>
                  <span className="text-sm text-white/40">online now</span>
                </div>
              </div>
              <div className="p-2 rounded-lg bg-accent-blue/10">
                <Users className="w-5 h-5 text-accent-blue" />
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
                <h3 className="text-sm text-white/60">Last Security Scan</h3>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-2xl font-bold">{lastScan}</span>
                </div>
              </div>
              <div className="p-2 rounded-lg bg-accent-yellow/10">
                <Clock className="w-5 h-5 text-accent-yellow" />
              </div>
            </div>
          </QuantumCard>
        </motion.div>
      </div>

      {/* Security Alerts */}
      <QuantumCard>
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-lg font-semibold">Security Alerts</h2>
            <p className="text-sm text-white/60 mt-1">Recent security events and notifications</p>
          </div>
          <AlertTriangle className="w-5 h-5 text-white/40" />
        </div>
        <div className="space-y-4">
          {securityAlerts.map((alert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`p-4 rounded-xl border ${
                alert.type === 'warning' ? 'bg-warning/10 border-warning/20' :
                alert.type === 'success' ? 'bg-success/10 border-success/20' :
                'bg-accent-blue/10 border-accent-blue/20'
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-3">
                  {alert.type === 'warning' ? (
                    <AlertTriangle className="w-5 h-5 text-warning mt-0.5" />
                  ) : alert.type === 'success' ? (
                    <CheckCircle2 className="w-5 h-5 text-success mt-0.5" />
                  ) : (
                    <Shield className="w-5 h-5 text-accent-blue mt-0.5" />
                  )}
                  <div>
                    <p className="font-medium">{alert.message}</p>
                    <span className="text-sm text-white/40">{alert.time}</span>
                  </div>
                </div>
                <button className={`px-3 py-1.5 rounded-lg text-sm ${
                  alert.type === 'warning' ? 'bg-warning/20 text-warning' :
                  alert.type === 'success' ? 'bg-success/20 text-success' :
                  'bg-accent-blue/20 text-accent-blue'
                }`}>
                  {alert.action}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </QuantumCard>

      {/* Access Logs */}
      <QuantumCard>
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-lg font-semibold">Access Logs</h2>
            <p className="text-sm text-white/60 mt-1">Recent system access activity</p>
          </div>
          <Key className="w-5 h-5 text-white/40" />
        </div>
        <div className="space-y-4">
          {accessLogs.map((log, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.08]
                hover:bg-white/[0.04] transition-colors"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${
                    log.status === 'success' ? 'bg-success/10' : 'bg-warning/10'
                  }`}>
                    {log.status === 'success' ? (
                      <CheckCircle2 className="w-4 h-4 text-success" />
                    ) : (
                      <AlertTriangle className="w-4 h-4 text-warning" />
                    )}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{log.user}</span>
                      <span className="text-white/40">•</span>
                      <span className="text-sm text-white/60">{log.action}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-white/40 mt-1">
                      <Clock className="w-3 h-3" />
                      <span>{log.time}</span>
                      <span>•</span>
                      <span>{log.location}</span>
                    </div>
                  </div>
                </div>
                <button className="p-2 rounded-lg bg-white/[0.03] hover:bg-white/[0.05] transition-colors">
                  <Eye className="w-4 h-4 text-white/60" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </QuantumCard>
    </div>
  );
};

export default SecurityCenter;