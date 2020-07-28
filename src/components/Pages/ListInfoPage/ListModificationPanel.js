import React from "react"
import {Box} from "@material-ui/core"

import {
  ShareButton,
  CopyButton,
  ListButton
} from "./ListModificationButtons"



const ListModificationPanel = () => {
  return (
    <Box m={1}>
      <Box m={1} display="inline">
        <CopyButton />
      </Box>
      <Box m={1} display="inline">
        <ListButton />
      </Box>
      <Box m={1} display="inline">
        <ShareButton />
      </Box>
    </Box>
  )
}

export default ListModificationPanel
