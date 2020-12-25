import React from "react"
import {useState} from "react"

import {
  Button,
  Menu,
  MenuItem,
  makeStyles
} from "@material-ui/core"

import { withRouter} from "react-router-dom"


import {useDispatch} from 'react-redux'
import {setToken, setUser} from '../../actions/'

import axios from "../../AxiosConfig"

const useStyles = makeStyles({
  root: {
    borderRadius: "15px"
  },
  link: {
    textDecoration:"inherit",
    color: "inherit",
  }
})

const NavMenu = (props) => {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = useState(null)
  const dispatch = useDispatch()

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const logout = async() => {
    var logoutResponse = await axios.get(`/users/logout`)
    dispatch(setToken(null))
    dispatch(setUser(null))
    props.history.push("/")
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
          <MenuItem onClick={logout}>Log Out</MenuItem>
          <MenuItem onClick={()=>props.history.push("/about")}>About</MenuItem>
      </Menu>
    </div>
  )
}

export default withRouter(NavMenu)
