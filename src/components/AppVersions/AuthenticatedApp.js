import React from "react"

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom"

import ListPage from "../Pages/ListPage/"
import RecipePage from "../Pages/RecipePage/"
import IngredientPage from "../Pages/IngredientPage/"

const AuthenticatedApp = (props) => {
  return (
      <Switch>
        <Route path="/recipes">
          <RecipePage  setToken={props.setToken}/>
        </Route>
        <Route path="/lists">
          <ListPage  setToken={props.setToken}/>
        </Route>
        <Route path="/ingredients">
          <IngredientPage  setToken={props.setToken}/>
        </Route>
        <Route path="/">
          <Redirect to="/recipes"/>
        </Route>
      </Switch>
  )
}

export default AuthenticatedApp
