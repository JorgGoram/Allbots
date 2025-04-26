import React from 'react';
import { Line } from 'react-chartjs-2';
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

interface RevenueCardProps {
  data: {
    accuracy: number;
    loss: number;
    epochs: number;
  };
}

const RevenueCard: React.FC<RevenueCardProps> = () => {
  const data = {
    labels: ['Dec 19', 'Dec 31', 'Jan 14', 'Jan 28', 'Feb 8', 'Feb 22', 'Mar 7', 'Mar 17'],
    datasets: [
      {
        label: 'Light Blue',
        data: [1, 2.5, 1.5, 3, 2, 4, 2.5, 3.5],
        borderColor: '#2E6FF3',
        backgroundColor: 'rgba(46, 111, 243, 0.1)',
        fill: true,
        tension: 0.4,
        pointRadius: 0,
        borderWidth: 2,
      },
      {
        label: 'RNS App',
        data: [2, 1.5, 3, 2, 3.5, 2.5, 4, 3],
        borderColor: '#FFB547',
        backgroundColor: 'rgba(255, 181, 71, 0.1)',
        fill: true,
        tension: 0.4,
        pointRadius: 0,
        borderWidth: 2,
      },
      {
        label: 'Sing App',
        data: [3, 2, 2.5, 3.5, 2, 3, 2.5, 4],
        borderColor: '#22C55E',
        backgroundColor: 'rgba(34, 197, 94, 0.1)',
        fill: true,
        tension: 0.4,
        pointRadius: 0,
        borderWidth: 2,
      }
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        mode: 'index' as const,
        intersect: false,
        backgroundColor: '#161923',
        titleColor: '#fff',
        bodyColor: '#fff',
        borderColor: 'rgba(255, 255, 255, 0.1)',
        borderWidth: 1,
        padding: 12,
        displayColors: true,
        callbacks: {
          label: function(context: any) {
            return `${context.dataset.label}: ${context.parsed.y}`;
          }
        }
      },
    },
    interaction: {
      mode: 'nearest' as const,
      axis: 'x' as const,
      intersect: false
    },
    scales: {
      x: {
        grid: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          color: 'rgba(255, 255, 255, 0.4)',
          font: {
            size: 11,
            family: 'Inter'
          }
        }
      },
      y: {
        grid: {
          color: 'rgba(255, 255, 255, 0.04)',
          drawBorder: false,
        },
        ticks: {
          color: 'rgba(255, 255, 255, 0.4)',
          font: {
            size: 11,
            family: 'Inter'
          },
          stepSize: 1
        },
        min: 0,
        max: 5
      }
    },
    layout: {
      padding: {
        top: 10,
        right: 10,
        bottom: 10,
        left: 10
      }
    }
  };

  return (
    <div className="w-full h-[400px]">
      <Line data={data} options={options} />
    </div>
  );
};

export default RevenueCard;