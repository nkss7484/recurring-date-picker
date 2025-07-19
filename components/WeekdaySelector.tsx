'use client';
import React from 'react';

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

const WeekdaySelector = () => {
  return (
    <div>
      <label className="block font-semibold mb-1">Select Days</label>
      <div className="flex gap-2">
        {days.map((day) => (
          <label key={day}>
            <input type="checkbox" value={day.toLowerCase()} /> {day}
          </label>
        ))}
      </div>
    </div>
  );
};

export default WeekdaySelector;
