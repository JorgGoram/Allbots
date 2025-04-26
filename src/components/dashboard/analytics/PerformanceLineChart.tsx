import React, { useRef, useEffect } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const PerformanceLineChart: React.FC = () => {
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
    interaction: {
      mode: 'index' as const,
      intersect: false,
    },
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
        },
        callbacks: {
          label: function(context: any) {
            let label = context.dataset.label || '';
            if (label) {
              label += ': ';
            }
            if (context.parsed.y !== null) {
              label += context.parsed.y + 'ms';
            }
            return label;
          }
        }
      },
    },
    scales: {
      y: {
        min: 0,
        max: 3000,
        grid: {
          color: 'rgba(255, 255, 255, 0.05)',
          drawBorder: false,
        },
        ticks: {
          color: 'rgba(255, 255, 255, 0.4)',
          callback: function(value: any) {
            return value + 'ms';
          }
        }
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: 'rgba(255, 255, 255, 0.4)',
          maxRotation: 0
        }
      }
    },
    elements: {
      line: {
        tension: 0.4
      },
      point: {
        radius: 0,
        hoverRadius: 6
      }
    }
  };

  const labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  
  const data = {
    labels,
    datasets: [
      {
        label: 'API Response Time',
        data: [1200, 1400, 900, 1600, 1000, 800, 1100],
        borderColor: '#2E6FF3',
        backgroundColor: 'rgba(46, 111, 243, 0.1)',
        fill: true,
        borderWidth: 2
      },
      {
        label: 'Database Query Time',
        data: [800, 1000, 650, 1200, 700, 500, 750],
        borderColor: '#2CCED9',
        backgroundColor: 'rgba(44, 206, 217, 0.1)',
        fill: true,
        borderWidth: 2
      },
      {
        label: 'Frontend Render Time',
        data: [300, 350, 250, 400, 320, 280, 310],
        borderColor: '#7B5CFA',
        backgroundColor: 'rgba(123, 92, 250, 0.1)',
        fill: true,
        borderWidth: 2
      }
    ],
  };

  return <Line ref={chartRef} options={options} data={data} />;
};

export default PerformanceLineChart;