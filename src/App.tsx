import React from 'react';
import { IconButton, CircularProgress } from '@material-ui/core';
import NfcIcon from '@material-ui/icons/Nfc';
import './App.css';

interface AppState {
  reading: boolean;
}

class App extends React.Component<{}, AppState> {
  constructor(props: any) {
    super(props);
    this.state = {reading: false};
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <IconButton style={{ display: !this.state.reading ? "block": "none", backgroundColor: "#4c5361" }} onClick={() => this.readNfc() }>
            {/* Clicked NFC Reader */}
            {/* Loading Popup (Replace or (hide and show))*/}
            {/* Loaded Result Popup */}
            <NfcIcon style={{ color: "white", fontSize: 200}}/>
          </IconButton>
          <CircularProgress size={200} style={{ display: this.state.reading ? "block" : "none" }}/>
          {/* NFC Result Status */}
        </header>
      </div>
    );
  }

  async readNfc() {
    this.setState({reading: true});
  }
}


export default App;
