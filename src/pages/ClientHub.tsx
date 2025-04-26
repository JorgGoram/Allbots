import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import ClientPortal from '@/components/client/ClientPortal';
import ResourceManagement from '@/components/client/ResourceManagement';
import ClientDashboard from '@/components/client/ClientDashboard';

const ClientHub = () => {
  return (
    <Routes>
      <Route index element={<ClientPortal />} />
      <Route path="resources" element={<ResourceManagement />} />
      <Route path="dashboard" element={<ClientDashboard />} />
      <Route path="*" element={<Navigate to="/clients" replace />} />
    </Routes>
  );
};

export default ClientHub;