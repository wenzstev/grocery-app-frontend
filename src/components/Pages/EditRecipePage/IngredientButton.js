import React from "react"

import {
  Box,
  ButtonBase
} from "@material-ui/core"

const IngredientButton = (props) => {

  return (
    <Box m={1}>
      <ButtonBase style={props.ingredient ? {color:"red"} : null}>
        {props.text}
      </ButtonBase>
    </Box>
  )
}

export default IngredientButton
