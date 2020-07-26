import React from 'react';
import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

import ListPage from "./components/Pages/ListPage/"
import LoginPage from "./components/Pages/LoginPage/"
import HomePage from "./components/Pages/HomePage/"

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/lists">
            <ListPage />
          </Route>
          <Route path="/home">
            <HomePage />
          </Route>
        </Switch>

      </div>
    </Router>

  );
}

export default App;
