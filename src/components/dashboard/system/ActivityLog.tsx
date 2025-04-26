import React from 'react';
import { motion } from 'framer-motion';
import { Clock, AlertTriangle, CheckCircle, Info } from 'lucide-react';
import { QuantumCard } from '@/components/ui/QuantumCard';

const ActivityLog = () => {
  const activities = [
    { 
      type: 'info', 
      message: 'System update scheduled for 02:00 UTC', 
      time: '10 minutes ago'
    },
    { 
      type: 'success', 
      message: 'Database backup completed successfully', 
      time: '25 minutes ago'
    },
    { 
      type: 'warning', 
      message: 'High CPU usage detected on node-3', 
      time: '45 minutes ago'
    },
    { 
      type: 'info', 
      message: 'New user registration spike from EU region', 
      time: '1 hour ago'
    },
    { 
      type: 'success', 
      message: 'API gateway failover test completed', 
      time: '2 hours ago'
    }
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case 'info':
        return <Info className="w-4 h-4 text-accent-blue" />;
      case 'success':
        return <CheckCircle className="w-4 h-4 text-success" />;
      case 'warning':
        return <AlertTriangle className="w-4 h-4 text-warning" />;
      case 'error':
        return <AlertTriangle className="w-4 h-4 text-error" />;
      default:
        return <Info className="w-4 h-4 text-accent-blue" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'info':
        return 'border-l-accent-blue';
      case 'success':
        return 'border-l-success';
      case 'warning':
        return 'border-l-warning';
      case 'error':
        return 'border-l-error';
      default:
        return 'border-l-accent-blue';
    }
  };

  return (
    <QuantumCard>
      <h2 className="text-lg font-semibold mb-4">Activity Log</h2>
      <div className="space-y-3 max-h-[300px] overflow-y-auto custom-scrollbar pr-1">
        {activities.map((activity, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`p-3 bg-white/[0.02] border-l-2 rounded-r-lg ${getTypeColor(activity.type)}`}
          >
            <div className="flex items-start gap-3">
              <div className="mt-0.5">
                {getIcon(activity.type)}
              </div>
              <div className="flex-1">
                <p className="text-sm">{activity.message}</p>
                <div className="flex items-center mt-1 text-xs text-white/40">
                  <Clock className="w-3 h-3 mr-1" />
                  <span>{activity.time}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </QuantumCard>
  );
};

export default ActivityLog;