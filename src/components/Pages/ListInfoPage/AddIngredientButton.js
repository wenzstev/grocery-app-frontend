import React, {useState} from "react"
import AddCircleIcon from "@material-ui/icons/AddCircle"
import CheckCircleIcon from "@material-ui/icons/CheckCircle"
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle"

import {
  Box,
  ButtonBase,
  Input
} from "@material-ui/core"

import axios from "../../../AxiosConfig"

const AddIngredientButton = () => {
  const [inputOpen, setInputOpen] = useState(false)
  const [newIngredient, setNewIngredient] = useState("")

  const checkIfAdditionalIngredientsRecipe = () => {

  }

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

  return (
    <Box>
      <Input value={props.newIngredient} onChange={(e)=>props.setNewIngredient(e.target.value)}/>
      <ButtonBase><CheckCircleIcon /></ButtonBase>
      <ButtonBase onClick={()=>props.setInputOpen(false)}><RemoveCircleIcon /></ButtonBase>
    </Box>
  )
}

export default AddIngredientButton
