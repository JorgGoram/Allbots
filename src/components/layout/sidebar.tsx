import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Bot,
  Home,
  Settings,
  Shield,
  Activity,
  Gauge,
  X,
  ChevronRight,
  HelpCircle,
  MessageSquare,
  BarChart2
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface SidebarProps {
  onClose: () => void;
}

const menuItems = [
  { 
    section: 'Core',
    items: [
      { icon: Home, label: 'Dashboard', path: '/' },
      { icon: BarChart2, label: 'Analytics', path: '/analytics' },
      { icon: Bot, label: 'Chatbots', path: '/chatbots' },
      { icon: Activity, label: 'Performance', path: '/system' },
      { icon: Shield, label: 'Security', path: '/system/security' },
      { icon: Gauge, label: 'Load Balancing', path: '/system/load-balancing' },
    ]
  }
];

const Sidebar = ({ onClose }: SidebarProps) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  return (
    <>
      {/* Mobile Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="lg:hidden fixed inset-0 z-30 bg-black/80 backdrop-blur-sm"
      />

      {/* Sidebar */}
      <motion.div
        initial={{ x: -300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -300, opacity: 0 }}
        className={cn(
          "fixed left-0 top-0 z-40 h-screen",
          "w-[280px] md:w-[320px] lg:w-64",
          "bg-black/95 backdrop-blur-md",
          "border-r border-white/[0.05]",
          "flex flex-col"
        )}
      >
        {/* Close button for mobile */}
        <button
          onClick={onClose}
          className="lg:hidden absolute top-4 right-4 p-2 rounded-lg text-white/60 hover:text-white
            hover:bg-white/[0.05] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex h-16 md:h-20 items-center px-6 border-b border-white/[0.05]">
          <Bot className="mr-3 h-8 w-8 text-white" />
          <span className="text-xl font-bold text-white">AllBots</span>
        </div>

        {/* Navigation */}
        <div className="flex-1 overflow-y-auto px-3 py-6 space-y-6">
          {menuItems.map((section, sectionIndex) => (
            <div key={section.section}>
              <h3 className="px-4 text-xs font-semibold text-white/40 uppercase tracking-wider mb-2">
                {section.section}
              </h3>
              <div className="space-y-1">
                {section.items.map((item, index) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: (sectionIndex * 0.1) + (index * 0.05) }}
                  >
                    <NavLink
                      to={item.path}
                      onClick={onClose}
                      className={({ isActive }) =>
                        cn(
                          'flex items-center justify-between',
                          'rounded-xl px-4 py-3',
                          'transition-all duration-200',
                          'hover:bg-white/[0.05]',
                          'group',
                          isActive
                            ? 'bg-white/10 text-white font-medium'
                            : 'text-white/70 hover:text-white'
                        )
                      }
                    >
                      <div className="flex items-center">
                        <item.icon className="w-5 h-5 mr-3 transition-transform group-hover:scale-110" />
                        <span className="text-sm">{item.label}</span>
                      </div>
                    </NavLink>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Help & Support Button */}
        <div className="p-4 border-t border-white/[0.05]">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={cn(
              "w-full rounded-xl p-4",
              "bg-gradient-to-r from-white/10 to-white/5",
              "text-white/80 hover:text-white transition-colors",
              "flex items-center justify-between",
              "border border-white/[0.05] hover:border-white/[0.1]",
              "group"
            )}
          >
            <div className="flex items-center space-x-3">
              <HelpCircle className="h-5 w-5 transition-transform group-hover:scale-110" />
              <span className="font-medium">Help & Support</span>
            </div>
            <ChevronRight className="h-5 w-5 text-white/40 transition-transform group-hover:translate-x-1" />
          </motion.button>
        </div>
      </motion.div>
    </>
  );
};

export default Sidebar;