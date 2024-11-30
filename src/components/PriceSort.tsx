import React from 'react';
import { ArrowUpDown } from 'lucide-react';

export type SortOrder = 'low-to-high' | 'high-to-low' | null;

interface PriceSortProps {
  value: SortOrder;
  onChange: (value: SortOrder) => void;
}

export default function PriceSort({ value, onChange }: PriceSortProps) {
  return (
    <div className="relative group">
      <button
        className={`flex items-center px-4 py-2 rounded-full transition-all bg-white border
          ${value ? 'border-purple-500 text-purple-600' : 'border-gray-300 text-gray-600'}`}
        aria-label="Sort by average price"
      >
        <ArrowUpDown className="h-4 w-4 mr-2" />
        <span className="font-medium">
          {value === 'low-to-high' ? 'Price: Low to High' : 
           value === 'high-to-low' ? 'Price: High to Low' : 
           'Sort by Price'}
        </span>
      </button>

      <div className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-lg p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-10">
        <div className="space-y-2">
          <button
            onClick={() => onChange(null)}
            className={`flex items-center w-full px-3 py-2 rounded-md transition-colors
              ${value === null ? 'bg-purple-50 text-purple-600' : 'hover:bg-gray-50'}`}
          >
            <span className="text-sm">Default Sort</span>
          </button>
          <button
            onClick={() => onChange('low-to-high')}
            className={`flex items-center w-full px-3 py-2 rounded-md transition-colors
              ${value === 'low-to-high' ? 'bg-purple-50 text-purple-600' : 'hover:bg-gray-50'}`}
          >
            <span className="text-sm">Price: Low to High</span>
          </button>
          <button
            onClick={() => onChange('high-to-low')}
            className={`flex items-center w-full px-3 py-2 rounded-md transition-colors
              ${value === 'high-to-low' ? 'bg-purple-50 text-purple-600' : 'hover:bg-gray-50'}`}
          >
            <span className="text-sm">Price: High to Low</span>
          </button>
        </div>
      </div>
    </div>
  );
}