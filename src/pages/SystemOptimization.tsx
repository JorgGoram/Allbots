import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import PerformanceTuning from '@/components/system/PerformanceTuning';
import SecurityCenter from '@/components/system/SecurityCenter';
import LoadBalancing from '@/components/system/LoadBalancing';

const SystemOptimization = () => {
  return (
    <Routes>
      <Route index element={<PerformanceTuning />} />
      <Route path="security" element={<SecurityCenter />} />
      <Route path="load-balancing" element={<LoadBalancing />} />
      <Route path="*" element={<Navigate to="/system" replace />} />
    </Routes>
  );
};

export default SystemOptimization;