import React from "react"
import {useState} from "react"

import {
  Button,
  Menu,
  MenuItem,
  Divider,
  makeStyles
} from "@material-ui/core"

import {useCookies} from "react-cookie"


const useStyles = makeStyles({
  root: {
    borderRadius: "15px"
  }
})

const NavMenu = (props) => {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = useState(null)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const logout = () => {
    fetch('/users/logout')
    .then(response=>{
      if (response.status === 204){
        props.setToken(null)
      }
    })
    .catch(err=>console.log(err))
  }


  return (
    <div>
      <Button
        className={classes.root}
        aria-controls="nav-menu"
        aria-haspopup="true"
        onClick={handleClick}>
          {props.buttonLabel}
      </Button>
      <Menu
        id="nav-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        >
          <MenuItem>New...</MenuItem>
          <Divider variant="middle" />
          <MenuItem>Settings</MenuItem>
          <MenuItem onClick={logout}>Log Out</MenuItem>
      </Menu>
    </div>
  )
}

export default NavMenu
