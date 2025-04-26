import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/layout/sidebar';
import Header from './components/layout/header';
import { Menu } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Import pages
import Dashboard from './pages/Dashboard';
import SystemOptimization from './pages/SystemOptimization';
import ChatbotCenter from './pages/ChatbotCenter';
import DataVisualizationDashboard from './pages/DataVisualizationDashboard';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-black text-white relative overflow-hidden">
        {/* Ambient Glow Effects */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-[40%] -right-[25%] w-[80%] h-[80%] bg-white/5 rounded-full blur-[128px] opacity-20" />
          <div className="absolute -bottom-[40%] -left-[25%] w-[80%] h-[80%] bg-white/5 rounded-full blur-[128px] opacity-20" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-white/5 rounded-full blur-[150px] opacity-10" />
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-white/10 text-white backdrop-blur-sm"
        >
          <Menu className="w-6 h-6" />
        </button>

        {/* Sidebar with mobile support */}
        <AnimatePresence>
          {(isMobileMenuOpen || window.innerWidth >= 1024) && (
            <Sidebar onClose={() => setIsMobileMenuOpen(false)} />
          )}
        </AnimatePresence>

        <Header />

        <main className="pt-20 md:pt-24 lg:ml-64 p-4 md:p-6 lg:p-8 xl:p-10 relative">
          <div className="max-w-[1800px] mx-auto">
            <Routes>
              {/* Home Command Center */}
              <Route path="/" element={<Dashboard />} />

              {/* Data Visualization */}
              <Route path="/analytics" element={<DataVisualizationDashboard />} />

              {/* System Optimization */}
              <Route path="/system/*" element={<SystemOptimization />} />

              {/* Chatbot Center */}
              <Route path="/chatbots/*" element={<ChatbotCenter />} />

              {/* Redirect unknown routes to dashboard */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </div>
        </main>
      </div>
    </Router>
  );
}

export default App;