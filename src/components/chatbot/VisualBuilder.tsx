import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Bot, 
  MessageSquare, 
  Braces, 
  Settings, 
  Save,
  Play,
  Plus,
  X,
  ChevronRight,
  Code,
  Wand2,
  Sparkles
} from 'lucide-react';
import { QuantumCard } from '@/components/ui/QuantumCard';

interface BotConfig {
  name: string;
  description: string;
  personality: string;
  language: string;
  capabilities: string[];
  contextWindow: number;
  maxTokens: number;
}

const VisualBuilder = () => {
  const [activeTab, setActiveTab] = useState<'builder' | 'code'>('builder');
  const [config, setConfig] = useState<BotConfig>({
    name: 'New Chatbot',
    description: 'A helpful AI assistant',
    personality: 'Professional and friendly',
    language: 'English',
    capabilities: ['General Conversation', 'Customer Support'],
    contextWindow: 4096,
    maxTokens: 1024
  });

  const capabilities = [
    'General Conversation',
    'Customer Support',
    'Technical Support',
    'Sales',
    'Lead Generation',
    'Appointment Scheduling',
    'FAQ',
    'Data Analysis',
    'Code Assistance'
  ];

  const handleCapabilityToggle = (capability: string) => {
    setConfig(prev => ({
      ...prev,
      capabilities: prev.capabilities.includes(capability)
        ? prev.capabilities.filter(c => c !== capability)
        : [...prev.capabilities, capability]
    }));
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">Visual Bot Builder</h1>
          <p className="text-white/60 mt-1">Design and configure your chatbot visually</p>
        </div>
        <div className="flex items-center gap-2">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2 px-4 py-2 bg-white/[0.03] text-white/60 rounded-xl
              hover:bg-white/[0.05] transition-colors duration-200"
          >
            <Play className="w-5 h-5" />
            <span>Test Bot</span>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2 px-4 py-2 bg-accent text-white rounded-xl
              hover:bg-accent-hover transition-colors duration-200"
          >
            <Save className="w-5 h-5" />
            <span>Save Changes</span>
          </motion.button>
        </div>
      </div>

      {/* Builder Interface */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Configuration */}
        <div className="lg:col-span-2 space-y-6">
          <QuantumCard>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold">Basic Configuration</h2>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActiveTab('builder')}
                  className={`px-3 py-1.5 rounded-lg transition-colors ${
                    activeTab === 'builder'
                      ? 'bg-accent text-white'
                      : 'bg-white/[0.03] text-white/60 hover:bg-white/[0.05]'
                  }`}
                >
                  <Bot className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setActiveTab('code')}
                  className={`px-3 py-1.5 rounded-lg transition-colors ${
                    activeTab === 'code'
                      ? 'bg-accent text-white'
                      : 'bg-white/[0.03] text-white/60 hover:bg-white/[0.05]'
                  }`}
                >
                  <Code className="w-4 h-4" />
                </button>
              </div>
            </div>

            {activeTab === 'builder' ? (
              <div className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-white/60 mb-2">
                      Bot Name
                    </label>
                    <input
                      type="text"
                      value={config.name}
                      onChange={(e) => setConfig({ ...config, name: e.target.value })}
                      className="w-full h-10 px-4 bg-white/[0.03] border border-white/[0.05] rounded-xl
                        focus:border-accent focus:ring-1 focus:ring-accent outline-none
                        text-white placeholder-white/40"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white/60 mb-2">
                      Description
                    </label>
                    <textarea
                      value={config.description}
                      onChange={(e) => setConfig({ ...config, description: e.target.value })}
                      className="w-full h-24 px-4 py-3 bg-white/[0.03] border border-white/[0.05] rounded-xl
                        focus:border-accent focus:ring-1 focus:ring-accent outline-none
                        text-white placeholder-white/40 resize-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white/60 mb-2">
                      Personality
                    </label>
                    <input
                      type="text"
                      value={config.personality}
                      onChange={(e) => setConfig({ ...config, personality: e.target.value })}
                      className="w-full h-10 px-4 bg-white/[0.03] border border-white/[0.05] rounded-xl
                        focus:border-accent focus:ring-1 focus:ring-accent outline-none
                        text-white placeholder-white/40"
                    />
                  </div>
                </div>

                <div className="pt-6 border-t border-white/[0.05]">
                  <label className="block text-sm font-medium text-white/60 mb-4">
                    Capabilities
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {capabilities.map((capability) => (
                      <button
                        key={capability}
                        onClick={() => handleCapabilityToggle(capability)}
                        className={`px-3 py-1.5 rounded-lg text-sm transition-colors ${
                          config.capabilities.includes(capability)
                            ? 'bg-accent text-white'
                            : 'bg-white/[0.03] text-white/60 hover:bg-white/[0.05]'
                        }`}
                      >
                        {capability}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="relative">
                <pre className="w-full h-[400px] p-4 bg-white/[0.02] border border-white/[0.05] rounded-xl
                  text-white/80 font-mono text-sm overflow-auto">
                  {JSON.stringify(config, null, 2)}
                </pre>
                <button className="absolute top-4 right-4 p-2 bg-white/[0.05] rounded-lg
                  hover:bg-white/[0.1] transition-colors">
                  <Braces className="w-4 h-4 text-white/60" />
                </button>
              </div>
            )}
          </QuantumCard>

          {/* Advanced Settings */}
          <QuantumCard>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold">Advanced Settings</h2>
              <Settings className="w-5 h-5 text-white/40" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-white/60 mb-2">
                  Context Window
                </label>
                <div className="flex items-center gap-4">
                  <input
                    type="range"
                    min="1024"
                    max="8192"
                    step="1024"
                    value={config.contextWindow}
                    onChange={(e) => setConfig({ ...config, contextWindow: parseInt(e.target.value) })}
                    className="flex-1"
                  />
                  <span className="text-sm text-white/60 min-w-[80px]">
                    {config.contextWindow.toLocaleString()} tokens
                  </span>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-white/60 mb-2">
                  Max Response Length
                </label>
                <div className="flex items-center gap-4">
                  <input
                    type="range"
                    min="256"
                    max="4096"
                    step="256"
                    value={config.maxTokens}
                    onChange={(e) => setConfig({ ...config, maxTokens: parseInt(e.target.value) })}
                    className="flex-1"
                  />
                  <span className="text-sm text-white/60 min-w-[80px]">
                    {config.maxTokens.toLocaleString()} tokens
                  </span>
                </div>
              </div>
            </div>
          </QuantumCard>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* AI Suggestions */}
          <QuantumCard>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold">AI Suggestions</h2>
              <Wand2 className="w-5 h-5 text-accent" />
            </div>
            <div className="space-y-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full p-3 rounded-lg bg-accent/10 border border-accent/20
                  hover:bg-accent/20 transition-colors text-left group"
              >
                <div className="flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-accent mt-0.5" />
                  <div>
                    <h3 className="text-sm font-medium text-accent">Optimize Response Time</h3>
                    <p className="text-sm text-white/60 mt-1">
                      Reduce max tokens to 512 for faster responses while maintaining quality
                    </p>
                  </div>
                </div>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full p-3 rounded-lg bg-accent/10 border border-accent/20
                  hover:bg-accent/20 transition-colors text-left group"
              >
                <div className="flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-accent mt-0.5" />
                  <div>
                    <h3 className="text-sm font-medium text-accent">Enhance Personality</h3>
                    <p className="text-sm text-white/60 mt-1">
                      Add more specific traits to create a more engaging conversation style
                    </p>
                  </div>
                </div>
              </motion.button>
            </div>
          </QuantumCard>

          {/* Quick Actions */}
          <QuantumCard>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Quick Actions</h2>
              <Plus className="w-5 h-5 text-white/40" />
            </div>
            <div className="space-y-2">
              <button className="w-full p-3 rounded-lg bg-white/[0.02] hover:bg-white/[0.04]
                border border-white/[0.05] transition-colors flex items-center justify-between group">
                <span className="text-sm">Import Configuration</span>
                <ChevronRight className="w-4 h-4 text-white/40 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="w-full p-3 rounded-lg bg-white/[0.02] hover:bg-white/[0.04]
                border border-white/[0.05] transition-colors flex items-center justify-between group">
                <span className="text-sm">Export Settings</span>
                <ChevronRight className="w-4 h-4 text-white/40 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="w-full p-3 rounded-lg bg-white/[0.02] hover:bg-white/[0.04]
                border border-white/[0.05] transition-colors flex items-center justify-between group">
                <span className="text-sm">View Templates</span>
                <ChevronRight className="w-4 h-4 text-white/40 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </QuantumCard>
        </div>
      </div>
    </div>
  );
};

export default VisualBuilder;