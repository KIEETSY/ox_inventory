import React from 'react';

const TopHotkeyBar: React.FC = () => {
  return (
    <div className="top-hotkey-bar">
      <div className="hotkey-item">
        <span className="hotkey-label">KARAKTÄR</span>
        <span className="hotkey-key">Q</span>
      </div>
      <div className="hotkey-item">
        <span className="hotkey-label">MARKERA</span>
        <span className="hotkey-key">E</span>
      </div>
    </div>
  );
};

export default TopHotkeyBar;
