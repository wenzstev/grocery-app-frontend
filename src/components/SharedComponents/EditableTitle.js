import React, {useState, useEffect} from "react"
import {useParams} from "react-router-dom"

import {TopSquiggle} from "../Backgrounds/Squiggles"
import BackButton from "./BackButton"

import {
  InputBase,
  Grid,
  makeStyles,
} from "@material-ui/core"

import axios from "../../AxiosConfig"

const useStyles = makeStyles({
  title: {
    color: "inherit",
    fontSize: "inherit",
    fontFamily: "inherit",
    fontWeight: "inherit",
    width: "100%"
    }
})

const EditableTitle = (props) => {
  const [title, setTitle] = useState()
  const {resourceId} = useParams()
  const classes = useStyles()

  useEffect(()=>{
    axios.get(`/${props.type}s/${resourceId}`)
    .then(resp=>setTitle(resp.data.name))
  }, [])

  const postNewTitle = () =>{
    axios.put(`/${props.type}s/${resourceId}`,{
      name: title
    })
    .then(resp=>console.log(resp.data))
  }

  const keyPressed = (e) => {
    if(e.key === "Enter"){
      e.preventDefault()
      postNewTitle()
      e.target.blur()
    }
  }


  return (
    <TopSquiggle>
      <Grid container>
        <Grid item xs={"auto"}>
          <BackButton />
        </Grid>
        <Grid item xs={10}>
          <InputBase
            className={classes.title}
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
            onBlur={postNewTitle}
            onKeyPress={(e)=>{keyPressed(e)}}
            multiline/>
        </Grid>
      </Grid>
    </TopSquiggle>
  )
}

export default EditableTitle
