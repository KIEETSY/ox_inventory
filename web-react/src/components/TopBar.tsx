import React from 'react';

export const TopBar: React.FC = () => {
  return (
    <div className="absolute top-6 left-1/2 transform -translate-x-1/2 flex gap-4 z-20">
      <div className="px-6 py-2 bg-panel-bg border border-panel-border rounded-lg shadow-panel">
        <span className="text-text-primary text-sm uppercase font-medium tracking-wide">
          KARAKTÄR (Q)
        </span>
      </div>
      <div className="px-6 py-2 bg-panel-bg border border-panel-border rounded-lg shadow-panel">
        <span className="text-text-primary text-sm uppercase font-medium tracking-wide">
          MARKERA (E)
        </span>
      </div>
    </div>
  );
};
