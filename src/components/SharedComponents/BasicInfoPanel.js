import React from "react"

import {
  Paper,
  makeStyles
} from "@material-ui/core"

const useStyles = makeStyles({
  root: {
    borderRadius: "15px",
    position: "relative",
    padding: "20px"
  },
  spacer: {
    height: "10vh"
  }
})

const BasicInfoPanel = (props) => {
  const classes = useStyles()
  return (
    <>
      <div className={classes.spacer} />
      <Paper className={classes.root}>
        {props.children}
      </Paper>
      <div className={classes.spacer} />
    </>
  )
}

export default BasicInfoPanel
