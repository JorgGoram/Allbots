import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import WhitelabelSystem from '@/components/customization/WhitelabelSystem';
import BrandManagement from '@/components/customization/BrandManagement';
import ClientExperience from '@/components/customization/ClientExperience';

const CustomizationSuite = () => {
  return (
    <Routes>
      <Route index element={<WhitelabelSystem />} />
      <Route path="branding" element={<BrandManagement />} />
      <Route path="experience" element={<ClientExperience />} />
      <Route path="*" element={<Navigate to="/customization" replace />} />
    </Routes>
  );
};

export default CustomizationSuite;