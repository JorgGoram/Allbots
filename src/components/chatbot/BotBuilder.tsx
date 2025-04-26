import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Bot, 
  Puzzle, 
  Rocket,
  Brain,
  Globe,
  MessageSquare,
  Heart,
  Zap,
  Play,
  Save,
  Plus,
  Sparkles,
  ArrowRight,
  Blocks,
  Shield,
  Gauge,
  ChevronRight,
  Settings
} from 'lucide-react';
import { QuantumCard } from '@/components/ui/QuantumCard';

const BotBuilder = () => {
  const [activeTab, setActiveTab] = useState<'builder' | 'templates' | 'launch' | 'improve'>('builder');

  const templates = [
    {
      id: 1,
      name: 'Customer Support',
      description: 'Pre-built for handling customer inquiries and support tickets',
      category: 'industry',
      icon: MessageSquare
    },
    {
      id: 2,
      name: 'Sales Assistant',
      description: 'Optimized for lead generation and sales conversations',
      category: 'use-case',
      icon: Heart
    },
    {
      id: 3,
      name: 'HIPAA Compliant',
      description: 'Secure template for healthcare providers',
      category: 'compliance',
      icon: Shield
    }
  ];

  const buildingBlocks = [
    {
      id: 'welcome',
      type: 'message',
      name: 'Welcome Message',
      icon: MessageSquare
    },
    {
      id: 'intent',
      type: 'logic',
      name: 'Intent Recognition',
      icon: Brain
    },
    {
      id: 'response',
      type: 'action',
      name: 'Dynamic Response',
      icon: Zap
    }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'builder':
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {buildingBlocks.map((block) => (
                <motion.div
                  key={block.id}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="cursor-grab"
                >
                  <QuantumCard className="border-2 border-dashed border-white/[0.08] hover:border-accent-blue/40 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-accent-blue/10">
                        <block.icon className="w-5 h-5 text-accent-blue" />
                      </div>
                      <div>
                        <h3 className="font-medium">{block.name}</h3>
                        <p className="text-sm text-white/60">{block.type}</p>
                      </div>
                    </div>
                  </QuantumCard>
                </motion.div>
              ))}
            </div>

            <QuantumCard>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold">Bot Configuration</h2>
                <Settings className="w-5 h-5 text-white/40" />
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-white/60 mb-2">Bot Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 rounded-lg bg-white/[0.03] border border-white/[0.08]
                      focus:border-accent-blue focus:ring-1 focus:ring-accent-blue outline-none"
                    placeholder="Enter bot name..."
                  />
                </div>
                <div>
                  <label className="block text-sm text-white/60 mb-2">Description</label>
                  <textarea
                    className="w-full px-4 py-2 rounded-lg bg-white/[0.03] border border-white/[0.08]
                      focus:border-accent-blue focus:ring-1 focus:ring-accent-blue outline-none resize-none h-24"
                    placeholder="Describe your bot's purpose..."
                  />
                </div>
              </div>
            </QuantumCard>
          </div>
        );

      case 'templates':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {templates.map((template) => (
              <motion.div
                key={template.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <QuantumCard>
                  <div className="flex flex-col h-full">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-accent-blue/10">
                          <template.icon className="w-5 h-5 text-accent-blue" />
                        </div>
                        <div>
                          <h3 className="font-medium">{template.name}</h3>
                          <span className="text-xs text-white/40 capitalize">{template.category}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-white/60 mb-4">{template.description}</p>
                    <button className="mt-auto flex items-center justify-between w-full px-4 py-2 rounded-lg
                      bg-white/[0.03] hover:bg-white/[0.05] transition-colors group">
                      <span className="text-sm">Use Template</span>
                      <ChevronRight className="w-4 h-4 text-white/40 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </QuantumCard>
              </motion.div>
            ))}
          </div>
        );

      case 'launch':
        return (
          <div className="space-y-6">
            <QuantumCard>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-lg font-semibold">Deployment Channels</h2>
                  <p className="text-sm text-white/60 mt-1">Choose where to deploy your chatbot</p>
                </div>
                <Globe className="w-5 h-5 text-white/40" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {['Website', 'WhatsApp', 'Facebook'].map((channel) => (
                  <button
                    key={channel}
                    className="p-4 rounded-lg bg-white/[0.03] border border-white/[0.08]
                      hover:bg-white/[0.05] hover:border-accent-blue/40 transition-colors"
                  >
                    <h3 className="font-medium">{channel}</h3>
                    <p className="text-sm text-white/60 mt-1">Deploy to {channel}</p>
                  </button>
                ))}
              </div>
            </QuantumCard>

            <QuantumCard>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-lg font-semibold">Pre-launch Checklist</h2>
                  <p className="text-sm text-white/60 mt-1">Ensure everything is ready</p>
                </div>
                <Gauge className="w-5 h-5 text-white/40" />
              </div>
              <div className="space-y-3">
                {[
                  'Test conversations',
                  'Security checks',
                  'Performance optimization',
                  'Error handling'
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 p-3 rounded-lg bg-white/[0.03] border border-white/[0.08]"
                  >
                    <div className="w-5 h-5 rounded-full border-2 border-accent-blue/40" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </QuantumCard>
          </div>
        );

      case 'improve':
        return (
          <div className="space-y-6">
            <QuantumCard>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-lg font-semibold">AI Suggestions</h2>
                  <p className="text-sm text-white/60 mt-1">Recommendations for improvement</p>
                </div>
                <Sparkles className="w-5 h-5 text-accent-yellow" />
              </div>
              <div className="space-y-4">
                {[
                  'Update response templates for better engagement',
                  'Add more conversation flows for edge cases',
                  'Implement sentiment analysis for better understanding'
                ].map((suggestion) => (
                  <div
                    key={suggestion}
                    className="p-4 rounded-lg bg-white/[0.03] border border-white/[0.08]
                      hover:bg-white/[0.05] transition-colors"
                  >
                    <div className="flex items-start gap-3">
                      <Brain className="w-5 h-5 text-accent-yellow mt-1" />
                      <div>
                        <p className="text-sm">{suggestion}</p>
                        <button className="text-accent-blue text-sm mt-2 flex items-center gap-1">
                          Apply Suggestion
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </QuantumCard>
          </div>
        );
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">Chatbot Command Center</h1>
          <p className="text-white/60 mt-1">Build and manage your AI chatbot with zero code</p>
        </div>
        <div className="flex items-center gap-2">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2 px-4 py-2 bg-white/[0.03] text-white/60 rounded-xl
              hover:bg-white/[0.05] transition-colors"
          >
            <Play className="w-5 h-5" />
            <span>Test Bot</span>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2 px-4 py-2 bg-accent-blue text-white rounded-xl
              hover:bg-accent-blue-hover transition-colors"
          >
            <Save className="w-5 h-5" />
            <span>Save Changes</span>
          </motion.button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2">
        {[
          { id: 'builder', label: 'Build a Bot', icon: Puzzle },
          { id: 'templates', label: 'Templates', icon: Blocks },
          { id: 'launch', label: 'Launch', icon: Rocket },
          { id: 'improve', label: 'Improve', icon: Brain }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-colors ${
              activeTab === tab.id
                ? 'bg-accent-blue text-white'
                : 'bg-white/[0.03] text-white/60 hover:bg-white/[0.05]'
            }`}
          >
            <tab.icon className="w-5 h-5" />
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Tab Content */}
      {renderTabContent()}
    </div>
  );
};

export default BotBuilder;