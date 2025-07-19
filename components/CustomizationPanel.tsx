'use client';
import React from 'react';

const CustomizationPanel = () => {
  return (
    <div>
      <label className="block font-semibold mb-1">Every X Interval</label>
      <input type="number" min="1" defaultValue="1" className="border p-1 rounded" />
    </div>
  );
};

export default CustomizationPanel;
