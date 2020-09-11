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
import NotFoundPage from "../Pages/MiscPages/NotFoundPage"
import SettingsPage from "../Pages/MiscPages/SettingsPage"
import LearnMorePage from "../Pages/UnauthenticatedPages/LearnMorePage"

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
        <Route path="/list/:resourceId">
          <ListInfoPage />
        </Route>
        <Route path="/recipe/:resourceId">
          <EditRecipePage />
        </Route>
        <Route path="/settings">
          <SettingsPage />
        </Route>
        <Route path="/login">
          <Redirect to="/recipes" />
        </Route>
        <Route path="/about">
          <LearnMorePage />
        </Route>
        <Route path="/" exact>
          <Redirect to="/recipes" />
        </Route>
        <Route component={NotFoundPage} />

      </Switch>
  )
}

export default AuthenticatedApp
