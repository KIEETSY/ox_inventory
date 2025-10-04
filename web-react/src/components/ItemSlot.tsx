import React from 'react';
import { Item } from '../types/inventory';

interface ItemSlotProps {
  item?: Item | null;
  slotNumber?: number;
  size?: 'small' | 'medium' | 'large';
  showLabel?: boolean;
  className?: string;
}

export const ItemSlot: React.FC<ItemSlotProps> = ({
  item,
  slotNumber,
  size = 'medium',
  showLabel = true,
  className = '',
}) => {
  const sizeClasses = {
    small: 'w-12 h-12',
    medium: 'w-16 h-16',
    large: 'w-20 h-20',
  };

  return (
    <div
      className={`${sizeClasses[size]} ${className} relative bg-panel-bg border border-panel-border rounded-md flex flex-col items-center justify-center hover:border-accent-blue transition-colors cursor-pointer shadow-panel`}
    >
      {item ? (
        <>
          <div className="flex-1 flex items-center justify-center p-2">
            <div className="w-8 h-8 bg-text-secondary/20 rounded" />
          </div>
          {showLabel && (
            <div className="w-full bg-black/40 border-t border-panel-border px-1 py-0.5">
              <p className="text-xs text-text-primary truncate text-center uppercase font-medium">
                {item.label || item.name}
              </p>
              {item.count && item.count > 1 && (
                <p className="text-xs text-text-secondary text-center">
                  x{item.count}
                </p>
              )}
            </div>
          )}
        </>
      ) : (
        <>
          {slotNumber !== undefined && (
            <span className="text-text-secondary/50 text-xs">{slotNumber}</span>
          )}
        </>
      )}
    </div>
  );
};
