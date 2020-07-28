import React from "react"
import {useState} from "react"

import {
  AppBar,
  Tabs,
  Tab
} from "@material-ui/core"

import {
  Link
} from "react-router-dom"

const LinkTab = (props) => {
  return (
    <Tab
      component="a"
      {...props}
    />
  )
}

const NavBar = () => {
  const [value, setValue] = useState(0)

  const handleChange = (event, newValue) => setValue(newValue)

  return (
      <Tabs value={value} onChange={handleChange} centered>
        <LinkTab label="Recipes" href="/home" />
        <LinkTab label="Lists" href="/lists" />
        <LinkTab label="Ingredients" href="/ingredients" />
      </Tabs>
  )
}

export default NavBar
