import React from "react"

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom"

import LoginPage from "../Pages/LoginPage/"
import VerifyPage from "../Pages/MiscPages/VerifyPage"

const UnauthenticatedApp = (props) => {
  return (
      <Switch>
        <Route path="/login">
          <LoginPage setHasToken={props.setHasToken} />
        </Route>
        <Route path="/verify" component={VerifyPage} />
        <Redirect to="/login"/>
      </Switch>
  )
}

export default UnauthenticatedApp
