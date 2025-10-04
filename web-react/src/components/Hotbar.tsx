import React from 'react';
import { Item } from '../types/inventory';
import { ItemSlot } from './ItemSlot';

interface HotbarProps {
  items: (Item | null)[];
}

export const Hotbar: React.FC<HotbarProps> = ({ items }) => {
  return (
    <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20">
      <div className="flex gap-2 bg-panel-bg border border-panel-border rounded-lg shadow-panel p-3">
        {items.map((item, idx) => (
          <div key={idx} className="relative">
            <ItemSlot item={item} size="medium" showLabel={false} />
            <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-black/60 border border-panel-border rounded-full flex items-center justify-center">
              <span className="text-text-primary text-xs font-bold">
                {idx + 1}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
