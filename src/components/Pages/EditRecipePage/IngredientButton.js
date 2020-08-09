import React from "react"

import {
  Box,
  ButtonBase
} from "@material-ui/core"

const IngredientButton = (props) => {

  return (
    <Box m={1}>
      <ButtonBase style={props.color ? {color:props.color} : null}>
        {props.children}
      </ButtonBase>
    </Box>
  )
}

export default IngredientButton
