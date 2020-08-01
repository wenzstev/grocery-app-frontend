import React, {useState} from 'react';
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
import IngredientPage from "./components/Pages/IngredientPage/"

function App() {
  const [token, setToken] = useState(null)

  console.log(token)

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/">
            <LoginPage token={token} setToken={setToken}/>
          </Route>
          <Route path="/list">
            <ListInfoPage />
          </Route>
          <Route path="/recipes">
            <RecipePage />
          </Route>
          <Route path="/lists">
            <ListPage />
          </Route>
          <Route path="/ingredients">
            <IngredientPage />
          </Route>
        </Switch>

      </div>
    </Router>

  );
}

export default App;
