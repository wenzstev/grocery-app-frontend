import React, {useState} from "react"

import ColorButton from "./ColorButton"



const ColorPicker = (props) => {

  const buttonPanel = []

  for(var i = 0; i < props.numButtons; i++){
    buttonPanel.push(
      <ColorButton
      key={i}
      colorNum={i}
      color={props.colors[i]}
      selected={props.curColor === i ? true : false}
      setCurColor = {props.setCurColor}
      />
    )
  }

  return (
    <div>
      {buttonPanel}
    </div>
  )
}

export default ColorPicker
