import React from "react"
import ButtonTemplate from "./ButtonTemplate"
import altArrowIcon from "../../assets/alt-arrow.png"


const AddRecipeButton = () => {
  return (
    <ButtonTemplate>
      <img src={altArrowIcon} height={30} />
      Add Recipe
    </ButtonTemplate>
  )
}

export default AddRecipeButton
