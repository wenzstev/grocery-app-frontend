import React from "react"

import {Typography} from "@material-ui/core"

import WrongTurnPage from "./WrongTurnPage"



const NotFoundPage = () => {
  return (
    <WrongTurnPage>
      <Typography variant="h1">
        Hmmm...
      </Typography>
      <Typography>
        Looks like the page you're trying to find doesn't exist! Sorry about that.
      </Typography>
    </WrongTurnPage>
  )
}

export default NotFoundPage
