'use client';
import React from 'react';

const RecurrenceOptions = () => {
  return (
    <div>
      <label className="block font-semibold mb-1">Recurrence Type</label>
      <div className="flex gap-4">
        <label><input type="radio" name="recurrence" value="daily" defaultChecked /> Daily</label>
        <label><input type="radio" name="recurrence" value="weekly" /> Weekly</label>
        <label><input type="radio" name="recurrence" value="monthly" /> Monthly</label>
        <label><input type="radio" name="recurrence" value="yearly" /> Yearly</label>
      </div>
    </div>
  );
};

export default RecurrenceOptions;
