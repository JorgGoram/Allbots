import React from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { format, addMonths, subMonths, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isToday, getDay } from 'date-fns';
import { QuantumCard } from './QuantumCard';

interface CalendarProps {
  className?: string;
}

const Calendar: React.FC<CalendarProps> = ({ className }) => {
  const [currentDate, setCurrentDate] = React.useState(new Date());
  
  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(currentDate);
  const monthDays = eachDayOfInterval({ start: monthStart, end: monthEnd });
  
  // Get day of week for the first day (0 = Sunday, 1 = Monday, etc.)
  const startDay = getDay(monthStart);
  
  // Create array for empty cells before the first day
  const blanks = Array.from({ length: startDay }, (_, i) => i);
  
  const nextMonth = () => setCurrentDate(addMonths(currentDate, 1));
  const prevMonth = () => setCurrentDate(subMonths(currentDate, 1));
  
  return (
    <QuantumCard className={className}>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">{format(currentDate, 'MMMM yyyy')}</h2>
        <div className="flex items-center gap-2">
          <button 
            onClick={prevMonth}
            className="p-1 rounded-md hover:bg-white/10 text-white/60 hover:text-white transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button 
            onClick={nextMonth}
            className="p-1 rounded-md hover:bg-white/10 text-white/60 hover:text-white transition-colors"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-7 gap-1 text-center mb-2">
        {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, i) => (
          <div key={i} className="text-xs text-white/40 font-medium">
            {day}
          </div>
        ))}
      </div>
      
      <div className="grid grid-cols-7 gap-1 text-center">
        {/* Empty cells for days before the first of month */}
        {blanks.map((blank) => (
          <div key={`blank-${blank}`} className="h-7 text-xs"></div>
        ))}
        
        {/* Actual days of the month */}
        {monthDays.map((day) => {
          const isCurrentDay = isToday(day);
          
          return (
            <motion.div
              key={day.toString()}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={`h-7 flex items-center justify-center text-xs rounded-full cursor-pointer
                ${isCurrentDay ? 'bg-accent text-white' : 'hover:bg-white/[0.05]'}`}
            >
              {format(day, 'd')}
            </motion.div>
          );
        })}
      </div>
    </QuantumCard>
  );
};

export default Calendar;