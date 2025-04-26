import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import TaskManagement from '@/components/workflows/TaskManagement';
import ProcessOptimization from '@/components/workflows/ProcessOptimization';
import AutomationCenter from '@/components/workflows/AutomationCenter';

const IntelligentWorkflows = () => {
  return (
    <Routes>
      <Route index element={<TaskManagement />} />
      <Route path="processes" element={<ProcessOptimization />} />
      <Route path="automation" element={<AutomationCenter />} />
      <Route path="*" element={<Navigate to="/workflows" replace />} />
    </Routes>
  );
};

export default IntelligentWorkflows;