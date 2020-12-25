import React from "react"
import ButtonTemplate from "../../Templates/ButtonTemplate"
import ArrowBackIcon from "@material-ui/icons/ArrowBack"


const AddRecipeButton = (props) => {
  return (
    <ButtonTemplate color="primary" onClick={props.clickHandler}>
      <ArrowBackIcon style={{paddingRight: "10px"}}/>
      Add Recipe
    </ButtonTemplate>
  )
}

export default AddRecipeButton
