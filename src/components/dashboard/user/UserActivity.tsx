import React from 'react';
import { motion } from 'framer-motion';
import { Clock, User, MapPin, Monitor } from 'lucide-react';
import { QuantumCard } from '@/components/ui/QuantumCard';

const UserActivity = () => {
  const activities = [
    {
      user: 'John Doe',
      action: 'Logged in',
      time: '2 minutes ago',
      location: 'New York, USA',
      device: 'Desktop - Chrome'
    },
    {
      user: 'Jane Smith',
      action: 'Updated profile',
      time: '15 minutes ago',
      location: 'London, UK',
      device: 'Mobile - Safari'
    },
    {
      user: 'Robert Johnson',
      action: 'Made a purchase',
      time: '32 minutes ago',
      location: 'Toronto, Canada',
      device: 'Tablet - Firefox'
    },
    {
      user: 'Emily Davis',
      action: 'Submitted feedback',
      time: '1 hour ago',
      location: 'Sydney, Australia',
      device: 'Desktop - Edge'
    }
  ];

  return (
    <QuantumCard>
      <h2 className="text-lg font-semibold mb-4">Recent User Activity</h2>
      <div className="space-y-4">
        {activities.map((activity, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] transition-colors"
          >
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                <User className="w-5 h-5 text-accent" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-medium">{activity.user}</span>
                  <span className="text-white/40">•</span>
                  <span className="text-white/60">{activity.action}</span>
                </div>
                <div className="flex flex-wrap gap-x-4 gap-y-1 mt-1 text-xs text-white/40">
                  <span className="flex items-center">
                    <Clock className="w-3 h-3 mr-1" />
                    {activity.time}
                  </span>
                  <span className="flex items-center">
                    <MapPin className="w-3 h-3 mr-1" />
                    {activity.location}
                  </span>
                  <span className="flex items-center">
                    <Monitor className="w-3 h-3 mr-1" />
                    {activity.device}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </QuantumCard>
  );
};

export default UserActivity;