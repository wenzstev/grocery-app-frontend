import React, {useState} from "react"
import AddCircleIcon from "@material-ui/icons/AddCircle"
import CheckCircleIcon from "@material-ui/icons/CheckCircle"
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle"

import {
  Box,
  ButtonBase,
  Input
} from "@material-ui/core"

import {
  useParams
} from "react-router-dom"

import axios from "../../../AxiosConfig"

const AddIngredientButton = (props) => {
  const [inputOpen, setInputOpen] = useState(false)
  const [newIngredient, setNewIngredient] = useState("")


  console.log(newIngredient)
  return (
    <div>
      {inputOpen ?
        <OpenAddIngredient
          newIngredient={newIngredient}
          setInputOpen={setInputOpen}
          setNewIngredient={setNewIngredient} />
        : <ClosedAddIngredient
          setInputOpen={setInputOpen}/>}
    </div>
  )
}

const ClosedAddIngredient = (props) => {

  return (
    <ButtonBase onClick={()=>props.setInputOpen(true)}>
      <AddCircleIcon />
    </ButtonBase>
  )
}

const OpenAddIngredient = (props) => {
  const {listId} = useParams()
  const checkIfAdditionalIngredientsRecipe = () => {
    axios.get(`/lists/${props.listId}/additionalingredients`)
    .then((response)=>{

    })
    .catch((err)=>{
      if(err.response){
        if(err.response.status == 404){
          console.log("no additional ingredients found")
          return axios.post(`/recipes`,{
            name: "Additional Ingredients",
          })
        } else {
          throw new Error("Server returned with error: " + err.response.status)
        }
      }
    })
    .then((response)=>{
      if(response.status == 201){
        return axios.post(`/list-recipe-associatons`,{
          recipe_id: response.body.recipe.id,
          grocerylist_id: listId
        })
      }
    })
    .then((response)=>{
      if(response.status == 201){
        return axios.post(`/lines`,{
          recipe_id: response.body.recipe.id,
          text: "test text",
          ingredients: []
        })
      }
    })
    .then((response)=>{
      if(response.status = 201){
        return axios.put(`/lines/${response.body.line.id}/ingredients`,{
          new_ingredients:[
            
          ]
        })
      }
    })
  }

  return (
    <Box>
      <Input value={props.newIngredient} onChange={(e)=>props.setNewIngredient(e.target.value)}/>
      <ButtonBase onClick={checkIfAdditionalIngredientsRecipe}><CheckCircleIcon /></ButtonBase>
      <ButtonBase onClick={()=>props.setInputOpen(false)}><RemoveCircleIcon /></ButtonBase>
    </Box>
  )
}

export default AddIngredientButton
