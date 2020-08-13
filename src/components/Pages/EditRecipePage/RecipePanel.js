import React, {useState, useEffect} from "react"


import {
  Box,
  List,
  makeStyles
} from "@material-ui/core"

import RecipeLine from "./RecipeLine"
import ColorPicker from "./ColorPicker"

const useStyles = makeStyles({
  root: {
    top: "20vh",
    position: "relative",
  },
  mainPanel: {
    borderRadius: 15,
    backgroundColor: "rgba(0,0,0,.5)",
    width: "100%",
    margin: "auto",
  }
})

const colors = [
  "teal",
  "orange",
  "green",
  "red",
  "blue"
]

const RecipePanel = (props) => {
  const [curColor, setCurColor] = useState(0)
  const [numButtons, setNumButtons] = useState(1)
  const classes = useStyles()

  const determineMaxIngredientsInLine = (lines) => {
    if (lines === undefined) {return}
    var maxNum = 0
    for(var i = 0; i < lines.length; i++){
      const numIngredients = props.lines[i].ingredients.length
      if (numIngredients > maxNum){
        maxNum = numIngredients
      }
    }
    console.log("max num is " + maxNum)
    setNumButtons(maxNum)
  }

  useEffect(()=>{
    determineMaxIngredientsInLine(props.lines)
  },[props.lines])


  return (
    <Box className={classes.root}>
      <ColorPicker
        numButtons={numButtons}
        setNumButtons={setNumButtons}
        colors={colors}
        curColor={curColor}
        setCurColor={setCurColor}
        />
      <Box className={classes.mainPanel}>
        <List>
          {props.lines ?
            props.lines.map((line, index)=>(
              <RecipeLine
                key={index}
                line={line}
                curColor={curColor}
                colors={colors}
                changeLine = {(newJSON)=>props.changeLine(index, newJSON)}
                removeLineFromDOM={()=>props.removeLineFromDOM(index)}
                />
            )) : null}
        </List>
      </Box>
    </Box>

  )
}

export default RecipePanel
