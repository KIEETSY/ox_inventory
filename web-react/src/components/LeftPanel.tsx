import React from 'react';
import { Item } from '../types/inventory';
import { ItemSlot } from './ItemSlot';
import { Section } from './Section';

interface LeftPanelProps {
  items: Item[];
  sections: {
    wallet: Item[];
    keys: Item[];
    bag: Item[];
  };
  weight?: {
    current: number;
    max: number;
  };
}

export const LeftPanel: React.FC<LeftPanelProps> = ({
  items,
  sections,
  weight,
}) => {
  const maxSlots = 30;
  const allSlots = Array.from({ length: maxSlots }, (_, i) => {
    return items.find((item) => item.slot === i + 1) || null;
  });

  return (
    <div className="w-[480px] bg-panel-bg border border-panel-border rounded-lg shadow-panel p-4 space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-panel-border pb-3">
        <h2 className="text-text-primary text-lg uppercase font-bold tracking-wide">
          FICKOR
        </h2>
        {weight && (
          <div className="text-text-secondary text-sm">
            <span className="text-text-primary font-medium">
              {weight.current.toFixed(1)}
            </span>
            {' / '}
            {weight.max.toFixed(1)} kg
          </div>
        )}
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-6 gap-2 max-h-[400px] overflow-y-auto pr-2 scrollbar-thin">
        {allSlots.map((item, idx) => (
          <ItemSlot key={idx} item={item} slotNumber={idx + 1} size="medium" />
        ))}
      </div>

      {/* Subsections */}
      <div className="space-y-2">
        <Section title="PLÅNBOK" items={sections.wallet} />
        <Section title="NYCKELRING" items={sections.keys} />
        <Section title="VÄSKA" items={sections.bag} />
      </div>
    </div>
  );
};
