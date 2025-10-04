import React from 'react';
import { useAppSelector } from '../../store';
import { selectLeftInventory } from '../../store/inventory';
import InventoryGrid from './InventoryGrid';

const ScandinavianLeftInventory: React.FC = () => {
  const leftInventory = useAppSelector(selectLeftInventory);
  
  // Override label to "FICKOR"
  const customInventory = {
    ...leftInventory,
    label: 'FICKOR'
  };

  return (
    <div className="scandinavian-left-panel">
      <InventoryGrid inventory={customInventory} />
    </div>
  );
};

export default ScandinavianLeftInventory;
