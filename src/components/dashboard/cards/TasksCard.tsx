import React from 'react';
import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';
import { QuantumCard } from '@/components/ui/QuantumCard';

interface Task {
  id: number;
  title: string;
  type: string;
  time: string;
}

interface TasksCardProps {
  tasks?: Task[];
  completed?: number;
  total?: number;
}

const TasksCard: React.FC<TasksCardProps> = ({ 
  tasks = [
    { id: 1, title: 'Meeting with Andrew Piper', type: 'Meeting', time: '9:00' },
    { id: 2, title: 'Call with HT Company', type: 'Call', time: '12:00' },
    { id: 3, title: 'Meeting with Zoe Alison', type: 'Meeting', time: '14:00' },
    { id: 4, title: 'Interview with HR', type: 'Interview', time: '15:00' }
  ],
  completed = 0,
  total = 11
}) => {
  return (
    <QuantumCard>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">Today's Tasks</h2>
        <div className="text-xs text-white/40">
          <span className="text-accent">{completed}</span> of {total} completed
        </div>
      </div>
      
      <div className="space-y-3">
        {tasks.map((task) => (
          <motion.div
            key={task.id}
            whileHover={{ x: 2 }}
            className="p-3 rounded-lg bg-white/[0.02] hover:bg-white/[0.04] border border-white/[0.05] transition-colors cursor-pointer"
          >
            <div className="text-sm font-medium">{task.type}</div>
            <div className="text-sm mt-1">{task.title}</div>
            <div className="flex items-center mt-1 text-xs text-white/40">
              <Clock className="w-3 h-3 mr-1" />
              {task.time}
            </div>
          </motion.div>
        ))}
      </div>
      
      <button className="w-full mt-4 text-sm text-accent hover:text-accent-blue-hover transition-colors">
        See All
      </button>
    </QuantumCard>
  );
};

export default TasksCard;