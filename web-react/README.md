# Ox Inventory - Scandinavian UI

Modern, minimalist inventory UI for FiveM with Scandinavian design aesthetics.

## Features

- Clean, translucent dark panels with blue-gray borders
- Organized inventory sections (Wallet, Keys, Bag)
- Character equipment view with silhouette
- Quick access hotbar
- Responsive and smooth animations
- Built with React, TypeScript, and Tailwind CSS

## Development

### Prerequisites

- Node.js 18+ 
- npm or pnpm

### Setup

```bash
# Install dependencies
npm install
# or
pnpm install
```

### Running Development Server

```bash
npm run dev
# or
pnpm dev
```

The development server will start at `http://localhost:5173` with hot module reloading enabled. Sample data is automatically loaded for testing.

### Building for Production

```bash
npm run build
# or
pnpm build
```

This will create optimized production files in the `build/` directory that FiveM will use.

## Project Structure

```
web-react/
├── src/
│   ├── components/       # React components
│   │   ├── TopBar.tsx    # Top action bar
│   │   ├── LeftPanel.tsx # Main inventory panel
│   │   ├── RightPanel.tsx# Character equipment
│   │   ├── Hotbar.tsx    # Bottom hotbar
│   │   ├── ItemSlot.tsx  # Individual item slot
│   │   └── Section.tsx   # Collapsible sections
│   ├── types/           # TypeScript type definitions
│   ├── utils/           # Utility functions (NUI bridge, debug)
│   ├── App.tsx          # Main application component
│   ├── main.tsx         # Entry point
│   └── index.css        # Global styles
├── index.html
├── vite.config.ts
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

## NUI Integration

The UI communicates with FiveM through the NUI bridge:

### Receiving Data

```javascript
// From FiveM client
SendNUIMessage({
  action: 'inventory:set',
  data: {
    open: true,
    weight: { current: 15.5, max: 50 },
    items: [...],
    sections: { wallet: [...], keys: [...], bag: [...] },
    equipment: { phone: {...}, wallet: {...} },
    hotbar: [...]
  }
})
```

### Sending Callbacks

```typescript
// From React
fetchNui('closeInventory', {});
fetchNui('useItem', { slot: 1 });
```

## Styling

The UI uses Tailwind CSS with custom theme extensions:

- **Colors**: Dark translucent backgrounds with blue accents
- **Shadows**: Subtle glows and panel shadows
- **Typography**: Clean, uppercase headers with proper tracking
- **Animations**: Smooth transitions and hover effects

## License

See main repository LICENSE file.
