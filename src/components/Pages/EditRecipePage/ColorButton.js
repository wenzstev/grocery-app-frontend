import React from "react"

import {ReactComponent as Teardrop} from "../../../assets/teardrop.svg"

import {
  ButtonBase,
  makeStyles,
} from "@material-ui/core"

const useStyles = makeStyles({
  root: {
    borderRadius: "100%",
    '& svg': {
      '& g':{
        '& path':{
          fill: props=>props.color
        }
      }
    }
  },
  selected: {
      '& g': {
        '& circle':{
          fill: 'white'
        }
      }
    }
})

const ColorButton = (props) => {
  const classes = useStyles(props)
  return (
    <ButtonBase className = {classes.root} onClick={()=>props.setCurColor(props.colorNum)}>
      <Teardrop className={props.selected ? classes.selected : null}/>
    </ButtonBase>
  )
}

export default ColorButton
