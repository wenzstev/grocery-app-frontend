import React from "react"
import {TopSquiggle} from "../Backgrounds/Squiggles"
import ListPanel from "../UI/ListPanel"

import {
  Container,
  makeStyles
} from "@material-ui/core"

const useStyles = makeStyles({
  root: {
  }
})

const ListPage = (props) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <TopSquiggle />
      <Container>
        <ListPanel />
      </Container>
    </div>
  )
}

export default ListPage
