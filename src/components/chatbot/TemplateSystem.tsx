import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Layout, 
  Search, 
  Filter,
  Star,
  Clock,
  Users,
  Shield,
  Zap,
  Plus,
  ArrowRight
} from 'lucide-react';
import { QuantumCard } from '@/components/ui/QuantumCard';

interface Template {
  id: string;
  name: string;
  category: 'industry' | 'use-case' | 'custom' | 'compliance';
  description: string;
  popularity: number;
  lastUsed: string;
  isNew: boolean;
}

const TemplateSystem = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const templates: Template[] = [
    {
      id: '1',
      name: 'E-commerce Assistant',
      category: 'industry',
      description: 'Optimized for online retail customer support and product recommendations',
      popularity: 98,
      lastUsed: '2024-03-15T10:00:00Z',
      isNew: false
    },
    {
      id: '2',
      name: 'Lead Generation',
      category: 'use-case',
      description: 'Designed to qualify leads and schedule appointments',
      popularity: 95,
      lastUsed: '2024-03-14T15:30:00Z',
      isNew: true
    },
    {
      id: '3',
      name: 'HIPAA Compliant Healthcare',
      category: 'compliance',
      description: 'Secure template for healthcare providers with HIPAA compliance',
      popularity: 92,
      lastUsed: '2024-03-13T09:15:00Z',
      isNew: false
    },
    {
      id: '4',
      name: 'Custom Support Flow',
      category: 'custom',
      description: 'Customized template for technical support and issue resolution',
      popularity: 88,
      lastUsed: '2024-03-12T14:20:00Z',
      isNew: true
    }
  ];

  const categories = [
    { id: 'all', name: 'All Templates', icon: Layout },
    { id: 'industry', name: 'Industry Specific', icon: Users },
    { id: 'use-case', name: 'Use Cases', icon: Zap },
    { id: 'custom', name: 'Custom', icon: Star },
    { id: 'compliance', name: 'Compliance', icon: Shield }
  ];

  const filteredTemplates = templates.filter(template => {
    const matchesSearch = template.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         template.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || template.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">Template System</h1>
          <p className="text-white/60 mt-1">Start with pre-built templates or create your own</p>
        </div>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex items-center gap-2 px-4 py-2 bg-accent text-white rounded-xl
            hover:bg-accent-hover transition-colors duration-200"
        >
          <Plus className="w-5 h-5" />
          <span>Create Template</span>
        </motion.button>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col md:flex-row gap-4">
        <QuantumCard className="flex-1">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
            <input
              type="text"
              placeholder="Search templates..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-10 pl-10 pr-4 bg-white/[0.03] border border-white/[0.05] rounded-xl
                focus:border-accent focus:ring-1 focus:ring-accent outline-none
                text-white placeholder-white/40"
            />
          </div>
        </QuantumCard>
        <QuantumCard className="flex gap-2 overflow-x-auto">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap
                ${selectedCategory === category.id 
                  ? 'bg-accent text-white' 
                  : 'bg-white/[0.03] text-white/60 hover:bg-white/[0.05]'
                } transition-colors duration-200`}
            >
              <category.icon className="w-4 h-4" />
              <span>{category.name}</span>
            </button>
          ))}
        </QuantumCard>
      </div>

      {/* Templates Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredTemplates.map((template) => (
          <motion.div
            key={template.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <QuantumCard className="h-full">
              <div className="flex flex-col h-full">
                {/* Template Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-medium">{template.name}</h3>
                      {template.isNew && (
                        <span className="px-2 py-0.5 text-xs rounded-full bg-accent/10 text-accent">
                          New
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-white/60 mt-1">{template.description}</p>
                  </div>
                </div>

                {/* Template Stats */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-1 text-white/60">
                    <Star className="w-4 h-4" />
                    <span className="text-sm">{template.popularity}% Popularity</span>
                  </div>
                  <div className="flex items-center gap-1 text-white/60">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">
                      {new Date(template.lastUsed).toLocaleDateString()}
                    </span>
                  </div>
                </div>

                {/* Template Actions */}
                <div className="mt-auto pt-4 border-t border-white/[0.05] flex items-center justify-between">
                  <span className="text-sm text-white/40 capitalize">{template.category} Template</span>
                  <motion.button
                    whileHover={{ x: 4 }}
                    className="flex items-center gap-2 text-accent hover:text-accent-hover transition-colors"
                  >
                    <span className="text-sm">Use Template</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>
            </QuantumCard>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TemplateSystem;