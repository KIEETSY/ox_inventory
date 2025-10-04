import React from 'react';
import { useAppSelector } from '../../store';
import { selectLeftInventory } from '../../store/inventory';
import { getItemUrl, isSlotWithItem } from '../../helpers';
import { SlotWithItem } from '../../typings';
import InventorySlot from './InventorySlot';
import WeightBar from '../utils/WeightBar';
import { getTotalWeight } from '../../helpers';

const ScandinavianLeftPanel: React.FC = () => {
  const leftInventory = useAppSelector(selectLeftInventory);
  const weight = leftInventory.maxWeight !== undefined 
    ? Math.floor(getTotalWeight(leftInventory.items) * 1000) / 1000 
    : 0;

  // Split items into sections: pockets (first 25), backpack (rest)
  const pocketSlots = 25;
  const pockets = leftInventory.items.slice(0, pocketSlots);
  const backpack = leftInventory.items.slice(pocketSlots);

  return (
    <div className="scandinavian-left-panel">
      {/* Pockets Section (FICKOR) */}
      <div className="scandinavian-section">
        <div className="scandinavian-section-header">
          <span>FICKOR</span>
          {leftInventory.maxWeight && (
            <span className="text-sm">
              {weight / 1000}/{leftInventory.maxWeight / 1000}kg
            </span>
          )}
        </div>
        <WeightBar percent={leftInventory.maxWeight ? (weight / leftInventory.maxWeight) * 100 : 0} />
        <div className="scandinavian-grid grid-cols-5 mt-3">
          {pockets.map((item) => (
            <InventorySlot
              key={`left-${item.slot}`}
              item={item}
              inventoryType={leftInventory.type}
              inventoryGroups={leftInventory.groups}
              inventoryId={leftInventory.id}
            />
          ))}
        </div>
      </div>

      {/* Backpack Section (if there are more items) */}
      {backpack.length > 0 && (
        <div className="scandinavian-section">
          <div className="scandinavian-section-header">
            <span>RYGGSÄCK</span>
          </div>
          <div className="scandinavian-grid grid-cols-5">
            {backpack.map((item) => (
              <InventorySlot
                key={`left-${item.slot}`}
                item={item}
                inventoryType={leftInventory.type}
                inventoryGroups={leftInventory.groups}
                inventoryId={leftInventory.id}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ScandinavianLeftPanel;
