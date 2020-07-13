import React from "react"
import ButtonTemplate from "./ButtonTemplate"
import ArrowBackIcon from "@material-ui/icons/ArrowBack"


const AddRecipeButton = () => {
  return (
    <ButtonTemplate>
      <ArrowBackIcon style={{paddingRight: "10px"}}/>
      Add Recipe
    </ButtonTemplate>
  )
}

export default AddRecipeButton
