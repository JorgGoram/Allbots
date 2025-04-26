import React, { useRef, useEffect } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ComparisonBarChart: React.FC = () => {
  const chartRef = useRef<ChartJS>(null);

  // Cleanup on unmount to prevent canvas reuse issues
  useEffect(() => {
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, []);

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    indexAxis: 'x' as const,
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          color: 'rgba(255, 255, 255, 0.6)',
          usePointStyle: true,
          pointStyle: 'circle',
          padding: 20
        }
      },
      tooltip: {
        backgroundColor: 'rgba(13, 15, 30, 0.9)',
        borderColor: 'rgba(46, 111, 243, 0.3)',
        borderWidth: 1,
        padding: 12,
        displayColors: true,
        titleFont: {
          size: 14,
        },
        bodyFont: {
          size: 13,
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        grid: {
          color: 'rgba(255, 255, 255, 0.05)',
        },
        ticks: {
          color: 'rgba(255, 255, 255, 0.4)',
          callback: function(value: any) {
            return value + '%';
          }
        }
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: 'rgba(255, 255, 255, 0.4)'
        }
      }
    }
  };

  const labels = ['Engagement', 'Conversion', 'Retention', 'Satisfaction'];
  
  const data = {
    labels,
    datasets: [
      {
        label: 'Mobile',
        data: [65, 42, 73, 82],
        backgroundColor: 'rgba(46, 111, 243, 0.6)',
        borderColor: 'rgba(46, 111, 243, 0.8)',
        borderWidth: 1,
        borderRadius: 4,
      },
      {
        label: 'Desktop',
        data: [54, 63, 61, 88],
        backgroundColor: 'rgba(123, 92, 250, 0.6)',
        borderColor: 'rgba(123, 92, 250, 0.8)',
        borderWidth: 1,
        borderRadius: 4,
      },
      {
        label: 'Tablet',
        data: [42, 52, 48, 70],
        backgroundColor: 'rgba(44, 206, 217, 0.6)',
        borderColor: 'rgba(44, 206, 217, 0.8)',
        borderWidth: 1,
        borderRadius: 4,
      }
    ],
  };

  return <Bar ref={chartRef} options={options} data={data} />;
};

export default ComparisonBarChart;