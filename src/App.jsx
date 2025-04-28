import React from 'react';
import PaletteGenerator from './components/PaletteGenerator';

function App() {
  return (
    <div className="App">
      <header className="app-header">
        <img
          src="https://www.gdgsrm.com/_next/image?url=%2Fassets%2Fimg%2Fgdsc_logo.png&w=640&q=75"
          alt="GDSC Logo"
          className="gdsc-logo"
        />
      </header>
      <h1>Color Palette Generator</h1>
      <PaletteGenerator />
      <footer className="app-footer">
        Color Palette Generator Developed by Shaurya Kesarwani (RA2411026010989), First Year Student- CINTEL Department. This innovative tool allows users to create and customize color palettes, enhancing their design projects and artistic endeavors.
      </footer>
    </div>
  );
}

export default App;
