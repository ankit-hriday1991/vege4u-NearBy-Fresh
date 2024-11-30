import React from 'react';
import { Truck } from 'lucide-react';

interface DeliveryFilterProps {
  value: number | null;
  onChange: (value: number | null) => void;
}

export default function DeliveryFilter({ value, onChange }: DeliveryFilterProps) {
  return (
    <div className="relative group">
      <button
        className={`flex items-center px-4 py-2 rounded-full transition-all bg-white border
          ${value !== null ? 'border-blue-500 text-blue-600' : 'border-gray-300 text-gray-600'}`}
        aria-label="Filter by delivery fee"
      >
        <Truck className="h-4 w-4 mr-2" />
        <span className="font-medium">
          {value !== null ? `Delivery ≤ ₹${value}` : 'Delivery'}
        </span>
      </button>

      <div className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-lg p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-10">
        <div className="space-y-2">
          <button
            onClick={() => onChange(null)}
            className={`flex items-center w-full px-3 py-2 rounded-md transition-colors
              ${value === null ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-50'}`}
          >
            <span className="text-sm">Show All</span>
          </button>
          {[10, 15, 20, 25, 30].map((fee) => (
            <button
              key={fee}
              onClick={() => onChange(fee)}
              className={`flex items-center w-full px-3 py-2 rounded-md transition-colors
                ${value === fee ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-50'}`}
            >
              <span className="text-sm">≤ ₹{fee}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}