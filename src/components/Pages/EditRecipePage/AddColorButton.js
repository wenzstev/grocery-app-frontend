import React from "react"
import AddCircleIcon from "@material-ui/icons/AddCircle"

import {
  ButtonBase,
  makeStyles
} from "@material-ui/core"

const useStyles = makeStyles({
  root:{
    borderRadius: "100%"
  }
})

const AddColorButton = (props) => {
  const classes = useStyles()
  return(
    <ButtonBase
      className={classes.root}
      onClick={props.incrementButtons}
      >
      <AddCircleIcon fontSize="large" color="secondary"/>
    </ButtonBase>
  )
}

export default AddColorButton
