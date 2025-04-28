import React, { useState, useEffect } from 'react';
import './CustomColorPicker.css';

const CustomColorPicker = ({ color, onChange }) => {
  const [rgb, setRgb] = useState({ r: 0, g: 0, b: 0 });
  const [opacity, setOpacity] = useState(100);

  useEffect(() => {
    if (color) {
      const hex = color.replace('#', '');
      const r = parseInt(hex.substring(0, 2), 16);
      const g = parseInt(hex.substring(2, 4), 16);
      const b = parseInt(hex.substring(4, 6), 16);
      setRgb({ r, g, b });
    }
  }, [color]);

  const handleRgbChange = (e, channel) => {
    const value = Math.min(255, Math.max(0, parseInt(e.target.value) || 0));
    const newRgb = { ...rgb, [channel]: value };
    setRgb(newRgb);
    const hex = `#${Object.values(newRgb)
      .map(x => x.toString(16).padStart(2, '0'))
      .join('')}`;
    onChange(hex);
  };

  const handleOpacityChange = (e) => {
    const value = Math.min(100, Math.max(0, parseInt(e.target.value) || 0));
    setOpacity(value);
  };

  return (
    <div className="custom-color-picker">
      <div className="color-preview" style={{ backgroundColor: color }} />
      <div className="rgb-controls">
        <div className="rgb-input">
          <label>R:</label>
          <input
            type="number"
            value={rgb.r}
            onChange={(e) => handleRgbChange(e, 'r')}
            min="0"
            max="255"
          />
        </div>
        <div className="rgb-input">
          <label>G:</label>
          <input
            type="number"
            value={rgb.g}
            onChange={(e) => handleRgbChange(e, 'g')}
            min="0"
            max="255"
          />
        </div>
        <div className="rgb-input">
          <label>B:</label>
          <input
            type="number"
            value={rgb.b}
            onChange={(e) => handleRgbChange(e, 'b')}
            min="0"
            max="255"
          />
        </div>
      </div>
      <div className="opacity-control">
        <label>Opacity:</label>
        <input
          type="range"
          value={opacity}
          onChange={handleOpacityChange}
          min="0"
          max="100"
        />
        <span>{opacity}%</span>
      </div>
    </div>
  );
};

export default CustomColorPicker; 