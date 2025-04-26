import React from 'react';
import { motion } from 'framer-motion';

const GeoDistributionMap: React.FC = () => {
  // This is a placeholder component for a geographic distribution map
  // In a real implementation, you would use a mapping library like react-simple-maps
  // or integrate with a service like MapBox
  
  const regions = [
    { name: 'North America', users: 4826, percentage: 38.7 },
    { name: 'Europe', users: 3621, percentage: 29.0 },
    { name: 'Asia', users: 2498, percentage: 20.0 },
    { name: 'South America', users: 874, percentage: 7.0 },
    { name: 'Oceania', users: 417, percentage: 3.3 },
    { name: 'Africa', users: 250, percentage: 2.0 }
  ];
  
  return (
    <div className="h-full flex flex-col">
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center text-white/40">
          <p>Geographic map visualization would be displayed here.</p>
          <p className="text-sm mt-2">Integration with mapping libraries like react-simple-maps or MapBox required.</p>
        </div>
      </div>
      
      <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-4">
        {regions.map((region, index) => (
          <motion.div
            key={region.name}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.08]"
          >
            <h3 className="text-sm font-medium">{region.name}</h3>
            <div className="flex items-baseline justify-between mt-1">
              <span className="text-lg font-semibold">{region.users.toLocaleString()}</span>
              <span className="text-xs text-white/60">{region.percentage}%</span>
            </div>
            <div className="w-full h-1 bg-white/[0.05] rounded-full mt-2">
              <div 
                className="h-full bg-accent-blue rounded-full"
                style={{ width: `${region.percentage}%` }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default GeoDistributionMap;