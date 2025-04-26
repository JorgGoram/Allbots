import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Settings, Play, Pause, Copy, Trash2, ExternalLink, ChevronRight } from 'lucide-react';
import { useGestures } from '@/hooks/useGestures';
import { useAnimatedCounter } from '@/hooks/useAnimatedCounter';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { QuantumCard } from '@/components/ui/QuantumCard';

interface BotCardProps {
  bot: {
    id: string;
    name: string;
    status: 'active' | 'inactive' | 'training';
    type: string;
    performance: number;
    conversations: number;
  };
  onDelete: (id: string) => void;
  onToggle: (id: string) => void;
  onCopy: (id: string) => void;
  viewMode: 'grid' | 'list';
}

const BotCard: React.FC<BotCardProps> = ({ bot, onDelete, onToggle, onCopy, viewMode }) => {
  const { elementRef: gestureRef, bind } = useGestures({
    onSwipe: (direction) => {
      if (direction === 'left') {
        onDelete(bot.id);
      }
    },
  });

  const { elementRef: intersectionRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.2,
  });

  const animatedPerformance = useAnimatedCounter(bot.performance);
  const animatedConversations = useAnimatedCounter(bot.conversations);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-success/10 text-success';
      case 'inactive':
        return 'bg-error/10 text-error';
      case 'training':
        return 'bg-warning/10 text-warning';
      default:
        return 'bg-accent/10 text-accent';
    }
  };

  if (viewMode === 'list') {
    return (
      <motion.div
        ref={(el) => {
          if (el) {
            (gestureRef as any).current = el;
            (intersectionRef as any).current = el;
          }
        }}
        initial={{ opacity: 0, x: -20 }}
        animate={isIntersecting ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
        exit={{ opacity: 0, x: 20 }}
        whileHover={{ scale: 1.01 }}
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
        {...bind()}
      >
        <QuantumCard className="touch-action-none">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className={`p-2 rounded-lg ${getStatusColor(bot.type)}`}>
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-medium">{bot.name}</h3>
                <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor(bot.status)}`}>
                  {bot.status.charAt(0).toUpperCase() + bot.status.slice(1)}
                </span>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="hidden sm:flex items-center gap-6">
                <div className="text-center">
                  <div className="text-sm text-white/60">Performance</div>
                  <div className="font-semibold">{animatedPerformance}%</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-white/60">Conversations</div>
                  <div className="font-semibold">{animatedConversations}</div>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => onToggle(bot.id)}
                  className="p-2 hover:bg-white/[0.05] rounded-lg transition-colors"
                >
                  {bot.status === 'active' ? (
                    <Pause className="w-5 h-5 text-white/60" />
                  ) : (
                    <Play className="w-5 h-5 text-white/60" />
                  )}
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => onCopy(bot.id)}
                  className="p-2 hover:bg-white/[0.05] rounded-lg transition-colors hidden sm:block"
                >
                  <Copy className="w-5 h-5 text-white/60" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => onDelete(bot.id)}
                  className="p-2 hover:bg-white/[0.05] rounded-lg transition-colors"
                >
                  <Trash2 className="w-5 h-5 text-white/60" />
                </motion.button>
                <motion.button
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-1 text-accent hover:text-accent-hover transition-colors"
                >
                  <span className="text-sm hidden sm:inline">View Details</span>
                  <ChevronRight className="w-5 h-5" />
                </motion.button>
              </div>
            </div>
          </div>
        </QuantumCard>
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={(el) => {
        if (el) {
          (gestureRef as any).current = el;
          (intersectionRef as any).current = el;
        }
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      exit={{ opacity: 0, y: -20 }}
      whileHover={{ scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      {...bind()}
    >
      <QuantumCard className="h-full touch-action-none">
        <div className="flex flex-col h-full">
          {/* Bot Header */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className={`p-2 rounded-lg ${getStatusColor(bot.type)}`}>
                <Bot className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-medium text-sm sm:text-base">{bot.name}</h3>
                <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor(bot.status)}`}>
                  {bot.status.charAt(0).toUpperCase() + bot.status.slice(1)}
                </span>
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 hover:bg-white/[0.05] rounded-lg transition-colors"
            >
              <Settings className="w-5 h-5 text-white/60" />
            </motion.button>
          </div>

          {/* Bot Stats */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-4">
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="p-2 sm:p-3 rounded-lg bg-white/[0.02] border border-white/[0.05]"
            >
              <div className="text-xs sm:text-sm text-white/60">Performance</div>
              <div className="text-base sm:text-lg font-semibold mt-1">
                {animatedPerformance}%
              </div>
            </motion.div>
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="p-2 sm:p-3 rounded-lg bg-white/[0.02] border border-white/[0.05]"
            >
              <div className="text-xs sm:text-sm text-white/60">Conversations</div>
              <div className="text-base sm:text-lg font-semibold mt-1">
                {animatedConversations}
              </div>
            </motion.div>
          </div>

          {/* Bot Actions */}
          <div className="mt-auto pt-4 border-t border-white/[0.05] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0">
            <div className="flex items-center space-x-2">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => onToggle(bot.id)}
                className="p-2 hover:bg-white/[0.05] rounded-lg transition-colors"
              >
                {bot.status === 'active' ? (
                  <Pause className="w-5 h-5 text-white/60" />
                ) : (
                  <Play className="w-5 h-5 text-white/60" />
                )}
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => onCopy(bot.id)}
                className="p-2 hover:bg-white/[0.05] rounded-lg transition-colors"
              >
                <Copy className="w-5 h-5 text-white/60" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => onDelete(bot.id)}
                className="p-2 hover:bg-white/[0.05] rounded-lg transition-colors"
              >
                <Trash2 className="w-5 h-5 text-white/60" />
              </motion.button>
            </div>
            <motion.button
              whileHover={{ x: 4 }}
              className="flex items-center space-x-1 text-accent hover:text-accent-hover 
                transition-colors w-full sm:w-auto justify-center sm:justify-start"
            >
              <span className="text-sm">View Details</span>
              <ExternalLink className="w-4 h-4" />
            </motion.button>
          </div>
        </div>
      </QuantumCard>
    </motion.div>
  );
};

export default BotCard;