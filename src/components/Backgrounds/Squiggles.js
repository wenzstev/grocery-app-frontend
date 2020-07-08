import React from "react"
import topSquiggle from "../../assets/top squiggle.svg"
import bottomSquiggle from "../../assets/bottom squiggle.svg"

import {makeStyles} from "@material-ui/core"

const useStyles = makeStyles({
  root: {
    fill: "#2B2B33"
  }
})

export const TopSquiggle = () => {
  const classes = useStyles()
  return(
    <img src={topSquiggle} className={classes.root}/>
  )
}


export const BottomSquiggle = () => {
  return (
    <img src={bottomSquiggle} />
  )
}
