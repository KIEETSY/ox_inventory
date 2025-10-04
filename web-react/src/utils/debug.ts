import { InventoryData } from '../types/inventory';

export const debugData = (events: Array<{ action: string; data: any }>) => {
  if (import.meta.env.DEV && (window as any).GetParentResourceName === undefined) {
    setTimeout(() => {
      for (const event of events) {
        window.dispatchEvent(
          new MessageEvent('message', {
            data: event,
          })
        );
      }
    }, 100);
  }
};

export const mockInventoryData: InventoryData = {
  open: false,
  weight: {
    current: 15.5,
    max: 50,
  },
  items: [
    {
      slot: 1,
      name: 'water',
      label: 'Water Bottle',
      weight: 0.5,
      count: 3,
      image: 'water.png',
    },
    {
      slot: 2,
      name: 'bread',
      label: 'Bread',
      weight: 0.3,
      count: 5,
      image: 'bread.png',
    },
    {
      slot: 3,
      name: 'phone',
      label: 'Mobile Phone',
      weight: 0.2,
      count: 1,
      image: 'phone.png',
    },
    {
      slot: 4,
      name: 'lockpick',
      label: 'Lockpick',
      weight: 0.1,
      count: 10,
      image: 'lockpick.png',
    },
    {
      slot: 5,
      name: 'bandage',
      label: 'Bandage',
      weight: 0.1,
      count: 8,
      image: 'bandage.png',
    },
  ],
  sections: {
    wallet: [
      {
        slot: 1,
        name: 'id_card',
        label: 'ID Card',
        weight: 0.05,
        count: 1,
        image: 'id_card.png',
      },
      {
        slot: 2,
        name: 'driver_license',
        label: 'Driver License',
        weight: 0.05,
        count: 1,
        image: 'license.png',
      },
    ],
    keys: [
      {
        slot: 1,
        name: 'car_key',
        label: 'Car Key',
        weight: 0.05,
        count: 1,
        image: 'key.png',
      },
    ],
    bag: [],
  },
  equipment: {
    phone: {
      slot: 0,
      name: 'phone',
      label: 'Mobile Phone',
      weight: 0.2,
      count: 1,
      image: 'phone.png',
    },
    wallet: {
      slot: 0,
      name: 'wallet',
      label: 'Wallet',
      weight: 0.1,
      count: 1,
      image: 'wallet.png',
    },
  },
  hotbar: [
    {
      slot: 1,
      name: 'water',
      label: 'Water',
      weight: 0.5,
      count: 1,
      image: 'water.png',
    },
    null,
    {
      slot: 3,
      name: 'phone',
      label: 'Phone',
      weight: 0.2,
      count: 1,
      image: 'phone.png',
    },
    null,
    null,
  ],
};
