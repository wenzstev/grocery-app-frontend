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
import ListInfoPage from "../Pages/ListInfoPage/"
import EditRecipePage from "../Pages/EditRecipePage/"

const AuthenticatedApp = (props) => {
  return (
      <Switch>
        <Route path="/recipes">
          <RecipePage />
        </Route>
        <Route path="/lists">
          <ListPage />
        </Route>
        <Route path="/ingredients">
          <IngredientPage />
        </Route>
        <Route path="/list/:listId">
          <ListInfoPage />
        </Route>
        <Route path="/recipe/:recipeId">
          <EditRecipePage />
        </Route>
        <Route path="/">
          <Redirect to="/recipes"/>
        </Route>
      </Switch>
  )
}

export default AuthenticatedApp
