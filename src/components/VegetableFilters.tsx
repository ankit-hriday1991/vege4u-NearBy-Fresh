import React from 'react';

interface VegetableFiltersProps {
  vegetables: string[];
  onSelect: (vegetable: string) => void;
  selectedVegetable: string | null;
}

const vegetableImages: Record<string, string> = {
  'Potato': 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&q=80&w=100&h=100',
  'Tomato': 'https://images.unsplash.com/photo-1561136594-7f68413baa99?auto=format&fit=crop&q=80&w=100&h=100',
  'Onion': 'https://images.unsplash.com/photo-1620574387735-3624d75b2dbc?auto=format&fit=crop&q=80&w=100&h=100',
  'Cabbage': 'https://images.unsplash.com/photo-1594282486552-05b4d80fbb9f?auto=format&fit=crop&q=80&w=100&h=100',
  'Spinach': 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&q=80&w=100&h=100',
  'Ladyfinger': 'https://images.unsplash.com/photo-1425543103986-22abb7d7e8d2?auto=format&fit=crop&q=80&w=100&h=100',
  'Cucumber': 'https://images.unsplash.com/photo-1604977042946-1eecc30f269e?auto=format&fit=crop&q=80&w=100&h=100',
  'Bottle Gourd': 'https://images.unsplash.com/photo-1598511796432-32663d0875bd?auto=format&fit=crop&q=80&w=100&h=100',
  'Red Bell Pepper': 'https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?auto=format&fit=crop&q=80&w=100&h=100',
  'Yellow Bell Pepper': 'https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?auto=format&fit=crop&q=80&w=100&h=100',
  'Green Bell Pepper': 'https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?auto=format&fit=crop&q=80&w=100&h=100',
  'Zucchini': 'https://images.unsplash.com/photo-1596886743531-dcc1c3df4573?auto=format&fit=crop&q=80&w=100&h=100',
  'Baby Corn': 'https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&q=80&w=100&h=100',
  'Mushrooms': 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=100&h=100',
  'Red Cabbage': 'https://images.unsplash.com/photo-1594282486552-05b4d80fbb9f?auto=format&fit=crop&q=80&w=100&h=100',
  'Sweet Corn': 'https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&q=80&w=100&h=100'
};

export default function VegetableFilters({ vegetables, onSelect, selectedVegetable }: VegetableFiltersProps) {
  return (
    <div className="w-full overflow-x-auto pb-2 mb-6">
      <div className="flex space-x-3 min-w-max px-1">
        {vegetables.map((vegetable) => (
          <button
            key={vegetable}
            onClick={() => onSelect(vegetable)}
            className={`flex flex-col items-center p-2 rounded-lg transition-all
              ${selectedVegetable === vegetable 
                ? 'bg-green-500 shadow-lg scale-105' 
                : 'bg-white hover:bg-green-50 shadow'}`}
          >
            <div className={`w-12 h-12 rounded-full overflow-hidden ${selectedVegetable === vegetable ? 'ring-2 ring-white' : ''}`}>
              <img
                src={vegetableImages[vegetable]}
                alt={vegetable}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <span className={`text-xs font-medium mt-1 whitespace-nowrap
              ${selectedVegetable === vegetable ? 'text-white' : 'text-gray-600'}`}>
              {vegetable}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}