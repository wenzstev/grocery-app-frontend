import React, {useState} from "react"

import {useSelector} from "react-redux"

import {
  ListItem,
  makeStyles
} from "@material-ui/core"

import IngredientButton from "./IngredientButton"

const useStyles = makeStyles({
  root: {
    color: "white",
  }
})

const RecipeLine = (props) => {
  console.log(props.line)
  const classes = useStyles()
  const token = useSelector(store=>store.token)
  const {ingredients, text} = props.line




  const mapTextToIngredients = (arrayLength, ingredientArray) => {
    const emptyArray = new Array(arrayLength)
    if (ingredientArray.length == 0) {return emptyArray}
    var curIngredient = 0
    for (var i = 0; i < arrayLength; i++){
      const [tokenStart, tokenEnd] = ingredients[curIngredient].relevant_tokens
      if (i >= tokenStart && i < tokenEnd){
        emptyArray[i] = curIngredient
      } else if (i == tokenEnd) {
        curIngredient ++
      }
      curIngredient = 0
    }
    return emptyArray
  }

  const setNewIngredientTokens = (buttonId) => {
    console.log("Creating new ingredient with color " + props.curColor + " on id " + buttonId)
    if (ingredients[props.curColor] != null){
      var ingredientToChange = ingredients[props.curColor]
      var [start, end] = ingredientToChange.relevant_tokens
//      end = end-1 //subtract one becuase end is exclusive in spaCy
      console.log(`relevant tokens are ${start} and ${end}.`)
      if (buttonId < start){
        start = buttonId
      } else if (buttonId >= end){
        end = buttonId + 1 // add one because end is exclusive in spaCy
      } else {
        // inside ingredient
        let disFromStart = buttonId - start
        let disFromEnd = end - buttonId - 1 // subtract one because end is exclusive
        console.log(`distance from start: ${disFromStart} and end: ${disFromEnd}`)
        if(disFromStart > disFromEnd){
          end = buttonId
        } else {
          start = buttonId + 1
        }
      }
      console.log(`new ingredient is [${start},${end}]`)
      if (start === end){
        // delete ingredient
        console.log("delete ingredient/line association")
      } else {
        // get other ingredients in line
        ingredients.splice(props.curColor, 1)
        const oldTextToIngredientArray = mapTextToIngredients(text.length, ingredients)
        // overlay new ingredient on old array
        const newTextToIngredientArray = new Array(oldTextToIngredientArray.length)
        for (var i = 0; i < newTextToIngredientArray.length; i++){
          if(i >= start && i < end){
            newTextToIngredientArray[i] = props.curColor
          }
        }
        console.log(oldTextToIngredientArray)
        console.log(newTextToIngredientArray)
        const body = {
          "new_ingredients": newTextToIngredientArray
        }
        const headers = new Headers()
        headers.append('Authorization', 'Basic ' + btoa(token + ":"))
        headers.append('Content-Type', 'application/json')
        fetch(`/lines/${props.line.id}/ingredients`,{
          method:"PUT",
          body: JSON.stringify(body),
          headers: headers
        })
      }

    }
  }
  console.log(ingredients)
  const textToIngredientArray = mapTextToIngredients(text.length, ingredients)
  console.log(textToIngredientArray)


  return (
    <ListItem className={classes.root}>
      {text.map((word, index)=>(
        <IngredientButton
          index={index}
          key={index}
          color={props.colors[textToIngredientArray[index]]}
          clickHandler={()=>{setNewIngredientTokens(index)}}
          >{word}</IngredientButton>
      ))}
    </ListItem>
  )
}

export default RecipeLine
