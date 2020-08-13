import React, {useState} from "react"


import ColorButton from "./ColorButton"
import AddColorButton from "./AddColorButton"


const ColorPicker = (props) => {

  const buttonPanel = []

  const incrementButtons = () =>{
    props.setNumButtons(state=>state + 1)
  }

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

  buttonPanel.push(<AddColorButton incrementButtons={incrementButtons}/>)

  return (
    <div>
      {buttonPanel}
    </div>
  )
}

export default ColorPicker
