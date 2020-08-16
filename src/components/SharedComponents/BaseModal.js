import React from "react"
import ReactDOM from "react-dom"

import {
  Modal,
  Paper,
  makeStyles,
  createStyles
} from "@material-ui/core"

const useStyles = makeStyles((theme:Theme)=>createStyles({
  modal: {
    position: "relative",
    width: "95vw",
    top: "30vh",
    margin: "auto",
    "&:focus": {
      outline: "none"
    },
  },
    modalPaper: {
      borderRadius: 15,
      padding: "7px 14px",
      backgroundColor: theme.palette.secondary.main
    }
}))

const BaseModal = (props) =>{
  const classes = useStyles(props)


  const modal = (
    <Modal open={props.open} className={classes.modal}>
      <Paper className={classes.modalPaper}>
      {props.children}
      </Paper>
    </Modal>
  )

  return modal
}

export default BaseModal
