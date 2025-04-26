import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart2, 
  PieChart, 
  LineChart, 
  Map, 
  Activity,
  Filter,
  Calendar,
  Download,
  RefreshCw
} from 'lucide-react';
import { QuantumCard } from '@/components/ui/QuantumCard';
import PerformanceLineChart from '@/components/dashboard/analytics/PerformanceLineChart';
import DistributionPieChart from '@/components/dashboard/analytics/DistributionPieChart';
import ComparisonBarChart from '@/components/dashboard/analytics/ComparisonBarChart';
import HeatmapChart from '@/components/dashboard/visualizations/HeatmapChart';
import MetricsDashboard from '@/components/dashboard/visualizations/MetricsDashboard';
import GeoDistributionMap from '@/components/dashboard/visualizations/GeoDistributionMap';

const DataVisualizationDashboard = () => {
  const [timeRange, setTimeRange] = useState('7d');
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => setIsRefreshing(false), 1000);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="text-xs text-white/40 uppercase">YOU ARE HERE {'>'} Analytics</div>
          <h1 className="text-2xl font-bold">Data Visualization</h1>
          <p className="text-white/60 mt-1">Interactive analytics and insights</p>
        </div>
        <div className="flex items-center gap-3">
          <select 
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="px-4 py-2 rounded-xl bg-black/[0.3] text-white/60
              hover:bg-white/[0.05] border border-white/[0.08] transition-colors"
          >
            <option value="24h">Last 24 Hours</option>
            <option value="7d">Last 7 Days</option>
            <option value="30d">Last 30 Days</option>
            <option value="90d">Last 90 Days</option>
          </select>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleRefresh}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-black/[0.3] text-white/60
              hover:bg-white/[0.05] border border-white/[0.08] transition-colors"
          >
            <RefreshCw className={`w-5 h-5 ${isRefreshing ? 'animate-spin' : ''}`} />
            <span>Refresh</span>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white text-black
              hover:bg-white/90 transition-colors"
          >
            <Download className="w-5 h-5" />
            <span>Export</span>
          </motion.button>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Metrics Dashboard */}
        <QuantumCard>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold">System Metrics</h2>
            <Activity className="w-5 h-5 text-white/40" />
          </div>
          <MetricsDashboard />
        </QuantumCard>

        {/* Performance Line Chart */}
        <QuantumCard className="lg:col-span-2">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-lg font-semibold">Performance Trends</h2>
              <p className="text-sm text-white/60 mt-1">System metrics over time</p>
            </div>
            <LineChart className="w-5 h-5 text-white/40" />
          </div>
          <div className="h-[350px]">
            <PerformanceLineChart />
          </div>
        </QuantumCard>
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Distribution Pie Chart */}
        <QuantumCard>
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-lg font-semibold">User Distribution</h2>
              <p className="text-sm text-white/60 mt-1">By traffic source</p>
            </div>
            <PieChart className="w-5 h-5 text-white/40" />
          </div>
          <div className="h-[350px]">
            <DistributionPieChart />
          </div>
        </QuantumCard>

        {/* Comparison Bar Chart */}
        <QuantumCard>
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-lg font-semibold">Platform Comparison</h2>
              <p className="text-sm text-white/60 mt-1">Performance by device type</p>
            </div>
            <BarChart2 className="w-5 h-5 text-white/40" />
          </div>
          <div className="h-[350px]">
            <ComparisonBarChart />
          </div>
        </QuantumCard>
      </div>

      {/* Advanced Visualizations */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Heatmap Chart */}
        <QuantumCard>
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-lg font-semibold">Activity Heatmap</h2>
              <p className="text-sm text-white/60 mt-1">Usage patterns by day and hour</p>
            </div>
            <Calendar className="w-5 h-5 text-white/40" />
          </div>
          <div className="h-[350px]">
            <HeatmapChart />
          </div>
        </QuantumCard>

        {/* Geographic Distribution */}
        <QuantumCard>
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-lg font-semibold">Geographic Distribution</h2>
              <p className="text-sm text-white/60 mt-1">User locations worldwide</p>
            </div>
            <Map className="w-5 h-5 text-white/40" />
          </div>
          <div className="h-[350px]">
            <GeoDistributionMap />
          </div>
        </QuantumCard>
      </div>
    </div>
  );
};

export default DataVisualizationDashboard;