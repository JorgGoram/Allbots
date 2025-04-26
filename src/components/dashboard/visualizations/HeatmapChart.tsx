import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Scatter } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const HeatmapChart: React.FC = () => {
  // Generate heatmap data
  const generateData = () => {
    const data = [];
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    
    // For each day (y-axis)
    for (let i = 0; i < 7; i++) {
      // For each hour (x-axis)
      for (let j = 0; j < 24; j++) {
        // Generate a value - more realistic pattern with peaks during business hours
        let value;
        
        // Weekend pattern (lower overall, different peak times)
        if (i >= 5) { // Saturday and Sunday
          if (j >= 10 && j <= 16) { // Peak hours 10am-4pm
            value = Math.random() * 50 + 30;
          } else if ((j >= 8 && j < 10) || (j > 16 && j <= 20)) { // Moderate hours
            value = Math.random() * 30 + 15;
          } else { // Low hours
            value = Math.random() * 15;
          }
        } 
        // Weekday pattern
        else {
          if (j >= 9 && j <= 17) { // Business hours 9am-5pm
            value = Math.random() * 70 + 30;
          } else if ((j >= 7 && j < 9) || (j > 17 && j <= 21)) { // Commute and evening hours
            value = Math.random() * 40 + 20;
          } else { // Night hours
            value = Math.random() * 10;
          }
        }
        
        data.push({
          x: j, // Hour
          y: i, // Day
          v: Math.round(value), // Activity value
          day: days[i],
          hour: `${j}:00`
        });
      }
    }
    
    return data;
  };

  const heatmapData = generateData();

  // Custom color function based on value
  const getPointBackgroundColor = (value: number) => {
    if (value >= 70) return 'rgba(239, 68, 68, 0.9)'; // High - red
    if (value >= 50) return 'rgba(239, 68, 68, 0.7)';
    if (value >= 30) return 'rgba(239, 68, 68, 0.5)';
    if (value >= 10) return 'rgba(239, 68, 68, 0.3)';
    return 'rgba(239, 68, 68, 0.1)'; // Low
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        min: -0.5,
        max: 6.5,
        ticks: {
          callback: function(value: any) {
            const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
            return days[value];
          },
          color: 'rgba(255, 255, 255, 0.4)',
          stepSize: 1
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.05)',
          drawBorder: false,
        }
      },
      x: {
        min: -0.5,
        max: 23.5,
        ticks: {
          callback: function(value: any) {
            return value % 3 === 0 ? `${value}:00` : '';
          },
          color: 'rgba(255, 255, 255, 0.4)',
          stepSize: 1
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.05)',
          drawBorder: false,
        }
      }
    },
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        backgroundColor: 'rgba(13, 15, 30, 0.9)',
        borderColor: 'rgba(239, 68, 68, 0.3)',
        borderWidth: 1,
        padding: 12,
        displayColors: false,
        callbacks: {
          title: function(context: any) {
            const dataPoint = heatmapData[context[0].dataIndex];
            return `${dataPoint.day}, ${dataPoint.hour}`;
          },
          label: function(context: any) {
            const dataPoint = heatmapData[context.dataIndex];
            return `Activity Level: ${dataPoint.v}`;
          }
        }
      }
    }
  };

  const data = {
    datasets: [
      {
        label: 'Activity Heatmap',
        data: heatmapData,
        backgroundColor: (context: any) => {
          const value = context.raw.v;
          return getPointBackgroundColor(value);
        },
        pointRadius: 10,
        pointHoverRadius: 12,
        borderWidth: 0
      }
    ]
  };

  return <Scatter options={options} data={data} />;
};

export default HeatmapChart;