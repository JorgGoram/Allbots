import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Clock, AudioWaveform as Waveform } from 'lucide-react';

interface Activity {
  id: number;
  type: string;
  agent: string;
  duration: string;
  status: string;
  time: string;
  sentiment: 'positive' | 'neutral' | 'negative';
  quality: number;
}

interface VoicePulseCardProps {
  activity: Activity;
}

const VoicePulseCard: React.FC<VoicePulseCardProps> = ({ activity }) => {
  const sentimentColors = {
    positive: 'bg-success/10 text-success',
    neutral: 'bg-accent/10 text-accent',
    negative: 'bg-error/10 text-error'
  };

  const qualityColor = activity.quality >= 95 
    ? 'text-success' 
    : activity.quality >= 85 
    ? 'text-warning' 
    : 'text-error';

  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      className="flex items-center justify-between p-4 rounded-xl bg-white/[0.02] hover:bg-white/[0.04] 
        transition-all duration-200 border border-white/[0.02] hover:border-white/[0.08]"
    >
      <div className="flex items-center space-x-4">
        <div className="relative">
          <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
            <Phone className="w-6 h-6 text-accent" />
          </div>
          {activity.status === 'in-progress' && (
            <motion.div
              initial={{ scale: 0.8, opacity: 0.5 }}
              animate={{ scale: 1.3, opacity: 0 }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="absolute inset-0 rounded-xl border-2 border-accent"
            />
          )}
        </div>
        <div>
          <div className="flex items-center space-x-2">
            <p className="font-medium text-base">{activity.agent}</p>
            <span className={`px-2 py-0.5 rounded-full text-xs ${sentimentColors[activity.sentiment]}`}>
              {activity.sentiment}
            </span>
          </div>
          <div className="flex items-center space-x-3 mt-1 text-sm text-white/40">
            <span className="flex items-center">
              <Clock className="w-3 h-3 mr-1" />
              {activity.duration}
            </span>
            <span className={`font-medium ${qualityColor}`}>
              {activity.quality}% Quality
            </span>
          </div>
        </div>
      </div>

      {activity.status === 'in-progress' && (
        <div className="flex items-center space-x-2">
          <Waveform className="w-5 h-5 text-accent animate-pulse" />
          <span className="text-accent text-sm">Live</span>
        </div>
      )}
    </motion.div>
  );
};

export default VoicePulseCard;