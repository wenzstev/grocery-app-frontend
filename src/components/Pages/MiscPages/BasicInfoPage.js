import React from "react"

import {
  Box,
  Paper,
  Typography,
  Divider,
  Grid,
  makeStyles
} from "@material-ui/core"

import MainTemplatePage from "../MainTemplatePage"

const useStyles = makeStyles({
  root: {
    borderRadius: "15px",
    position: "relative",
    top: "10vh",
    padding: "20px"
  }
})

const BasicInfoPage = (props) => {
  const classes = useStyles()
  return (
    <MainTemplatePage noSearchbar>
      <Paper className={classes.root}>
        {props.children}
      </Paper>
    </MainTemplatePage>
  )
}

export default BasicInfoPage
