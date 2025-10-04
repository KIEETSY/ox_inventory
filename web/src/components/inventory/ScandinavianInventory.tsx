import React, { useState } from 'react';
import useNuiEvent from '../../hooks/useNuiEvent';
import { useAppDispatch } from '../../store';
import { refreshSlots, setAdditionalMetadata, setupInventory } from '../../store/inventory';
import { useExitListener } from '../../hooks/useExitListener';
import type { Inventory as InventoryProps } from '../../typings';
import Tooltip from '../utils/Tooltip';
import { closeTooltip } from '../../store/tooltip';
import InventoryContext from './InventoryContext';
import { closeContextMenu } from '../../store/contextMenu';
import Fade from '../utils/transitions/Fade';
import ScandinavianLeftPanel from './ScandinavianLeftPanel';
import ScandinavianRightPanel from './ScandinavianRightPanel';
import ScandinavianHotbar from './ScandinavianHotbar';
import ScandinavianHotkeyBar from './ScandinavianHotkeyBar';

const ScandinavianInventory: React.FC = () => {
  const [inventoryVisible, setInventoryVisible] = useState(false);
  const dispatch = useAppDispatch();

  useNuiEvent<boolean>('setInventoryVisible', setInventoryVisible);
  useNuiEvent<false>('closeInventory', () => {
    setInventoryVisible(false);
    dispatch(closeContextMenu());
    dispatch(closeTooltip());
  });
  useExitListener(setInventoryVisible);

  useNuiEvent<{
    leftInventory?: InventoryProps;
    rightInventory?: InventoryProps;
  }>('setupInventory', (data) => {
    dispatch(setupInventory(data));
    !inventoryVisible && setInventoryVisible(true);
  });

  useNuiEvent('refreshSlots', (data) => dispatch(refreshSlots(data)));

  useNuiEvent('displayMetadata', (data: Array<{ metadata: string; value: string }>) => {
    dispatch(setAdditionalMetadata(data));
  });

  return (
    <>
      <Fade in={inventoryVisible}>
        <div className="scandinavian-container">
          <ScandinavianHotkeyBar />
          <div className="scandinavian-inventory">
            <ScandinavianLeftPanel />
            <ScandinavianRightPanel />
          </div>
          <Tooltip />
          <InventoryContext />
        </div>
      </Fade>
      <ScandinavianHotbar />
    </>
  );
};

export default ScandinavianInventory;
