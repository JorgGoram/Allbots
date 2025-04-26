import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Bot, 
  Plus, 
  Search, 
  Settings, 
  BarChart2, 
  Filter,
  Grid,
  List
} from 'lucide-react';
import { QuantumCard } from '@/components/ui/QuantumCard';
import BotCard from './BotCard';

interface Chatbot {
  id: string;
  name: string;
  status: 'active' | 'inactive' | 'training';
  type: 'customer-service' | 'sales' | 'support';
  performance: number;
  conversations: number;
  lastUpdated: string;
}

const BotManagement = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState<'all' | 'active' | 'inactive' | 'training'>('all');
  const [showFilters, setShowFilters] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Mock data for demonstration
  const chatbots: Chatbot[] = [
    {
      id: '1',
      name: 'Customer Support Bot',
      status: 'active',
      type: 'customer-service',
      performance: 98,
      conversations: 1234,
      lastUpdated: '2024-03-15T10:00:00Z'
    },
    {
      id: '2',
      name: 'Sales Assistant',
      status: 'active',
      type: 'sales',
      performance: 95,
      conversations: 856,
      lastUpdated: '2024-03-14T15:30:00Z'
    },
    {
      id: '3',
      name: 'Technical Support',
      status: 'training',
      type: 'support',
      performance: 87,
      conversations: 432,
      lastUpdated: '2024-03-13T09:15:00Z'
    },
    {
      id: '4',
      name: 'Lead Generation Bot',
      status: 'inactive',
      type: 'sales',
      performance: 92,
      conversations: 678,
      lastUpdated: '2024-03-12T14:20:00Z'
    }
  ];

  const filteredBots = chatbots.filter(bot => {
    const matchesSearch = bot.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = filterStatus === 'all' || bot.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const handleDeleteBot = (id: string) => {
    // Implement delete functionality
    console.log('Delete bot:', id);
  };

  const handleToggleBot = (id: string) => {
    // Implement toggle functionality
    console.log('Toggle bot:', id);
  };

  const handleCopyBot = (id: string) => {
    // Implement copy functionality
    console.log('Copy bot:', id);
  };

  return (
    <div className="space-y-6 px-4 sm:px-6 md:px-8">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">Bot Management</h1>
          <p className="text-white/60 mt-1">Manage and monitor your AI chatbots</p>
        </div>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex items-center justify-center gap-2 px-4 py-2 bg-accent text-white rounded-xl
            hover:bg-accent-hover transition-colors duration-200 w-full sm:w-auto"
        >
          <Plus className="w-5 h-5" />
          <span>New Chatbot</span>
        </motion.button>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col gap-4">
        <QuantumCard className="flex flex-col sm:flex-row items-stretch gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
            <input
              type="text"
              placeholder="Search chatbots..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-12 pl-10 pr-4 bg-white/[0.03] border border-white/[0.05] rounded-xl
                focus:border-accent focus:ring-1 focus:ring-accent outline-none
                text-white placeholder-white/40"
            />
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="h-12 px-4 rounded-xl bg-white/[0.03] text-white/60 hover:bg-white/[0.05]
                transition-colors flex items-center gap-2 sm:hidden"
            >
              <Filter className="w-5 h-5" />
              <span>Filters</span>
            </button>
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value as any)}
              className="h-12 px-4 bg-white/[0.03] border border-white/[0.05] rounded-xl
                focus:border-accent focus:ring-1 focus:ring-accent outline-none
                text-white appearance-none cursor-pointer hidden sm:block min-w-[140px]"
            >
              <option value="all">All Status</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
              <option value="training">Training</option>
            </select>
            <div className="hidden sm:flex items-center gap-2 border-l border-white/[0.05] pl-4">
              <button
                onClick={() => setViewMode('grid')}
                className={`h-12 w-12 rounded-xl flex items-center justify-center transition-colors
                  ${viewMode === 'grid' 
                    ? 'bg-accent text-white' 
                    : 'bg-white/[0.03] text-white/60 hover:bg-white/[0.05]'
                  }`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`h-12 w-12 rounded-xl flex items-center justify-center transition-colors
                  ${viewMode === 'list' 
                    ? 'bg-accent text-white' 
                    : 'bg-white/[0.03] text-white/60 hover:bg-white/[0.05]'
                  }`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>
        </QuantumCard>

        {/* Mobile Filters */}
        <AnimatePresence>
          {showFilters && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="sm:hidden overflow-hidden"
            >
              <QuantumCard>
                <div className="space-y-2">
                  {['all', 'active', 'inactive', 'training'].map((status) => (
                    <button
                      key={status}
                      onClick={() => {
                        setFilterStatus(status as any);
                        setShowFilters(false);
                      }}
                      className={`w-full p-4 rounded-lg text-left transition-colors ${
                        filterStatus === status
                          ? 'bg-accent text-white'
                          : 'bg-white/[0.03] text-white/60 hover:bg-white/[0.05]'
                      }`}
                    >
                      {status.charAt(0).toUpperCase() + status.slice(1)}
                    </button>
                  ))}
                </div>
              </QuantumCard>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Chatbots Grid/List */}
      <div className={viewMode === 'grid' 
        ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6"
        : "space-y-4"
      }>
        <AnimatePresence>
          {filteredBots.map((bot) => (
            <BotCard
              key={bot.id}
              bot={bot}
              onDelete={handleDeleteBot}
              onToggle={handleToggleBot}
              onCopy={handleCopyBot}
              viewMode={viewMode}
            />
          ))}
        </AnimatePresence>
      </div>

      {/* Empty State */}
      {filteredBots.length === 0 && (
        <QuantumCard className="py-12">
          <div className="text-center">
            <Bot className="w-12 h-12 text-white/20 mx-auto mb-4" />
            <h3 className="text-lg font-medium mb-2">No chatbots found</h3>
            <p className="text-white/60 mb-6">Try adjusting your search or filters</p>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-accent text-white rounded-xl
                hover:bg-accent-hover transition-colors duration-200"
            >
              <Plus className="w-5 h-5" />
              <span>Create New Chatbot</span>
            </motion.button>
          </div>
        </QuantumCard>
      )}
    </div>
  );
};

export default BotManagement;