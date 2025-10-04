import React, { useState } from 'react';
import { getItemUrl, isSlotWithItem } from '../../helpers';
import useNuiEvent from '../../hooks/useNuiEvent';
import { Items } from '../../store/items';
import { useAppSelector } from '../../store';
import { selectLeftInventory } from '../../store/inventory';
import { SlotWithItem } from '../../typings';
import SlideUp from '../utils/transitions/SlideUp';

const ScandinavianHotbar: React.FC = () => {
  const [hotbarVisible, setHotbarVisible] = useState(false);
  const items = useAppSelector(selectLeftInventory).items.slice(0, 5);

  const [handle, setHandle] = useState<NodeJS.Timeout>();
  useNuiEvent('toggleHotbar', () => {
    if (hotbarVisible) {
      setHotbarVisible(false);
    } else {
      if (handle) clearTimeout(handle);
      setHotbarVisible(true);
      setHandle(setTimeout(() => setHotbarVisible(false), 3000));
    }
  });

  return (
    <SlideUp in={hotbarVisible}>
      <div className="scandinavian-hotbar">
        {items.map((item) => (
          <div
            key={`hotbar-${item.slot}`}
            className="scandinavian-slot w-16 h-16"
            style={{
              backgroundImage: item?.name ? `url(${getItemUrl(item as SlotWithItem)})` : 'none',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            {isSlotWithItem(item) && (
              <>
                <div className="absolute top-1 left-1 text-xs bg-black/70 px-1.5 py-0.5 rounded">
                  {item.slot}
                </div>
                {item.count && item.count > 1 && (
                  <div className="scandinavian-slot-count">
                    {item.count}x
                  </div>
                )}
              </>
            )}
          </div>
        ))}
      </div>
    </SlideUp>
  );
};

export default ScandinavianHotbar;
