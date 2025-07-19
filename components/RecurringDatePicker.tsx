'use client';

import React, { useState } from 'react';
import toast from 'react-hot-toast';
import RecurrenceOptions from './RecurrenceOptions';
import CustomizationPanel from './CustomizationPanel';
import WeekdaySelector from './WeekdaySelector';
import DateRangePicker from './DateRangePicker';
import CalendarPreview from './CalendarPreview';
import { generateRecurringDates } from '../utils/recurrenceUtils';
import { motion } from 'framer-motion';

const RecurringDatePicker = () => {
  const [recurrenceType, setRecurrenceType] = useState<'daily' | 'weekly' | 'monthly' | 'yearly'>('daily');
  const [interval, setInterval] = useState<number>(1);
  const [selectedWeekdays, setSelectedWeekdays] = useState<string[]>([]);
  const [startDate, setStartDate] = useState<string>('');
  const [endDate, setEndDate] = useState<string>('');
  const [dates, setDates] = useState<string[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = () => {
    if (!startDate) {
      toast.error('Please select a start date.');
      return;
    }

    setIsGenerating(true);
    
    setTimeout(() => {
      const generated = generateRecurringDates({
        type: recurrenceType,
        interval,
        startDate,
        endDate,
      });

      setDates(generated);
      toast.success('Recurring dates generated!');
      setIsGenerating(false);
    }, 800);
  };

  const handleExportCSV = () => {
    if (dates.length === 0) {
      toast.error('No dates to export.');
      return;
    }

    const csvContent = ['Date', ...dates].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'recurring_dates.csv';
    a.click();

    URL.revokeObjectURL(url);
    toast.success('CSV exported successfully!');
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl mx-auto my-10 p-8 bg-gradient-to-br from-white to-indigo-50 dark:from-gray-800 dark:to-gray-900 shadow-2xl rounded-3xl border border-indigo-100 dark:border-gray-700 space-y-8"
    >
      <div className="text-center">
        <motion.h2 
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 100 }}
          className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 mb-2"
        >
          Recurring Date Generator
        </motion.h2>
        <p className="text-gray-600 dark:text-gray-300 text-lg">
          Create custom recurring schedules with ease
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="p-6 bg-white dark:bg-gray-700 rounded-xl shadow-md border border-gray-100 dark:border-gray-600"
          >
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 flex items-center">
              <span className="bg-indigo-100 dark:bg-indigo-900 p-2 rounded-full mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </span>
              Schedule Settings
            </h3>
            <RecurrenceOptions value={recurrenceType} onChange={setRecurrenceType} />
            <CustomizationPanel value={interval} onChange={setInterval} />
            {recurrenceType === 'weekly' && (
              <WeekdaySelector selected={selectedWeekdays} onChange={setSelectedWeekdays} />
            )}
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="p-6 bg-white dark:bg-gray-700 rounded-xl shadow-md border border-gray-100 dark:border-gray-600"
          >
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 flex items-center">
              <span className="bg-indigo-100 dark:bg-indigo-900 p-2 rounded-full mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              Date Range
            </h3>
            <DateRangePicker
              startDate={startDate}
              endDate={endDate}
              onStartDateChange={setStartDate}
              onEndDateChange={setEndDate}
            />
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="p-6 bg-white dark:bg-gray-700 rounded-xl shadow-md border border-gray-100 dark:border-gray-600"
        >
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 flex items-center">
            <span className="bg-indigo-100 dark:bg-indigo-900 p-2 rounded-full mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </span>
            Calendar Preview
          </h3>
          <CalendarPreview dates={dates} />
        </motion.div>
      </div>

      <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleGenerate}
          disabled={isGenerating}
          className={`px-8 py-3 rounded-xl text-white font-semibold shadow-lg transition-all duration-300 flex items-center justify-center ${
            isGenerating 
              ? 'bg-indigo-400 cursor-not-allowed' 
              : 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700'
          }`}
        >
          {isGenerating ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Generating...
            </>
          ) : (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
              </svg>
              Generate Dates
            </>
          )}
        </motion.button>

        {dates.length > 0 && (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleExportCSV}
            className="px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-xl hover:from-green-600 hover:to-emerald-700 transition-all duration-300 shadow-lg flex items-center justify-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            Export CSV
          </motion.button>
        )}
      </div>
    </motion.div>
  );
};

export default RecurringDatePicker;