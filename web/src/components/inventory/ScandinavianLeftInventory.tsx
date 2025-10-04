import React, { useMemo } from 'react';
import { useAppSelector } from '../../store';
import { selectLeftInventory, selectRightInventory } from '../../store/inventory';
import WeightBar from '../utils/WeightBar';
import InventorySlot from './InventorySlot';
import { getTotalWeight } from '../../helpers';

const ScandinavianLeftInventory: React.FC = () => {
  const leftInventory = useAppSelector(selectLeftInventory);
  const rightInventory = useAppSelector(selectRightInventory);
  const isBusy = useAppSelector((state) => state.inventory.isBusy);
  
  // Check if a bag/container is opened
  const showBagSection = rightInventory.type === 'container' || rightInventory.type === 'bag';

  const weight = useMemo(
    () => (leftInventory.maxWeight !== undefined ? Math.floor(getTotalWeight(leftInventory.items) * 1000) / 1000 : 0),
    [leftInventory.maxWeight, leftInventory.items]
  );

  // Split inventory into sections (assuming standard slot ranges)
  // Main pockets: slots 1-25
  const mainSlots = leftInventory.items.filter(item => item.slot <= 25);
  
  // Wallet: slots 26-28 (or last 3 slots before special items)
  const walletSlots = leftInventory.items.filter(item => item.slot >= 26 && item.slot <= 28);
  
  // Keyring: slots 29-31
  const keyringSlots = leftInventory.items.filter(item => item.slot >= 29 && item.slot <= 31);
  
  // Bag section: remaining slots (only show when container is open)
  const bagSlots = leftInventory.items.filter(item => item.slot > 31);

  // Create empty slots to fill the grids to proper size
  const fillSlots = (items: typeof leftInventory.items, targetCount: number) => {
    const filled = [...items];
    const maxSlot = items.length > 0 ? Math.max(...items.map(i => i.slot)) : 0;
    for (let i = filled.length; i < targetCount; i++) {
      filled.push({ slot: maxSlot + i + 1 } as any);
    }
    return filled;
  };

  return (
    <div className="scandinavian-left-panel" style={{ pointerEvents: isBusy ? 'none' : 'auto' }}>
      {/* Main Header */}
      <div className="scandi-inventory-header">
        <h2 className="scandi-header-title">FICKOR</h2>
        {leftInventory.maxWeight && (
          <span className="scandi-weight-info">
            {weight / 1000}/{leftInventory.maxWeight / 1000}kg
          </span>
        )}
      </div>
      <WeightBar percent={leftInventory.maxWeight ? (weight / leftInventory.maxWeight) * 100 : 0} />

      {/* Main Pockets Grid */}
      <div className="scandi-grid-container">
        {mainSlots.map((item) => (
          <InventorySlot
            key={`${leftInventory.type}-${leftInventory.id}-${item.slot}`}
            item={item}
            inventoryType={leftInventory.type}
            inventoryGroups={leftInventory.groups}
            inventoryId={leftInventory.id}
          />
        ))}
      </div>

      {/* Wallet Subsection */}
      <div className="scandi-subsection">
        <h3 className="scandi-subsection-title">PLÅNBOK</h3>
        <div className="scandi-subsection-grid">
          {(walletSlots.length > 0 ? walletSlots : fillSlots(walletSlots, 3)).map((item) => (
            <InventorySlot
              key={`${leftInventory.type}-${leftInventory.id}-${item.slot}`}
              item={item}
              inventoryType={leftInventory.type}
              inventoryGroups={leftInventory.groups}
              inventoryId={leftInventory.id}
            />
          ))}
        </div>
      </div>

      {/* Keyring Subsection */}
      <div className="scandi-subsection">
        <h3 className="scandi-subsection-title">NYCKELRING</h3>
        <div className="scandi-subsection-grid">
          {(keyringSlots.length > 0 ? keyringSlots : fillSlots(keyringSlots, 3)).map((item) => (
            <InventorySlot
              key={`${leftInventory.type}-${leftInventory.id}-${item.slot}`}
              item={item}
              inventoryType={leftInventory.type}
              inventoryGroups={leftInventory.groups}
              inventoryId={leftInventory.id}
            />
          ))}
        </div>
      </div>

      {/* Bag Subsection - Only visible when container/bag is opened */}
      {showBagSection && bagSlots.length > 0 && (
        <div className="scandi-subsection">
          <h3 className="scandi-subsection-title">VÄSKA</h3>
          <div className="scandi-subsection-grid">
            {bagSlots.map((item) => (
              <InventorySlot
                key={`${leftInventory.type}-${leftInventory.id}-${item.slot}`}
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

export default ScandinavianLeftInventory;
