import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  MessageSquare,
  Plus,
  Save,
  Play,
  ArrowRight,
  ArrowDown,
  Settings,
  Trash2,
  AlertCircle,
  CheckCircle2,
  HelpCircle,
  Sparkles,
  Zap
} from 'lucide-react';
import { QuantumCard } from '@/components/ui/QuantumCard';

interface FlowNode {
  id: string;
  type: 'message' | 'condition' | 'action';
  content: string;
  next?: string[];
  conditions?: { condition: string; next: string }[];
}

const ConversationFlow = () => {
  const [nodes, setNodes] = useState<FlowNode[]>([
    {
      id: 'start',
      type: 'message',
      content: 'Hello! How can I help you today?',
      next: ['condition1']
    },
    {
      id: 'condition1',
      type: 'condition',
      content: 'Intent Check',
      conditions: [
        { condition: 'intent === "support"', next: 'support' },
        { condition: 'intent === "sales"', next: 'sales' }
      ]
    },
    {
      id: 'support',
      type: 'message',
      content: 'I understand you need support. What seems to be the issue?',
      next: ['action1']
    },
    {
      id: 'sales',
      type: 'message',
      content: 'Great! I\'d be happy to tell you about our products.',
      next: ['action2']
    },
    {
      id: 'action1',
      type: 'action',
      content: 'Create Support Ticket',
      next: ['end']
    },
    {
      id: 'action2',
      type: 'action',
      content: 'Schedule Sales Call',
      next: ['end']
    }
  ]);

  const getNodeColor = (type: string) => {
    switch (type) {
      case 'message':
        return 'bg-accent/10 border-accent/20 text-accent';
      case 'condition':
        return 'bg-warning/10 border-warning/20 text-warning';
      case 'action':
        return 'bg-success/10 border-success/20 text-success';
      default:
        return 'bg-white/[0.03] border-white/[0.05] text-white';
    }
  };

  const getNodeIcon = (type: string) => {
    switch (type) {
      case 'message':
        return <MessageSquare className="w-4 h-4" />;
      case 'condition':
        return <HelpCircle className="w-4 h-4" />;
      case 'action':
        return <Zap className="w-4 h-4" />;
      default:
        return <MessageSquare className="w-4 h-4" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">Conversation Flow</h1>
          <p className="text-white/60 mt-1">Design your chatbot's conversation logic</p>
        </div>
        <div className="flex items-center gap-2">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2 px-4 py-2 bg-white/[0.03] text-white/60 rounded-xl
              hover:bg-white/[0.05] transition-colors duration-200"
          >
            <Play className="w-5 h-5" />
            <span>Test Flow</span>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2 px-4 py-2 bg-accent text-white rounded-xl
              hover:bg-accent-hover transition-colors duration-200"
          >
            <Save className="w-5 h-5" />
            <span>Save Flow</span>
          </motion.button>
        </div>
      </div>

      {/* Flow Designer */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Flow Canvas */}
        <div className="lg:col-span-3">
          <QuantumCard className="min-h-[600px]">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold">Flow Designer</h2>
              <div className="flex items-center gap-2">
                <button className="p-2 rounded-lg bg-white/[0.03] hover:bg-white/[0.05] transition-colors">
                  <Settings className="w-5 h-5 text-white/60" />
                </button>
                <button className="p-2 rounded-lg bg-white/[0.03] hover:bg-white/[0.05] transition-colors">
                  <Plus className="w-5 h-5 text-white/60" />
                </button>
              </div>
            </div>

            <div className="space-y-4">
              {nodes.map((node, index) => (
                <motion.div
                  key={node.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  <div className={`p-4 rounded-xl border ${getNodeColor(node.type)}`}>
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-3">
                        <div className="p-2 rounded-lg bg-white/[0.1]">
                          {getNodeIcon(node.type)}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-medium capitalize">{node.type}</span>
                            <span className="text-xs text-white/40">ID: {node.id}</span>
                          </div>
                          <p className="text-sm mt-1">{node.content}</p>
                          
                          {node.conditions && (
                            <div className="mt-3 space-y-2">
                              {node.conditions.map((condition, i) => (
                                <div key={i} className="flex items-center gap-2 text-sm">
                                  <ArrowRight className="w-4 h-4 text-white/40" />
                                  <code className="px-2 py-1 rounded-md bg-white/[0.05]">
                                    {condition.condition}
                                  </code>
                                  <span className="text-white/40">→</span>
                                  <span>{condition.next}</span>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <button className="p-1.5 rounded-lg hover:bg-white/[0.1] transition-colors">
                          <Settings className="w-4 h-4 text-white/60" />
                        </button>
                        <button className="p-1.5 rounded-lg hover:bg-white/[0.1] transition-colors">
                          <Trash2 className="w-4 h-4 text-white/60" />
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  {/* Connection Line */}
                  {node.next && node.next.length > 0 && (
                    <div className="absolute left-1/2 -translate-x-1/2 h-8 flex items-center justify-center">
                      <ArrowDown className="w-5 h-5 text-white/20" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </QuantumCard>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Node Types */}
          <QuantumCard>
            <h2 className="text-lg font-semibold mb-4">Add Node</h2>
            <div className="space-y-2">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full p-3 rounded-lg bg-accent/10 border border-accent/20
                  hover:bg-accent/20 transition-colors flex items-center gap-3"
              >
                <MessageSquare className="w-4 h-4 text-accent" />
                <span className="text-sm text-accent">Message Node</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full p-3 rounded-lg bg-warning/10 border border-warning/20
                  hover:bg-warning/20 transition-colors flex items-center gap-3"
              >
                <HelpCircle className="w-4 h-4 text-warning" />
                <span className="text-sm text-warning">Condition Node</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full p-3 rounded-lg bg-success/10 border border-success/20
                  hover:bg-success/20 transition-colors flex items-center gap-3"
              >
                <Zap className="w-4 h-4 text-success" />
                <span className="text-sm text-success">Action Node</span>
              </motion.button>
            </div>
          </QuantumCard>

          {/* Flow Validation */}
          <QuantumCard>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Validation</h2>
              <CheckCircle2 className="w-5 h-5 text-success" />
            </div>
            <div className="space-y-2">
              <div className="flex items-start gap-2 p-3 rounded-lg bg-success/10 border border-success/20">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5" />
                <div>
                  <h3 className="text-sm font-medium text-success">Flow is Valid</h3>
                  <p className="text-xs text-success/60 mt-1">All nodes are properly connected</p>
                </div>
              </div>
              <div className="flex items-start gap-2 p-3 rounded-lg bg-warning/10 border border-warning/20">
                <AlertCircle className="w-4 h-4 text-warning mt-0.5" />
                <div>
                  <h3 className="text-sm font-medium text-warning">Optimization Tip</h3>
                  <p className="text-xs text-warning/60 mt-1">Consider adding fallback paths</p>
                </div>
              </div>
            </div>
          </QuantumCard>

          {/* AI Suggestions */}
          <QuantumCard>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">AI Suggestions</h2>
              <Sparkles className="w-5 h-5 text-accent" />
            </div>
            <div className="space-y-2">
              <button className="w-full p-3 rounded-lg bg-accent/10 border border-accent/20
                hover:bg-accent/20 transition-colors text-left">
                <div className="flex items-start gap-2">
                  <Sparkles className="w-4 h-4 text-accent mt-0.5" />
                  <div>
                    <h3 className="text-sm font-medium text-accent">Add Error Handling</h3>
                    <p className="text-xs text-accent/60 mt-1">
                      Improve flow reliability with error states
                    </p>
                  </div>
                </div>
              </button>
            </div>
          </QuantumCard>
        </div>
      </div>
    </div>
  );
};

export default ConversationFlow;