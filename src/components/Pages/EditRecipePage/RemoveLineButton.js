import React from "react"
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle'

import {
  ButtonBase,
  Box,
  makeStyles
} from "@material-ui/core"

const useStyles = makeStyles({
  root: {
    marginLeft:"40px",
    borderRadius: "100%"
  }
})

const RemoveLineButton = (props) => {
  const classes = useStyles()



  return (
    <Box className={classes.root}>
      <ButtonBase
        style={{borderRadius:"100%"}}
        onClick={props.removeLine}>
        <RemoveCircleIcon/>
      </ButtonBase>
    </Box>
  )
}

export default RemoveLineButton
