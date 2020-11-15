import React from "react"

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom"

import LoginPage from "../Pages/LoginPage/"
import VerifyPage from "../Pages/MiscPages/VerifyPage"
import IntroPage from "../Pages/UnauthenticatedPages/IntroPage"
import AboutPage from "../Pages/UnauthenticatedPages/AboutPage"
import LearnMorePage from "../Pages/UnauthenticatedPages/LearnMorePage"
import NotFoundPage from "../Pages/MiscPages/NotFoundPage"
import SampleRecipe from "../Pages/UnauthenticatedPages/SampleRecipe"
import EditRecipePage from "../Pages/EditRecipePage"

const UnauthenticatedApp = (props) => {
  return (
      <Switch>
        <Route path="/login">
          <LoginPage setHasToken={props.setHasToken} />
        </Route>
        <Route path="/recipe/:resourceId" component={EditRecipePage} />
        <Route path="/verify" component={VerifyPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/learnmore" component={LearnMorePage} />
        <Route path="/sample" component={SampleRecipe} />
        <Route path="/" exact component={IntroPage} />
        <Route component={NotFoundPage} />
      </Switch>
  )
}

export default UnauthenticatedApp
