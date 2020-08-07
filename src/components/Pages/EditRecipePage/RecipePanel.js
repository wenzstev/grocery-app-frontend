import React from "react"


import {
  Box,
  List,
  makeStyles
} from "@material-ui/core"

import RecipeLine from "./RecipeLine"

const useStyles = makeStyles({
  root: {
    borderRadius: 15,
    backgroundColor: "rgba(0,0,0,.5)",
    width: "100%",
    margin: "auto",
    position: "relative",
    top: "20vh"
  }
})

const RecipePanel = (props) => {
  const classes = useStyles()

  console.log(props.lines)

  return (
    <Box className={classes.root}>
      <List>
        {props.lines ?
          props.lines.map((line, index)=><RecipeLine key={index} line={line} />)
          : null}
      </List>
    </Box>
  )
}

export default RecipePanel
