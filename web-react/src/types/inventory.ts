export interface Item {
  slot: number;
  name: string;
  label?: string;
  weight: number;
  count?: number;
  metadata?: Record<string, any>;
  image?: string;
}

export interface EquipmentSlots {
  mask?: Item;
  armor?: Item;
  parachute?: Item;
  bag?: Item;
  outfit?: Item;
  keys?: Item;
  phone?: Item;
  wallet?: Item;
}

export interface InventoryData {
  open: boolean;
  weight?: {
    current: number;
    max: number;
  };
  items: Item[];
  sections: {
    wallet: Item[];
    keys: Item[];
    bag: Item[];
  };
  equipment: Partial<EquipmentSlots>;
  hotbar: (Item | null)[];
}

export interface NuiMessage<T = any> {
  action: string;
  payload: T;
}
