import React, { useState } from 'react'
import ColorPallet from './ColorPallet';
import ColorTyper from './ColorTyper';

function App() {
  const [colorName,setColorName] = useState('')


  return (
    <div className="App">
      <div className="B1">
        <ColorPallet 
          colorName={colorName}
        />
        <ColorTyper
          colorName={colorName}
          setColorName={setColorName}
        />
      </div>
    </div>
  );
}

export default App;


