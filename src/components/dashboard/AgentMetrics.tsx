import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Clock, ThumbsUp, AlertTriangle } from 'lucide-react';

const metrics = [
  { 
    title: 'Avg. Response Time',
    value: '1.2s',
    icon: Clock,
    trend: '-0.3s',
    trendType: 'positive'
  },
  {
    title: 'Resolution Rate',
    value: '94%',
    icon: ThumbsUp,
    trend: '+2%',
    trendType: 'positive'
  },
  {
    title: 'Error Rate',
    value: '0.5%',
    icon: AlertTriangle,
    trend: '-0.2%',
    trendType: 'positive'
  },
  {
    title: 'Agent Utilization',
    value: '78%',
    icon: Bot,
    trend: '+5%',
    trendType: 'positive'
  }
];

const AgentMetrics = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      {metrics.map((metric, index) => (
        <motion.div
          key={metric.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="p-4 rounded-xl bg-white/[0.02] hover:bg-white/[0.04] border border-white/[0.05] hover:border-white/[0.08] transition-all duration-200"
        >
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-white/60">{metric.title}</p>
              <p className="text-xl font-semibold mt-1">{metric.value}</p>
            </div>
            <div className="rounded-lg bg-accent/10 p-2">
              <metric.icon className="w-4 h-4 text-accent" />
            </div>
          </div>
          <div className="mt-2">
            <span className={`text-sm ${
              metric.trendType === 'positive' ? 'text-success' : 'text-error'
            }`}>
              {metric.trend}
            </span>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default AgentMetrics;