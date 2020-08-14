import React from "react"

import {
  Container,
  Grid,
  Box,
  Paper,
  Modal,
  makeStyles,
  createStyles
} from "@material-ui/core"

import {withRouter, Redirect} from "react-router-dom"

import woodBackground from "../../../assets/wood-background.jpg"

import SearchBar from "./SearchBar"

const useStyles = makeStyles((theme:Theme)=>createStyles({
  root: {
    backgroundImage: 'url('+ woodBackground + ')',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundColor: "#a8d4ff",
    backgroundBlendMode: "multiply",
    backgroundAttachment: "fixed",
    height: "100vh",
    width: "100vw",
    position: "fixed",
    top: "0",
    left: "0"
  },
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

const MainTemplatePage = (props) => {
  const classes = useStyles()



  return (
    <div className={classes.root}>
      {props.noSearchbar ? null : <SearchBar openModal={props.openModal}/>}
      <Container>
          {props.children}
      </Container>
      <Modal open={props.modalOpen} onClose={()=>props.setModalOpen(false)}>
        <Box className={classes.modal}>
          <Paper className={classes.modalPaper}>
            {props.modal}
          </Paper>
        </Box>
      </Modal>
    </div>
  )
}

export default MainTemplatePage
