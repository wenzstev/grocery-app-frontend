import React, {useState, useEffect} from "react"
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
          setNewIngredient={setNewIngredient}
          getIngredients={props.getIngredients} />
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
  const [additionalIngredients, setAdditionalIngredients] = useState()
  const {listId} = useParams()

  useEffect(()=>{
    axios.get(`/lists/${listId}/additionalingredients`)
    .then(resp=>{
      console.log(resp)
      setAdditionalIngredients(resp.data)
    })
  },[])

  const addAdditionalIngredient = (ing) => {
    axios.post(`/lines`,{
      text: ing,
      recipe_id: additionalIngredients['id'],
      additional_ingredient: true
    })
    .then(()=>{props.getIngredients()})
    .catch(err=>console.log(err))
  }

  return (
    <Box component="span">
      <Input value={props.newIngredient} onChange={(e)=>props.setNewIngredient(e.target.value)}/>
      <ButtonBase onClick={()=>addAdditionalIngredient(props.newIngredient)}><CheckCircleIcon /></ButtonBase>
      <ButtonBase onClick={()=>props.setInputOpen(false)}><RemoveCircleIcon /></ButtonBase>
    </Box>
  )
}

export default AddIngredientButton
