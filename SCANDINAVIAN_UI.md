# Scandinavian UI Implementation

## Overview
This implementation provides a new Scandinavian-style React UI for ox_inventory with a clean, modern design featuring dark translucent panels, blue-gray borders, and subtle glows.

## Features

### Layout
- **Two-column layout**: Left panel (FICKOR - player inventory) and right panel (opened inventory)
- **Top hotkey bar**: Shows KARAKTÄR (Q) and MARKERA (E) actions
- **Bottom hotbar**: Standard 5-slot hotbar remains functional

### Left Panel (FICKOR)
The left panel displays the player's inventory organized into sections:
- **FICKOR** (Pockets): Main inventory grid (slots 1-25)
- **PLÅNBOK** (Wallet): 3-slot subsection (slots 26-28)
- **NYCKELRING** (Keyring): 3-slot subsection (slots 29-31)
- **VÄSKA** (Bag): Conditional subsection (slots 32+)
  - Only appears when `rightInventory.type === 'container'` or `'bag'`
  - Hidden when no container is opened

### Right Panel
Displays the opened inventory (container, shop, crafting bench, other player, etc.)

### Styling
- Dark translucent panels: `rgba(25, 32, 42, 0.85)`
- Blue-gray borders: `rgba(74, 95, 122, 0.6)`
- Subtle inner glow and soft shadows
- Minimalist sans-serif font (Roboto)
- Uppercase headers with letter spacing
- Soft blue highlight on hover: `rgba(74, 95, 122, 0.35)`

## Technical Details

### Files Modified
- `web/src/App.tsx` - Updated to use ScandinavianInventory
- `web/src/index.scss` - Added Scandinavian UI styles
- `web/.gitignore` - Uncommented /build to include prebuilt assets

### Files Created
- `web/src/components/inventory/ScandinavianInventory.tsx` - Main inventory component
- `web/src/components/inventory/ScandinavianLeftInventory.tsx` - Left panel with subsections
- `web/src/components/inventory/CharacterPanel.tsx` - Right panel wrapper
- `web/src/components/inventory/TopHotkeyBar.tsx` - Top hotkey bar component

### NUI API Compatibility
All existing ox_inventory NUI callbacks are preserved:
- ✅ `setupInventory` - Sets up left and right inventories
- ✅ `refreshSlots` - Updates inventory slots
- ✅ `closeInventory` - Closes inventory
- ✅ `setInventoryVisible` - Shows/hides inventory
- ✅ `displayMetadata` - Shows item metadata
- ✅ `uiLoaded` - Called when UI is ready
- ✅ `exit` - Exit callback (via InventoryControl)
- ✅ `useButton` - Use item callback (via drag-and-drop)

All existing functionality is maintained:
- Drag-and-drop item management
- Item tooltips
- Context menus
- Weight bars
- Hotbar functionality
- Item actions (use, give, drop, etc.)

## Installation

### Server Deployment
1. Pull this branch
2. Copy to your resources folder
3. Ensure in server.cfg: `ensure ox_inventory`
4. Restart server
5. Press your inventory key (default: Tab) to see the new UI

**No Node.js build required!** Prebuilt assets are included in `web/build/`.

### Development
If you want to modify the UI:
```bash
cd web
npm install
npm start  # Development server
npm run build  # Build for production
```

## Testing

### Test VÄSKA Subsection
To verify the VÄSKA section appears correctly:

1. Open player inventory (should show FICKOR, PLÅNBOK, NYCKELRING)
2. Open a container/bag (VÄSKA section should appear)
3. Close container (VÄSKA section should disappear)

### Test Scenarios
- ✅ Open/close inventory with keybind
- ✅ Drag and drop items
- ✅ Use items (right-click or drag to use zone)
- ✅ Give items to players
- ✅ Open containers, shops, crafting benches
- ✅ View item tooltips
- ✅ Check weight bars update correctly

## Known Limitations

- Equipment slots (Mask, Armor, etc.) are accessed through the main inventory grid rather than positioned around a character silhouette
- The slot ranges for subsections (PLÅNBOK: 26-28, NYCKELRING: 29-31, VÄSKA: 32+) are predefined and may need adjustment based on your server's inventory configuration

## Customization

### Adjust Slot Ranges
Edit `web/src/components/inventory/ScandinavianLeftInventory.tsx`:
```typescript
// Change these ranges to match your server's inventory layout
const mainSlots = leftInventory.items.filter(item => item.slot <= 25);
const walletSlots = leftInventory.items.filter(item => item.slot >= 26 && item.slot <= 28);
const keyringSlots = leftInventory.items.filter(item => item.slot >= 29 && item.slot <= 31);
const bagSlots = leftInventory.items.filter(item => item.slot > 31);
```

### Modify Colors
Edit `web/src/index.scss`:
```scss
$scandiBlueGray: #5a6f8a;
$scandiDarkBg: rgba(18, 23, 30, 0.92);
$scandiPanelBg: rgba(25, 32, 42, 0.85);
$scandiHoverBlue: rgba(74, 95, 122, 0.35);
```

## Screenshots

- Basic layout: https://github.com/user-attachments/assets/fdab4c4b-b4ab-467d-b545-931780814d44
- With subsections: https://github.com/user-attachments/assets/e19c6d4e-2fed-4c33-82e4-cd3e7f886ab0  
- With VÄSKA (container opened): https://github.com/user-attachments/assets/b6404e8c-b0ea-4327-9514-a4afe48852cd
