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

const UnauthenticatedApp = (props) => {
  return (
      <Switch>
        <Route path="/login">
          <LoginPage setHasToken={props.setHasToken} />
        </Route>
        <Route path="/verify" component={VerifyPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/learnmore" component={LearnMorePage} />
        <Route path="/" exact component={IntroPage} />
        <Route component={NotFoundPage} />
      </Switch>
  )
}

export default UnauthenticatedApp
