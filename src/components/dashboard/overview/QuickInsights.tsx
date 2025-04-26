import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, CheckCircle2, Brain, Zap } from 'lucide-react';
import { QuantumCard } from '@/components/ui/QuantumCard';

const QuickInsights = () => {
  const insights = [
    {
      title: 'Performance Alert',
      description: 'High traffic detected. Consider scaling resources.',
      icon: AlertTriangle,
      type: 'warning'
    },
    {
      title: 'Optimization Opportunity',
      description: 'AI suggests updating response templates for better engagement.',
      icon: Brain,
      type: 'success'
    },
    {
      title: 'Resource Optimization',
      description: 'Memory usage optimization recommended.',
      icon: Zap,
      type: 'info'
    }
  ];

  return (
    <QuantumCard>
      <h2 className="text-lg font-semibold mb-4">AI-Powered Insights</h2>
      <div className="space-y-4">
        {insights.map((insight, index) => (
          <motion.div
            key={insight.title}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`p-4 rounded-xl border-l-4 ${
              insight.type === 'warning' ? 'border-l-warning bg-warning/5' :
              insight.type === 'success' ? 'border-l-success bg-success/5' :
              'border-l-accent-blue bg-accent-blue/5'
            }`}
          >
            <div className="flex items-start gap-4">
              <div className={`p-2 rounded-lg ${
                insight.type === 'warning' ? 'bg-warning/10 text-warning' :
                insight.type === 'success' ? 'bg-success/10 text-success' :
                'bg-accent-blue/10 text-accent-blue'
              }`}>
                <insight.icon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-medium">{insight.title}</h3>
                <p className="text-sm text-white/60 mt-1">{insight.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </QuantumCard>
  );
};

export default QuickInsights;