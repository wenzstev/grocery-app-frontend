import React from "react"
import copyIcon from "../../../assets/copy-icon.png"
import listIcon from "../../../assets/list-icon.png"
import shareIcon from "../../../assets/share-icon.png"



import {ButtonBase, makeStyles} from "@material-ui/core"

import AddCircleIcon from "@material-ui/icons/AddCircle"


const useStyles = makeStyles({
  root: {
    borderRadius: "100%"
  }
})

export const CopyButton = () => {
  const classes = useStyles()
  return (
    <ButtonBase className={classes.root}>
      <img src={copyIcon} height={30} />
    </ButtonBase>
  )
}

export const ListButton = () => {
  const classes = useStyles()

  return (
    <ButtonBase className={classes.root}>
      <img src={listIcon} height={30} />
    </ButtonBase>
  )
}

export const ShareButton = () => {
  const classes = useStyles()

  return (
    <ButtonBase className={classes.root}>
      <img src={shareIcon} height={30} />
    </ButtonBase>
  )
}

export const PlusButton = () => {
  const classes = useStyles()
  return (
    <ButtonBase className={classes.root}>
      <AddCircleIcon style={{color: "white"}}/>
    </ButtonBase>
  )
}
