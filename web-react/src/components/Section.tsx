import React, { useState } from 'react';
import { Item } from '../types/inventory';
import { ItemSlot } from './ItemSlot';

interface SectionProps {
  title: string;
  items: Item[];
  defaultOpen?: boolean;
}

export const Section: React.FC<SectionProps> = ({
  title,
  items,
  defaultOpen = true,
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="bg-panel-bg border border-panel-border rounded-lg shadow-panel overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-2 flex items-center justify-between bg-black/20 hover:bg-black/30 transition-colors"
      >
        <span className="text-text-primary text-sm uppercase font-semibold tracking-wide">
          {title}
        </span>
        <svg
          className={`w-4 h-4 text-text-secondary transition-transform ${
            isOpen ? 'rotate-180' : ''
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="p-3 grid grid-cols-4 gap-2">
          {items.length > 0 ? (
            items.map((item, idx) => (
              <ItemSlot key={idx} item={item} size="small" />
            ))
          ) : (
            <div className="col-span-4 text-center text-text-secondary text-sm py-2">
              Tomt
            </div>
          )}
        </div>
      )}
    </div>
  );
};
