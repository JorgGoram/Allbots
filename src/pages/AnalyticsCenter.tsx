import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import PerformanceAnalytics from '@/components/analytics/PerformanceAnalytics';
import VisualInsights from '@/components/analytics/VisualInsights';
import PredictiveAnalytics from '@/components/analytics/PredictiveAnalytics';

const AnalyticsCenter = () => {
  return (
    <Routes>
      <Route index element={<PerformanceAnalytics />} />
      <Route path="insights" element={<VisualInsights />} />
      <Route path="predictive" element={<PredictiveAnalytics />} />
      <Route path="*" element={<Navigate to="/analytics" replace />} />
    </Routes>
  );
};

export default AnalyticsCenter;