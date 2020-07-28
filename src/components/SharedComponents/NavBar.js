import React from "react"

import {
  AppBar,
  Tabs,
  Tab
} from "@material-ui/core"

const NavBar = () => {
  return (
      <Tabs value={0} centered>
        <Tab label="Recipes" value={0}/>
        <Tab label="Lists" value={1}/>
        <Tab label="Ingredients" value={2}/>
      </Tabs>
  )
}

export default NavBar
