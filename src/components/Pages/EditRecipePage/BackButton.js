import React from "react"

import ArrowBackIcon from "@material-ui/icons/ArrowBack"

import {useHistory} from "react-router-dom"

import {
  ButtonBase,
  makeStyles
} from "@material-ui/core"

const useStyles = makeStyles({
  root: {
    marginRight: "20px"
  }
})

const BackButton = () => {
  const classes = useStyles()
  const history = useHistory()
  return (
    <ButtonBase
      onClick={()=>history.goBack()}
      className={classes.root}
      disableRipple>
      <ArrowBackIcon fontSize="large"/>
    </ButtonBase>
  )
}

export default BackButton
