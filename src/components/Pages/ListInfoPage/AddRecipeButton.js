import React from "react"
import ButtonTemplate from "../../Templates/ButtonTemplate"
import ArrowBackIcon from "@material-ui/icons/ArrowBack"

import {useTheme} from "@material-ui/core/styles"

const AddRecipeButton = (props) => {
  const theme = useTheme()
  return (
    <ButtonTemplate color="primary" onClick={props.clickHandler}>
      <ArrowBackIcon style={{paddingRight: "10px"}}/>
      Add Recipe
    </ButtonTemplate>
  )
}

export default AddRecipeButton
