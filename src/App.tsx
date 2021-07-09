import React from 'react';
import { IconButton } from '@material-ui/core';
import NfcIcon from '@material-ui/icons/Nfc';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <IconButton style={{ backgroundColor: "#4c5361" }}>
          {/* Clicked NFC Reader */}
          {/* Loading Popup */}
          {/* Loaded Result Popup */}
          <NfcIcon style={{ color: "white", fontSize: 200}}/>
        </IconButton>
        {/* NFC Result Status */}
      </header>
    </div>
  );
}

export default App;
