import React, {useState} from "react"

import {useSelector} from "react-redux"

import {
  ListItem,
  Grid,
  makeStyles
} from "@material-ui/core"

import IngredientButton from "./IngredientButton"
import RemoveLineButton from "./RemoveLineButton"

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
  //console.log(props.line)
  const classes = useStyles()
  const token = useSelector(store=>store.token)
  const {ingredients, text} = props.line

  const [hovering, setHovering] = useState(false)

  const deleteLine = () => {
    const headers = new Headers()
    headers.append('Authorization', 'Basic ' + btoa(token + ":"))

    fetch(`/lines/${props.line.id}`,{
      method: 'DELETE',
      headers: headers
    })
    .then(response=>{
      if(response.status === 204){
        props.removeLineFromDOM(props.line.id)
        console.log("line deleted")
      }
    })
    .catch(err=>console.log(err))
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
      if (end - start == 1){ // single word ingredient
        mappedArray[start] = [i, "single"]
      } else {
        mappedArray[start] = [i, "start"]
        mappedArray[end-1] = [i, "end"]
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

  const setNewIngredientTokens = (buttonId) => {

    if (ingredients[props.curColor] != null){
      var ingredientToChange = ingredients[props.curColor]
      var [start, end] = ingredientToChange.relevant_tokens
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
    } else {
      // creating new ingredinet
        start = buttonId
        end = buttonId + 1
    }
      // get other ingredients in line
      const lineWithoutChangedIng = [...ingredients]
      lineWithoutChangedIng.splice(props.curColor, 1)
      const oldTextToIngredientArray = mapTextToIngredients(text.length, lineWithoutChangedIng)
      // overlay new ingredient on old array
      console.log(lineWithoutChangedIng)
      console.log(oldTextToIngredientArray)
      const newTextToIngredientArray = [...oldTextToIngredientArray]
      if(start != end){
        for (var i = 0; i < newTextToIngredientArray.length; i++){
          if(i >= start && i < end){
            newTextToIngredientArray[i] = props.curColor
          } else if (newTextToIngredientArray[i] !== undefined){
            newTextToIngredientArray[i] = newTextToIngredientArray[i][0] // remove the list and make it just the values
          }
        }
      }

      const body = {
        "new_ingredients": newTextToIngredientArray
      }
      console.log("sending " + JSON.stringify(body))
      const headers = new Headers()
      headers.append('Authorization', 'Basic ' + btoa(token + ":"))
      headers.append('Content-Type', 'application/json')
      fetch(`/lines/${props.line.id}/ingredients`,{
        method:"PUT",
        body: JSON.stringify(body),
        headers: headers
      })
      .then(response=>response.json())
      .then(json=>{
        props.changeLine(json)
      })
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
