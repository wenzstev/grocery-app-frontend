import React from "react"
import {useState} from "react"

import {
  Button,
  Menu,
  MenuItem,
  Divider,
  makeStyles
} from "@material-ui/core"

import NestedMenuItem from "material-ui-nested-menu-item"

import {useCookies} from "react-cookie"

import {useDispatch} from 'react-redux'
import {setToken, setUser} from '../../actions/'

import AddRecipeModal from "../Pages/MainTemplatePage/AddRecipeModal"
import AddListModal from "../Pages/MainTemplatePage/AddListModal"
import BaseModal from "./BaseModal"


const useStyles = makeStyles({
  root: {
    borderRadius: "15px"
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

  const logout = () => {
    fetch('/users/logout')
    .then(response=>{
      if (response.status === 204){
        dispatch(setToken(null))
        dispatch(setUser(null))
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
          <NestedMenuItem
            label="New"
            parentMenuOpen={!!anchorEl}>
            <MenuItem onClick={()=>props.openModal(<AddRecipeModal />)}>Recipe</MenuItem>
            <MenuItem onClick={()=>props.openModal(<AddListModal />)}>List</MenuItem>
          </NestedMenuItem>
          <Divider variant="middle" />
          <MenuItem>Settings</MenuItem>
          <MenuItem onClick={logout}>Log Out</MenuItem>
      </Menu>
    </div>
  )
}

export default NavMenu
