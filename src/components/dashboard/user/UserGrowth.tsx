import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Calendar, Filter } from 'lucide-react';
import { QuantumCard } from '@/components/ui/QuantumCard';

const UserGrowth = () => {
  const growthData = [
    { period: 'Jan', users: 8420, growth: 0 },
    { period: 'Feb', users: 9150, growth: 8.7 },
    { period: 'Mar', users: 10200, growth: 11.5 },
    { period: 'Apr', users: 10980, growth: 7.6 },
    { period: 'May', users: 11540, growth: 5.1 },
    { period: 'Jun', users: 12486, growth: 8.2 }
  ];

  return (
    <QuantumCard>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-lg font-semibold">User Growth</h2>
          <p className="text-sm text-white/60 mt-1">Monthly user acquisition</p>
        </div>
        <div className="flex items-center gap-2">
          <button className="p-2 rounded-lg hover:bg-white/[0.05] transition-colors">
            <Calendar className="w-4 h-4 text-white/60" />
          </button>
          <button className="p-2 rounded-lg hover:bg-white/[0.05] transition-colors">
            <Filter className="w-4 h-4 text-white/60" />
          </button>
        </div>
      </div>

      <div className="space-y-4">
        {growthData.map((item, index) => (
          <motion.div
            key={item.period}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-center"
          >
            <div className="w-12 text-sm text-white/60">{item.period}</div>
            <div className="flex-1 mx-4">
              <div className="h-8 bg-white/[0.02] rounded-lg relative">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${(item.users / 15000) * 100}%` }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  className="h-full bg-accent/20 rounded-lg"
                />
                <div className="absolute inset-0 flex items-center px-3">
                  <span className="text-sm font-medium">{item.users.toLocaleString()}</span>
                </div>
              </div>
            </div>
            <div className="w-16 text-right">
              {index > 0 && (
                <span className="text-sm text-success flex items-center justify-end">
                  <ArrowUpRight className="w-3 h-3 mr-0.5" />
                  {item.growth}%
                </span>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-6 pt-4 border-t border-white/[0.08] flex justify-between items-center">
        <div>
          <span className="text-sm text-white/60">Current Total</span>
          <div className="text-xl font-bold">12,486</div>
        </div>
        <div>
          <span className="text-sm text-white/60">Projected EOY</span>
          <div className="text-xl font-bold">18,750</div>
        </div>
        <div>
          <span className="text-sm text-white/60">Avg. Growth</span>
          <div className="text-xl font-bold">8.2%</div>
        </div>
      </div>
    </QuantumCard>
  );
};

export default UserGrowth;