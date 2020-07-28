import React from "react"
import ButtonTemplate from "../../Templates/ButtonTemplate"
import ArrowForwardIcon from "@material-ui/icons/ArrowForward"

import {Box} from "@material-ui/core"

const ListInfoButton = () => {
  return (
      <ButtonTemplate color="secondary">
        List Info
        <ArrowForwardIcon style={{paddingLeft: "10px"}}/>
      </ButtonTemplate>
  )
}

export default ListInfoButton
