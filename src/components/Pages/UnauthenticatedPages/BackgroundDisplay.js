import React, {useState, useEffect} from "react"

import {
  Box,
  Container,
  Fade,
  makeStyles
} from "@material-ui/core"

import Image from "material-ui-image"

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
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    backgroundColor: props=>props.backgroundColor,
  },
  image: {
    height: "100vh",
    overflow: "hidden",
  }
})

const BackgroundDisplay = (props) => {
  const [loaded, setLoaded] = useState(false)
  const classes = useStyles(props)

  useEffect(()=>{
    if(props.background == null){
      setLoaded(true)
    }
  }, [])

  return (
    <>
    <Image
      style={{
        overflow: "hidden",
        minHeight: "100vh",
        paddingTop: "none",
      }}
      imageStyle={{
        height: "auto",
        minHeight: "100vh",
        maxWidth: "100vw",
        minWidth: 1200,
        position: "fixed",
      }}
      src={props.background} />
    <Box className={classes.content}>
      {props.children}
    </Box>
    {loaded ? null : <img src={props.background} onLoad={()=>setLoaded(true)}/>}
    </>

  )
}

export default BackgroundDisplay
