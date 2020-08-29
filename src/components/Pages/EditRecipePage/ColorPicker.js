import React, {useState} from "react"

import {
  Box
} from "@material-ui/core"

import ColorButton from "./ColorButton"
import AddColorButton from "./AddColorButton"


const ColorPicker = (props) => {

  const buttonPanel = []

  const incrementButtons = () =>{
    props.setNumButtons(state=>state + 1)
  }

  for(var i = 0; i < props.colors.length; i++){
    buttonPanel.push(
      <Box m={.5} display="inline-block">
        <ColorButton
        key={i}
        colorNum={i}
        color={props.colors[i]}
        selected={props.curColor === i ? true : false}
        setCurColor = {props.setCurColor}
        />
      </Box>
    )
  }


  return (
    <div>
      {buttonPanel}
    </div>
  )
}

export default ColorPicker
