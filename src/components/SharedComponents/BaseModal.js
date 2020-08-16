import React, {useState} from "react"
import ReactDOM from "react-dom"

import {
  Modal,
  Paper,
  makeStyles,
  createStyles
} from "@material-ui/core"

const useStyles = makeStyles((theme:Theme)=>createStyles({
    modalPaper: {
      borderRadius: 15,
      padding: "7px 14px",
      backgroundColor: theme.palette.secondary.main,
      outline: "0"
    }
}))

const modalStyles = {
  position: "fixed",
  width: "95vw",
  top: "30vh",
  margin: "auto"
}

const BaseModal = (props) =>{
  const classes = useStyles(props)
  const [modalStyle] = useState(modalStyles)


  const modal = (
    <Modal style={modalStyle} open={props.open} onClose={props.handleClose}>
      <Paper className={classes.modalPaper}>
      {props.children}
      </Paper>
    </Modal>
  )

  return ReactDOM.createPortal(modal, document.querySelector("#modal"))
}

export default BaseModal
