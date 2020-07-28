import React from 'react';
import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

import ListInfoPage from "./components/Pages/ListInfoPage/"
import LoginPage from "./components/Pages/LoginPage/"
import RecipePage from "./components/Pages/RecipePage/"
import ListPage from "./components/Pages/ListPage/"

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/list">
            <ListInfoPage />
          </Route>
          <Route path="/home">
            <RecipePage />
          </Route>
          <Route path="/lists">
            <ListPage />
          </Route>
        </Switch>

      </div>
    </Router>

  );
}

export default App;
