'use client';
import React from 'react';

interface RecurrenceOptionsProps {
  value: 'daily' | 'weekly' | 'monthly' | 'yearly';
  onChange: (value: 'daily' | 'weekly' | 'monthly' | 'yearly') => void;
}

const RecurrenceOptions: React.FC<RecurrenceOptionsProps> = ({ value, onChange }) => {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
        Recurrence Type
      </label>
      <div className="flex flex-wrap gap-4">
        {(['daily', 'weekly', 'monthly', 'yearly'] as const).map((type) => (
          <label key={type} className="flex items-center space-x-2 cursor-pointer">
            <input
              type="radio"
              name="recurrence"
              value={type}
              checked={value === type}
              onChange={() => onChange(type)}
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 dark:border-gray-600 dark:bg-gray-700"
            />
            <span className="text-gray-700 dark:text-gray-300 capitalize">
              {type}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default RecurrenceOptions;