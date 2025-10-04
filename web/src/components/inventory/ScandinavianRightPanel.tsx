import React from 'react';
import { useAppSelector } from '../../store';
import { selectRightInventory } from '../../store/inventory';
import InventorySlot from './InventorySlot';
import { getTotalWeight } from '../../helpers';
import WeightBar from '../utils/WeightBar';

const ScandinavianRightPanel: React.FC = () => {
  const rightInventory = useAppSelector(selectRightInventory);
  
  // If there's no right inventory, show character equipment
  if (!rightInventory.id) {
    return (
      <div className="scandinavian-right-panel">
        <div className="scandinavian-character">
          <div className="text-scandinavian-text mb-2">UTRUSTNING</div>
          {/* Character silhouette placeholder */}
          <div className="w-32 h-48 bg-scandinavian-bg border border-scandinavian-border rounded flex items-center justify-center text-scandinavian-text/50">
            <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
            </svg>
          </div>
          {/* Equipment slots grid (3x3) */}
          <div className="scandinavian-equipment-grid w-full">
            {[...Array(9)].map((_, i) => (
              <div key={`equipment-${i}`} className="scandinavian-slot h-16">
                {/* Equipment slot placeholder */}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // If there's a right inventory (shop, stash, etc.), show it
  const weight = rightInventory.maxWeight !== undefined 
    ? Math.floor(getTotalWeight(rightInventory.items) * 1000) / 1000 
    : 0;

  return (
    <div className="scandinavian-right-panel">
      <div className="scandinavian-section">
        <div className="scandinavian-section-header">
          <span>{rightInventory.label || 'FÖRRÅD'}</span>
          {rightInventory.maxWeight && (
            <span className="text-sm">
              {weight / 1000}/{rightInventory.maxWeight / 1000}kg
            </span>
          )}
        </div>
        {rightInventory.maxWeight && (
          <WeightBar percent={(weight / rightInventory.maxWeight) * 100} />
        )}
        <div className="scandinavian-grid grid-cols-5 mt-3">
          {rightInventory.items.map((item) => (
            <InventorySlot
              key={`right-${item.slot}`}
              item={item}
              inventoryType={rightInventory.type}
              inventoryGroups={rightInventory.groups}
              inventoryId={rightInventory.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScandinavianRightPanel;
