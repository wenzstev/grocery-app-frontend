import React, {useState} from "react"

import {useSelector} from "react-redux"

import {
  ListItem,
  Grid,
  makeStyles
} from "@material-ui/core"

import IngredientButton from "./IngredientButton"
import RemoveLineButton from "./RemoveLineButton"

import axios from "../../../AxiosConfig"

const useStyles = makeStyles({
  root: {
    color: "white",
    width: "100%"
  },
  rightFloat:{
    float: "right"
  }
})

const RecipeLine = (props) => {
  const classes = useStyles()
  const token = useSelector(store=>store.token)
  const {ingredients, text} = props.line

  const [hovering, setHovering] = useState(false)

  const deleteLine = async() => {
    try {
      var deleteResponse = await axios.delete(`/lines/${props.line.id}`)
    } catch(e) {
      console.log(e)
    }
    if (deleteResponse.status === 204){
      props.removeLineFromDOM(props.line.id)
    }
  }



  // function which takes an array of ingredients with start and end tokens
  // and returns an array noting the annotation status of each word in the line
  const mapTextToIngredients = (arrayLength, ingredientArray) => {
    var mappedArray = new Array(arrayLength)
    if (ingredientArray.length < 1){return mappedArray} // return if no ingredients

    // iterate over ingredient array for first pass
    for(var i = 0; i < ingredientArray.length; i++){
      let cur_ingredient = ingredientArray[i]
      let [start, end] = cur_ingredient.relevant_tokens
      let color_index = cur_ingredient.color_index
      if (end - start == 1){ // single word ingredient
        mappedArray[start] = [color_index, "single"]
      } else {
        mappedArray[start] = [color_index, "start"]
        mappedArray[end-1] = [color_index, "end"]
      }
    }

    // iterate over created array and fill in the blanks
    var cur_ingredient = null
    for (var i = 0; i < mappedArray.length; i++){
      if (mappedArray[i] != null){ // see if we're going to start a new ingredient
        switch(mappedArray[i][1]){
          case "start":
            cur_ingredient = mappedArray[i][0]
            break
          case "end":
          case "single":
            cur_ingredient = null
        }
      } else if (cur_ingredient != null){ // we are inside an ingredient
        mappedArray[i] = [cur_ingredient, "inside"]
      }
    }

    return mappedArray
  }

  // function which creates the new ingredient tokens after a button is clicked
  const setNewIngredientTokens = (buttonId) => {
    let [ingredientToModify] = ingredients.filter(element=>element.color_index == props.curColor)
    if (ingredientToModify != undefined){
      var [start, end] = modifyStartEndTokens(ingredientToModify, buttonId)
    } else {
      // creating new ingredinet
        var start = buttonId
        var end = buttonId + 1
    }
      // get other ingredients in line
      const newTextToIngredientArray = spliceNewIngredient(start, end)
      axios.put(`/lines/${props.line.id}/ingredients`, {
        "new_ingredients":newTextToIngredientArray
      })
      .then(resp=>props.changeLine(resp.data))
  }

  const modifyStartEndTokens = (ingredientToChange, buttonId) => {
    let [start, end] = ingredientToChange.relevant_tokens
    if (buttonId < start){
      start = buttonId
    } else if (buttonId >= end){
      end = buttonId + 1 // add one because end is exclusive in spaCy
    } else {
      // inside ingredient
      let disFromStart = buttonId - start
      let disFromEnd = end - buttonId - 1 // subtract one because end is exclusive
      if(disFromStart > disFromEnd){
        end = buttonId
      } else {
        start = buttonId + 1
      }
    }

    return [start, end]

  }

  const spliceNewIngredient = (start, end) => {

    const lineWithoutChangedIng = ingredients.filter(element=>element.color_index != props.curColor)
    const oldTextToIngredientArray = mapTextToIngredients(text.length, lineWithoutChangedIng)

    // overlay new ingredient on old array
    const newTextToIngredientArray = oldTextToIngredientArray.map(element=>{
      if (element !== undefined) {return element[0]}
      else {return undefined}
    })

    if(start != end) {
      for (var i = 0; i < newTextToIngredientArray.length; i++){
        if(i >= start && i < end){
          newTextToIngredientArray[i] = props.curColor
        }
      }
    }

    return newTextToIngredientArray
  }

  const textToIngredientArray = mapTextToIngredients(text.length, ingredients)


  return (
    <ListItem className={classes.root} onMouseEnter={()=>setHovering(true)} onMouseLeave={()=>setHovering(false)}>
      {text.map((word, index)=>{
        return(
          <IngredientButton
            index={index}
            key={index}
            mappings={textToIngredientArray[index]}
            colors={props.colors}
            clickHandler={()=>{setNewIngredientTokens(index)}}
            >
            {word}
          </IngredientButton>
        )}
      )}
      {hovering ? <RemoveLineButton removeLine={deleteLine}/> : null}
    </ListItem>
  )
}

export default RecipeLine
