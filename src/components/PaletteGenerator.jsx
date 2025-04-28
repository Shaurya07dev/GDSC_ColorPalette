import React, { useState } from 'react';

function generatePalette(baseColors) {
  return baseColors.map(color => {
    let colorInt = parseInt(color.slice(1), 16);
    let lighter = Math.min(colorInt + 0x111111, 0xFFFFFF);
    return [`#${lighter.toString(16).padStart(6, '0')}`, color];
  }).flat();
}

const PaletteGenerator = () => {
  const [baseColors, setBaseColors] = useState([]);
  const [palette, setPalette] = useState([]);

  const handleColorChange = (e, idx) => {
    const updatedColors = [...baseColors];
    updatedColors[idx] = e.target.value;
    setBaseColors(updatedColors);
  };

  const addColor = () => {
    setBaseColors([...baseColors, '#4285F4']);
  };

  const deleteColor = (idx) => {
    const updatedColors = baseColors.filter((_, index) => index !== idx);
    setBaseColors(updatedColors);
  };

  const clearAllColors = () => {
    setBaseColors([]);
    setPalette([]);
  };

  const createPalette = () => {
    if (baseColors.length === 0) {
      alert('Please add at least one color to generate a palette!');
      return;
    }
    setPalette(generatePalette(baseColors));
  };

  const copyToClipboard = (color) => {
    navigator.clipboard.writeText(color);
    alert(`Copied ${color} to clipboard!`);
  };

  return (
    <div className="palette-generator">
      <div className="controls">
        <div className="color-inputs">
          {baseColors.map((color, idx) => (
            <div key={idx} className="color-input-group">
              <input
                type="color"
                value={color}
                onChange={(e) => handleColorChange(e, idx)}
              />
              <button 
                className="delete-btn"
                onClick={() => deleteColor(idx)}
                title="Delete color"
              >
                ×
              </button>
            </div>
          ))}
        </div>
        <div className="action-buttons">
          <button onClick={addColor} className="add-btn">
            Add Color
          </button>
          <button onClick={createPalette} className="generate-btn">
            Generate Palette
          </button>
          <button onClick={clearAllColors} className="clear-btn">
            Clear All
          </button>
        </div>
      </div>

      {palette.length > 0 && (
        <div className="palette">
          {palette.map((color, idx) => (
            <div
              key={idx}
              className="color-swatch"
              style={{ backgroundColor: color }}
              onClick={() => copyToClipboard(color)}
            >
              <span>{color}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PaletteGenerator;
