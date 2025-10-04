import React from 'react';
import { EquipmentSlots } from '../types/inventory';
import { ItemSlot } from './ItemSlot';

interface RightPanelProps {
  equipment: Partial<EquipmentSlots>;
}

export const RightPanel: React.FC<RightPanelProps> = ({ equipment }) => {
  const equipmentSlots = [
    { key: 'mask', label: 'Mask', position: 'top-10 left-1/2 -translate-x-1/2' },
    { key: 'armor', label: 'Armor', position: 'top-32 left-1/2 -translate-x-1/2' },
    { key: 'parachute', label: 'Parachute', position: 'top-48 left-8' },
    { key: 'bag', label: 'Väska', position: 'top-48 right-8' },
    { key: 'outfit', label: 'Outfit', position: 'top-64 left-1/2 -translate-x-1/2' },
    { key: 'keys', label: 'Nyckelring', position: 'bottom-32 left-8' },
    { key: 'phone', label: 'Mobiltelefon', position: 'bottom-32 right-8' },
    { key: 'wallet', label: 'Plånbok', position: 'bottom-10 left-1/2 -translate-x-1/2' },
  ];

  return (
    <div className="w-[380px] bg-panel-bg border border-panel-border rounded-lg shadow-panel p-6">
      <div className="flex flex-col items-center">
        <h2 className="text-text-primary text-lg uppercase font-bold tracking-wide mb-6">
          KARAKTÄR
        </h2>

        {/* Character View Container */}
        <div className="relative w-full h-[500px]">
          {/* Silhouette */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-80 bg-gradient-to-b from-text-secondary/10 to-text-secondary/5 rounded-full border border-text-secondary/20" />
          </div>

          {/* Equipment Slots */}
          {equipmentSlots.map(({ key, label, position }) => (
            <div
              key={key}
              className={`absolute ${position} flex flex-col items-center gap-1`}
            >
              <ItemSlot
                item={equipment[key as keyof EquipmentSlots]}
                size="small"
                showLabel={false}
              />
              <span className="text-text-secondary text-xs uppercase whitespace-nowrap">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
