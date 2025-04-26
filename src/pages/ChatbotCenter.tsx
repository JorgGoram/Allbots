import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import BotBuilder from '@/components/chatbot/BotBuilder';
import BotManagement from '@/components/chatbot/BotManagement';
import ConversationFlow from '@/components/chatbot/ConversationFlow';
import TemplateSystem from '@/components/chatbot/TemplateSystem';
import DeploymentPipeline from '@/components/chatbot/DeploymentPipeline';

const ChatbotCenter = () => {
  return (
    <Routes>
      <Route index element={<BotBuilder />} />
      <Route path="manage" element={<BotManagement />} />
      <Route path="flow" element={<ConversationFlow />} />
      <Route path="templates" element={<TemplateSystem />} />
      <Route path="deployment" element={<DeploymentPipeline />} />
      <Route path="*" element={<Navigate to="/chatbots" replace />} />
    </Routes>
  );
};

export default ChatbotCenter;