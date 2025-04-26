import React from 'react';
import { motion } from 'framer-motion';
import { Users, UserPlus, UserCheck, UserMinus } from 'lucide-react';
import { QuantumCard } from '@/components/ui/QuantumCard';

const UserStats = () => {
  const stats = [
    { 
      title: 'Total Users', 
      value: '12,486', 
      change: '+12.5%', 
      icon: Users,
      color: 'text-accent-blue',
      bgColor: 'bg-accent-blue/10'
    },
    { 
      title: 'New Users', 
      value: '1,248', 
      change: '+8.3%', 
      icon: UserPlus,
      color: 'text-success',
      bgColor: 'bg-success/10'
    },
    { 
      title: 'Active Users', 
      value: '8,652', 
      change: '+5.7%', 
      icon: UserCheck,
      color: 'text-accent-cyan',
      bgColor: 'bg-accent-cyan/10'
    },
    { 
      title: 'Churn Rate', 
      value: '2.4%', 
      change: '-0.8%', 
      icon: UserMinus,
      color: 'text-warning',
      bgColor: 'bg-warning/10'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <QuantumCard>
            <div className="flex items-start justify-between">
              <div>
                <p className="text-white/60">{stat.title}</p>
                <div className="flex items-baseline space-x-2 mt-1">
                  <span className="text-2xl font-bold">{stat.value}</span>
                  <span className="text-success text-sm flex items-center">
                    {stat.change}
                  </span>
                </div>
              </div>
              <div className={`p-2 rounded-lg ${stat.bgColor}`}>
                <stat.icon className={`w-5 h-5 ${stat.color}`} />
              </div>
            </div>
          </QuantumCard>
        </motion.div>
      ))}
    </div>
  );
};

export default UserStats;