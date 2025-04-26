import React from 'react';
import { Search, Bell, User, Settings, Plus } from 'lucide-react';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 right-0 left-0 lg:left-64 z-50 bg-black/90 backdrop-blur-md border-b border-white/[0.05]"
    >
      <div className="h-16 md:h-20 border-b border-white/[0.05] bg-black/90 backdrop-blur-md px-4 md:px-6 lg:px-8 flex items-center justify-between">
        {/* Left spacing for mobile menu button */}
        <div className="w-12 lg:hidden"></div>

        <div className="flex items-center flex-1 max-w-2xl">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search agents, calls, or analytics..."
              className="w-full h-10 md:h-12 rounded-xl border border-white/[0.05] bg-black/[0.3] 
                px-4 py-2 pl-12 text-white placeholder-white/40 
                focus:border-white/20 focus:outline-none focus:ring-1 focus:ring-white/20
                transition-colors text-sm md:text-base"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-white/40" />
          </div>
        </div>
        
        <div className="flex items-center space-x-2 md:space-x-4 lg:space-x-6">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative rounded-xl p-2.5 text-white/70 hover:bg-white/[0.05] hover:text-white transition-colors"
          >
            <Bell className="h-5 w-5 md:h-6 md:w-6" />
            <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-white animate-pulse"></span>
          </motion.button>
          
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-xl p-2.5 text-white/70 hover:bg-white/[0.05] hover:text-white transition-colors lg:flex hidden items-center space-x-2"
          >
            <Plus className="h-5 w-5 md:h-6 md:w-6" />
            <span className="hidden xl:inline">New Agent</span>
          </motion.button>
          
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-xl p-2.5 text-white/70 hover:bg-white/[0.05] hover:text-white transition-colors lg:block hidden"
          >
            <Settings className="h-5 w-5 md:h-6 md:w-6" />
          </motion.button>
          
          <div className="hidden lg:flex items-center space-x-3 pl-6 border-l border-white/[0.05]">
            <div className="h-10 w-10 rounded-xl bg-white/10 p-1.5 ring-2 ring-white/20">
              <User className="h-full w-full text-white" />
            </div>
            <div>
              <div className="text-sm font-medium">Admin</div>
              <div className="text-xs text-white/40">Super Admin</div>
            </div>
          </div>

          {/* Mobile user icon */}
          <div className="lg:hidden">
            <div className="h-9 w-9 rounded-xl bg-white/10 p-1.5 ring-2 ring-white/20">
              <User className="h-full w-full text-white" />
            </div>
          </div>
        </div>
      </div>
    </motion.header>
  );
}

export default Header;