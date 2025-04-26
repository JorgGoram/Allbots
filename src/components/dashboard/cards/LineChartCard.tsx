import React from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { QuantumCard } from '@/components/ui/QuantumCard';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import PerformanceLineChart from '../analytics/PerformanceLineChart';

interface LineChartCardProps {
  title?: string;
  onClose?: () => void;
}

const LineChartCard: React.FC<LineChartCardProps> = ({ 
  title = "Daily Line Chart",
  onClose 
}) => {
  return (
    <QuantumCard className="relative">
      <div className="absolute top-2 right-2 flex items-center gap-2">
        <button className="p-1 rounded-md hover:bg-white/10 text-white/40 hover:text-white/80 transition-colors">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 3H21V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M9 21H3V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M21 3L14 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3 21L10 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        {onClose && (
          <button 
            onClick={onClose}
            className="p-1 rounded-md hover:bg-white/10 text-white/40 hover:text-white/80 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>
      
      <h2 className="text-lg font-semibold mb-4">{title}</h2>
      
      <Tabs defaultValue="light-blue">
        <TabsList className="mb-4">
          <TabsTrigger value="light-blue">Light Blue</TabsTrigger>
          <TabsTrigger value="rns-app">RNS App</TabsTrigger>
          <TabsTrigger value="sing-app">Sing App</TabsTrigger>
        </TabsList>
        
        <TabsContent value="light-blue" className="h-[300px]">
          <PerformanceLineChart />
        </TabsContent>
        <TabsContent value="rns-app" className="h-[300px]">
          <PerformanceLineChart />
        </TabsContent>
        <TabsContent value="sing-app" className="h-[300px]">
          <PerformanceLineChart />
        </TabsContent>
      </Tabs>
    </QuantumCard>
  );
};

export default LineChartCard;