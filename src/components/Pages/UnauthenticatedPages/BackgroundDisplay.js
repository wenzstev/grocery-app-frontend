import React from "react"

import {
  Box,
  Container,
  makeStyles
} from "@material-ui/core"

const useStyles = makeStyles({
  root: {
    backgroundImage: props=>props.background ? 'url('+ props.background + ')' : null,
    backgroundColor: props=>props.backgroundColor ? props.backgroundColor : null,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundAttachment: "fixed",
    minHeight:"100vh"
  },
  content: {
    zIndex: 10
  }
})

const BackgroundDisplay = (props) => {
  const classes = useStyles(props)
  return (
    <Box className={classes.root}>
        {props.children}
    </Box>
  )
}

export default BackgroundDisplay
