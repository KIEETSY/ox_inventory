import { useEffect, useState } from 'react';
import { InventoryData } from './types/inventory';
import { TopBar } from './components/TopBar';
import { LeftPanel } from './components/LeftPanel';
import { RightPanel } from './components/RightPanel';
import { Hotbar } from './components/Hotbar';
import { debugData, mockInventoryData } from './utils/debug';
import { fetchNui, isEnvBrowser } from './utils/nui';

// Initialize debug data for development
debugData([
  {
    action: 'inventory:set',
    data: { ...mockInventoryData, open: true },
  },
]);

function App() {
  const [inventoryData, setInventoryData] = useState<InventoryData>({
    open: false,
    items: [],
    sections: { wallet: [], keys: [], bag: [] },
    equipment: {},
    hotbar: [null, null, null, null, null],
  });

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      const { action, data } = event.data;

      if (action === 'inventory:set') {
        setInventoryData(data);
      }
    };

    window.addEventListener('message', handleMessage);

    // Notify the game that UI is loaded
    if (!isEnvBrowser()) {
      fetchNui('uiLoaded', {});
    }

    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, []);

  // Handle ESC key to close inventory
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && inventoryData.open) {
        fetchNui('closeInventory', {});
        setInventoryData((prev) => ({ ...prev, open: false }));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [inventoryData.open]);

  if (!inventoryData.open) {
    return null;
  }

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <TopBar />

      <div className="flex gap-6">
        <LeftPanel
          items={inventoryData.items}
          sections={inventoryData.sections}
          weight={inventoryData.weight}
        />
        <RightPanel equipment={inventoryData.equipment} />
      </div>

      <Hotbar items={inventoryData.hotbar} />
    </div>
  );
}

export default App;
