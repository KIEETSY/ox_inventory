import React from 'react';
import { useAppSelector } from '../../store';
import { selectRightInventory } from '../../store/inventory';
import InventoryGrid from './InventoryGrid';

const CharacterPanel: React.FC = () => {
  const rightInventory = useAppSelector(selectRightInventory);

  return (
    <div className="scandinavian-right-panel">
      <InventoryGrid inventory={rightInventory} />
    </div>
  );
};

export default CharacterPanel;
