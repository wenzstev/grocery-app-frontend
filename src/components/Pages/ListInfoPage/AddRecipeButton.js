import React from "react"
import ButtonTemplate from "../../Templates/ButtonTemplate"
import ArrowBackIcon from "@material-ui/icons/ArrowBack"

import {useTheme} from "@material-ui/core/styles"

const AddRecipeButton = () => {
  const theme = useTheme()
  return (
    <ButtonTemplate color="primary">
      <ArrowBackIcon style={{paddingRight: "10px"}}/>
      Add Recipe
    </ButtonTemplate>
  )
}

export default AddRecipeButton
