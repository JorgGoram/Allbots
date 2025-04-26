import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Rocket,
  Server,
  Globe,
  CheckCircle2,
  AlertCircle,
  Clock,
  RefreshCcw,
  ArrowRight,
  ChevronRight,
  Terminal,
  Database,
  Cloud
} from 'lucide-react';
import { QuantumCard } from '@/components/ui/QuantumCard';

interface Deployment {
  id: string;
  botName: string;
  environment: 'development' | 'staging' | 'production';
  status: 'running' | 'failed' | 'completed' | 'pending';
  progress: number;
  startTime: string;
  endTime?: string;
  error?: string;
}

const DeploymentPipeline = () => {
  const [selectedEnvironment, setSelectedEnvironment] = useState<string>('all');

  const deployments: Deployment[] = [
    {
      id: '1',
      botName: 'Customer Support Bot',
      environment: 'production',
      status: 'running',
      progress: 75,
      startTime: '2024-03-15T10:00:00Z'
    },
    {
      id: '2',
      botName: 'Sales Assistant',
      environment: 'staging',
      status: 'completed',
      progress: 100,
      startTime: '2024-03-14T15:30:00Z',
      endTime: '2024-03-14T15:35:00Z'
    },
    {
      id: '3',
      botName: 'Technical Support',
      environment: 'development',
      status: 'failed',
      progress: 45,
      startTime: '2024-03-13T09:15:00Z',
      endTime: '2024-03-13T09:20:00Z',
      error: 'Configuration validation failed'
    }
  ];

  const environments = [
    { id: 'all', name: 'All Environments', icon: Globe },
    { id: 'development', name: 'Development', icon: Terminal },
    { id: 'staging', name: 'Staging', icon: Database },
    { id: 'production', name: 'Production', icon: Cloud }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'running':
        return 'text-accent';
      case 'completed':
        return 'text-success';
      case 'failed':
        return 'text-error';
      default:
        return 'text-warning';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'running':
        return <RefreshCcw className="w-4 h-4 animate-spin" />;
      case 'completed':
        return <CheckCircle2 className="w-4 h-4" />;
      case 'failed':
        return <AlertCircle className="w-4 h-4" />;
      default:
        return <Clock className="w-4 h-4" />;
    }
  };

  const filteredDeployments = deployments.filter(deployment => 
    selectedEnvironment === 'all' || deployment.environment === selectedEnvironment
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">Deployment Pipeline</h1>
          <p className="text-white/60 mt-1">Monitor and manage your chatbot deployments</p>
        </div>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex items-center gap-2 px-4 py-2 bg-accent text-white rounded-xl
            hover:bg-accent-hover transition-colors duration-200"
        >
          <Rocket className="w-5 h-5" />
          <span>New Deployment</span>
        </motion.button>
      </div>

      {/* Environment Filters */}
      <QuantumCard className="flex gap-2 overflow-x-auto">
        {environments.map((env) => (
          <button
            key={env.id}
            onClick={() => setSelectedEnvironment(env.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap
              ${selectedEnvironment === env.id 
                ? 'bg-accent text-white' 
                : 'bg-white/[0.03] text-white/60 hover:bg-white/[0.05]'
              } transition-colors duration-200`}
          >
            <env.icon className="w-4 h-4" />
            <span>{env.name}</span>
          </button>
        ))}
      </QuantumCard>

      {/* Deployment Pipeline */}
      <div className="space-y-4">
        {filteredDeployments.map((deployment) => (
          <motion.div
            key={deployment.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <QuantumCard>
              {/* Deployment Header */}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-medium">{deployment.botName}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-sm text-white/60 capitalize">
                      {deployment.environment}
                    </span>
                    <ChevronRight className="w-4 h-4 text-white/40" />
                    <span className={`text-sm flex items-center gap-1 ${getStatusColor(deployment.status)}`}>
                      {getStatusIcon(deployment.status)}
                      {deployment.status.charAt(0).toUpperCase() + deployment.status.slice(1)}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Server className="w-5 h-5 text-white/40" />
                  <span className="text-sm text-white/60">ID: {deployment.id}</span>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="relative h-2 bg-white/[0.03] rounded-full overflow-hidden mb-4">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${deployment.progress}%` }}
                  className={`absolute h-full rounded-full ${
                    deployment.status === 'failed' 
                      ? 'bg-error' 
                      : deployment.status === 'completed'
                      ? 'bg-success'
                      : 'bg-accent'
                  }`}
                />
              </div>

              {/* Deployment Info */}
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1 text-white/60">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">
                      Started: {new Date(deployment.startTime).toLocaleString()}
                    </span>
                  </div>
                  {deployment.endTime && (
                    <div className="flex items-center gap-1 text-white/60">
                      <CheckCircle2 className="w-4 h-4" />
                      <span className="text-sm">
                        Completed: {new Date(deployment.endTime).toLocaleString()}
                      </span>
                    </div>
                  )}
                </div>
                
                {deployment.status === 'failed' ? (
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center gap-2 px-4 py-2 bg-error/10 text-error rounded-lg
                      hover:bg-error/20 transition-colors duration-200"
                  >
                    <RefreshCcw className="w-4 h-4" />
                    <span>Retry Deployment</span>
                  </motion.button>
                ) : deployment.status === 'completed' ? (
                  <motion.button
                    whileHover={{ x: 4 }}
                    className="flex items-center gap-2 text-accent hover:text-accent-hover transition-colors"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                ) : (
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center gap-2 px-4 py-2 bg-white/[0.03] text-white/60 rounded-lg
                      hover:bg-white/[0.05] transition-colors duration-200"
                  >
                    <Terminal className="w-4 h-4" />
                    <span>View Logs</span>
                  </motion.button>
                )}
              </div>

              {/* Error Message */}
              {deployment.error && (
                <div className="mt-4 p-4 bg-error/10 border border-error/20 rounded-lg">
                  <div className="flex items-start gap-2 text-error">
                    <AlertCircle className="w-5 h-5 mt-0.5" />
                    <div>
                      <h4 className="font-medium">Deployment Failed</h4>
                      <p className="text-sm mt-1">{deployment.error}</p>
                    </div>
                  </div>
                </div>
              )}
            </QuantumCard>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default DeploymentPipeline;