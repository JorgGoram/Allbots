import React from 'react';
import { motion } from 'framer-motion';
import { BarChart2, Users, Bot, Clock, ArrowUpRight } from 'lucide-react';
import { QuantumCard } from '@/components/ui/QuantumCard';

const OverviewStats = () => {
  const metrics = [
    {
      title: 'Active Conversations',
      value: '24',
      trend: '+12%',
      icon: Bot,
      color: 'accent-blue'
    },
    {
      title: 'Response Success Rate',
      value: '95.8%',
      trend: '+3.2%',
      icon: BarChart2,
      color: 'success'
    },
    {
      title: 'Avg. Response Time',
      value: '1.2s',
      trend: '-0.3s',
      icon: Clock,
      color: 'accent-yellow'
    },
    {
      title: 'Client Satisfaction',
      value: '98%',
      trend: '+2.4%',
      icon: Users,
      color: 'success'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
      {metrics.map((metric, index) => (
        <motion.div
          key={metric.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
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
              <div className={`p-2 rounded-lg bg-${metric.color}/10`}>
                <metric.icon className={`w-5 h-5 text-${metric.color}`} />
              </div>
            </div>
          </QuantumCard>
        </motion.div>
      ))}
    </div>
  );
};

export default OverviewStats;