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
import MainTemplatePage from "../Pages/MainTemplatePage"

const PageRoute = (props) => {
  console.log("in page route")
  return (
    <Route path={props.path}>
      <MainTemplatePage>
        {props.children}
      </MainTemplatePage>
    </Route>
  )
}

const AuthenticatedApp = (props) => {
  return (
      <Switch>
        <PageRoute path="/recipes">
          <RecipePage />
        </PageRoute>
        <PageRoute path="/lists">
          <ListPage />
        </PageRoute>
        <Route path="/list/:listId">
        </Route>
        <Route path="/recipe/:recipeId">
        </Route>
        <Route path="/">
          <Redirect to="/lists"/>
        </Route>
      </Switch>
  )
}

export default AuthenticatedApp
