import React from "react"
import {useState} from "react"

import {
  Button,
  Menu,
  MenuItem,
  makeStyles
} from "@material-ui/core"

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
          <MenuItem>New</MenuItem>
          <MenuItem>Settings</MenuItem>
      </Menu>
    </div>
  )
}

export default NavMenu
