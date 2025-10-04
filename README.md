# ox_inventory

A complete inventory system for FiveM, implementing items, weapons, shops, and more without any strict framework dependency.

![](https://img.shields.io/github/downloads/overextended/ox_inventory/total?logo=github)
![](https://img.shields.io/github/downloads/overextended/ox_inventory/latest/total?logo=github)
![](https://img.shields.io/github/contributors/overextended/ox_inventory?logo=github)
![](https://img.shields.io/github/v/release/overextended/ox_inventory?logo=github)

## 📚 Documentation

https://overextended.dev/ox_inventory

## 💾 Download

https://github.com/overextended/ox_inventory/releases/latest/download/ox_inventory.zip

## Supported frameworks

We do not guarantee compatibility or support for third-party resources.

- [ox_core](https://github.com/overextended/ox_core)
- [esx](https://github.com/esx-framework/esx_core)
- [qbox](https://github.com/Qbox-project/qbx_core)
- [nd_core](https://github.com/ND-Framework/ND_Core)

## ✨ Features

- Server-side security ensures interactions with items, shops, and stashes are all validated.
- Logging for important events, such as purchases, item movement, and item creation or removal.
- Supports player-owned vehicles, licenses, and group systems implemented by frameworks.
- Fully synchronised, allowing multiple players to [access the same inventory](https://user-images.githubusercontent.com/65407488/230926091-c0033732-d293-48c9-9d62-6f6ae0a8a488.mp4).

## 🎨 Scandinavian UI

This resource includes a modern, Scandinavian-themed UI built with React and Tailwind CSS. The UI features:

- **Left Panel**: "FICKOR" (Pockets) grid layout with 5 columns, displaying the first 25 inventory slots
- **Left Panel Extended**: "RYGGSÄCK" (Backpack) section for additional slots beyond 25
- **Right Panel**: Character silhouette with equipment slots, or displays secondary inventory (shops, stashes, etc.)
- **Bottom Hotbar**: Quick access to the first 5 inventory slots (slots 1-5), appears on toggle
- **Top Hotkey Bar**: Visual display of keyboard shortcuts with Swedish labels (TAB: Stäng, F: Använd, G: Släng)
- **Dark Theme**: Modern dark color scheme with blue accents
- **Weight Bars**: Visual indicators showing current weight vs. maximum capacity

### 🚀 No Build Required

The resource comes with **pre-built UI assets** in `web/build/`, so you can:
1. Download and extract the resource to your FiveM server
2. Start the server: `ensure ox_inventory`
3. Press your inventory keybind (default: TAB) to open the new UI

**No additional setup, npm install, or build steps required on the server!**

### 🔧 Toggle UI Theme (Optional)

To switch between Classic and Scandinavian themes:

1. Edit `web/src/config.ts`
2. Change `USE_SCANDINAVIAN_UI` to `true` (Scandinavian) or `false` (Classic)
3. Rebuild the project:
   ```bash
   cd web
   npm install
   npm run build
   ```

### 🎮 Compatibility

The Scandinavian UI maintains **100% compatibility** with the existing ox_inventory system:
- All NUI callbacks are preserved (`setupInventory`, `refreshSlots`, `closeInventory`, etc.)
- Drag & drop functionality works identically
- All item actions and context menus remain functional
- No changes required to server-side Lua code
- Works with all existing inventory types (player, shop, crafting, stash, etc.)

### 📸 Preview

![Scandinavian UI](https://github.com/user-attachments/assets/0fe27aed-cc51-4195-a0c8-40c4fb5fbc13)

## ✨ Features (continued)

### Items

- Inventory items are stored per-slot, with customisable metadata to support item uniqueness.
- Overrides default weapon-system with weapons as items.
- Weapon attachments and ammo system, including special ammo types.
- Durability, allowing items to be depleted or removed overtime.
- Internal item system provides secure and easy handling for item use effects.
- Compatibility with 3rd party framework item registration.

### Shops

- Restricted access based on groups and licenses.
- Support different currency for items (black money, poker chips, etc).

### Stashes

- Personal stashes, linking a stash with a specific identifier or creating per-player instances.
- Restricted access based on groups.
- Registration of new stashes from any resource.
- Containers allow access to stashes when using an item, like a paperbag or backpack.
- Access gloveboxes and trunks for any vehicle.
- Random item generation inside dumpsters and unowned vehicles.

## Copyright

Copyright © 2024 Overextended <https://github.com/overextended>

This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License along with this program. If not, see <https://www.gnu.org/licenses/>.
