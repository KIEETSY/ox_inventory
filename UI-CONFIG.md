# Ox Inventory - UI Configuration

This document explains how to configure which inventory UI to use.

## Configuration

The inventory UI can be switched using the `inventory:reactui` convar.

### Using the Original UI (Default)

No configuration needed. The original UI is used by default.

### Using the New Scandinavian React UI

Add the following to your server configuration file (usually `server.cfg`):

```cfg
setr inventory:reactui 1
```

Then restart the `ox_inventory` resource:

```
restart ox_inventory
```

## Testing the React UI

### Development Mode

1. Navigate to the `web-react` directory
2. Install dependencies: `npm install`
3. Start dev server: `npm run dev`
4. Open browser to `http://localhost:5173`

### In-Game Testing

1. Build the React UI:
   ```bash
   cd web-react
   npm install
   npm run build
   ```

2. Configure the server to use React UI (as shown above)

3. Restart the resource

4. Use `/testinv` command in-game (when `inventory:reactui` is enabled) or the normal inventory key

## UI Features

### Scandinavian React UI
- Modern, minimalist design with dark translucent panels
- Organized sections: Wallet (PLÅNBOK), Keys (NYCKELRING), Bag (VÄSKA)
- Character equipment view with visual layout
- Quick access hotbar (slots 1-5)
- Collapsible sections for better organization
- Smooth animations and hover effects

### Original UI
- Classic inventory interface
- All existing features and compatibility
- Drag-and-drop support
- Context menus

## Building for Production

To build the React UI for production use:

```bash
cd web-react
npm install
npm run build
```

The built files will be in `web-react/build/` and are automatically included by the FiveM resource manifest.

## Troubleshooting

### UI not loading
- Ensure you've built the React UI (`npm run build` in `web-react/`)
- Verify the convar is set correctly
- Check server console for any errors
- Restart the resource after changing configuration

### UI shows but is empty
- Check browser console (F8 in-game) for JavaScript errors
- Ensure all build files are present in `web-react/build/`
- Verify the resource files are up to date

## Requirements

- Node.js 18 or higher
- npm or pnpm
- FiveM server build 6116 or higher
