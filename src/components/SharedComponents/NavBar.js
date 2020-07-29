import React from "react"
import {useState} from "react"

import {
  AppBar,
  Tabs,
  Tab
} from "@material-ui/core"

import {
  Link,
  withRouter
} from "react-router-dom"


const NavBar = (props) => {
  const [value, setValue] = useState(0)

  const handleChange = (event, newValue) => setValue(newValue)

  return (
      <Tabs value={props.history.location.pathname} onChange={handleChange} centered>
        <Tab component={Link} label="Recipes" to="/recipes" value="/recipes"/>
        <Tab component={Link} label="Lists" to="/lists" value="/lists"/>
        <Tab component={Link} label="Ingredients" to="/ingredients" value="/ingredients" />
      </Tabs>
  )
}

export default withRouter(NavBar)
