import React from 'react';
import logo from './logo.svg';
import './App.css';

import ButtonTemplate from "./components/Buttons/ButtonTemplate"
import {PanelButton} from "./components/Buttons/PanelButtons"

function App() {
  return (
    <div className="App">
      <ButtonTemplate />
      <PanelButton />
    </div>
  );
}

export default App;
