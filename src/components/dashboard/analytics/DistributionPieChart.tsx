import React, { useRef, useEffect } from 'react';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

const DistributionPieChart: React.FC = () => {
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
    cutout: '65%',
    plugins: {
      legend: {
        display: false
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
            let label = context.label || '';
            if (label) {
              label += ': ';
            }
            if (context.parsed !== null) {
              label += context.parsed + '%';
            }
            return label;
          }
        }
      }
    },
    animation: {
      animateRotate: true,
      animateScale: true
    }
  };

  const data = {
    labels: ['Organic Search', 'Direct Traffic', 'Social Media', 'Email Campaigns', 'Other Sources'],
    datasets: [
      {
        data: [42, 27, 16, 10, 5],
        backgroundColor: [
          '#2E6FF3', // Electric Blue
          '#7B5CFA', // Purple
          '#2CCED9', // Cyan
          '#22C55E', // Green
          '#FFB547'  // Yellow
        ],
        borderColor: [
          'rgba(46, 111, 243, 0.2)',
          'rgba(123, 92, 250, 0.2)',
          'rgba(44, 206, 217, 0.2)',
          'rgba(34, 197, 94, 0.2)',
          'rgba(255, 181, 71, 0.2)'
        ],
        borderWidth: 2,
        hoverOffset: 5
      }
    ]
  };

  // Center text plugin
  const textCenter = {
    id: 'textCenter',
    beforeDraw(chart: any) {
      const { ctx, chartArea: { top, width, height } } = chart;
      const centerX = width / 2;
      const centerY = top + (height / 2);
      
      ctx.save();
      ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
      ctx.font = 'bold 18px "Inter"';
      ctx.textAlign = 'center';
      ctx.fillText('12,486', centerX, centerY - 10);
      
      ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
      ctx.font = '12px "Inter"';
      ctx.fillText('Total Users', centerX, centerY + 15);
      ctx.restore();
    }
  };

  return <Doughnut ref={chartRef} options={options} data={data} plugins={[textCenter]} />;
};

export default DistributionPieChart;