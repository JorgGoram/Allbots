import React from 'react';
import { motion } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { time: '00:00', calls: 85, quality: 96 },
  { time: '04:00', calls: 75, quality: 98 },
  { time: '08:00', calls: 120, quality: 95 },
  { time: '12:00', calls: 180, quality: 97 },
  { time: '16:00', calls: 150, quality: 99 },
  { time: '20:00', calls: 95, quality: 96 },
];

const PerformanceChart = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="h-[300px] w-full"
    >
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
          <XAxis 
            dataKey="time" 
            stroke="rgba(255,255,255,0.5)"
            tick={{ fill: 'rgba(255,255,255,0.5)' }}
          />
          <YAxis 
            stroke="rgba(255,255,255,0.5)"
            tick={{ fill: 'rgba(255,255,255,0.5)' }}
          />
          <Tooltip 
            contentStyle={{ 
              background: 'rgba(15,17,35,0.9)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '8px'
            }}
            itemStyle={{ color: 'rgba(255,255,255,0.8)' }}
            labelStyle={{ color: 'rgba(255,255,255,0.6)' }}
          />
          <Line 
            type="monotone" 
            dataKey="calls" 
            stroke="#7B5CFA" 
            strokeWidth={2}
            dot={{ fill: '#7B5CFA', strokeWidth: 2 }}
            activeDot={{ r: 6, fill: '#7B5CFA' }}
          />
          <Line 
            type="monotone" 
            dataKey="quality" 
            stroke="#2CCED9" 
            strokeWidth={2}
            dot={{ fill: '#2CCED9', strokeWidth: 2 }}
            activeDot={{ r: 6, fill: '#2CCED9' }}
          />
        </LineChart>
      </ResponsiveContainer>
    </motion.div>
  );
};

export default PerformanceChart;