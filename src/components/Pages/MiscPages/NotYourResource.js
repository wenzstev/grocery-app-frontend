import React from "react"

import {
  Typography
} from "@material-ui/core"

import WrongTurnPage from "./WrongTurnPage"

const NotYourResource = (props) => {
  return (
    <WrongTurnPage>
      <Typography>
        Sorry, but this {props.resource} doesn't belong to you. In the future, we
        hope to allow use of recipes and lists created by other users, but this
        is not currently supported.
      </Typography>
    </WrongTurnPage>
  )
}

export default NotYourResource
