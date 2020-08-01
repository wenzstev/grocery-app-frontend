import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
} from "react-router-dom"

import AuthenticatedApp from "./components/AppVersions/AuthenticatedApp"
import UnauthenticatedApp from "./components/AppVersions/UnauthenticatedApp"

function App() {
  const [token, setToken] = useState(null)

  console.log(token)

  return (
    <Router>
      <div className="App">
        {token ? <AuthenticatedApp token={token} /> : <UnauthenticatedApp setToken={setToken} />}
      </div>
    </Router>

  );
}

export default App;
