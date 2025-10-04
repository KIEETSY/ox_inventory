import React from 'react';

const ScandinavianHotkeyBar: React.FC = () => {
  const hotkeys = [
    { key: 'TAB', label: 'Stäng' },
    { key: 'F', label: 'Använd' },
    { key: 'G', label: 'Släng' },
  ];

  return (
    <div className="scandinavian-hotkey-bar">
      {hotkeys.map((hotkey, index) => (
        <div
          key={index}
          className="flex items-center gap-2 px-3 py-1 bg-scandinavian-bg/50 rounded text-scandinavian-text text-sm"
        >
          <kbd className="px-2 py-0.5 bg-scandinavian-accent/20 border border-scandinavian-accent/30 rounded text-scandinavian-accent font-mono text-xs">
            {hotkey.key}
          </kbd>
          <span>{hotkey.label}</span>
        </div>
      ))}
    </div>
  );
};

export default ScandinavianHotkeyBar;
