import React, {useState} from "react"

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
import AddListModal from "./AddListModal"
import AddRecipeModal from "./AddRecipeModal"
import BaseModal from "../../SharedComponents/BaseModal"

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
  }
}))

const MainTemplatePage = (props) => {
  const classes = useStyles()
  const [modal, setModal] = useState(null)
  const [modalOpen, setModalOpen] = useState(false)


  const openModal = (modal) => {
    console.log("opening modal")
    console.log(modal)
    setModalOpen(true)
    setModal(modal)
  }

  const closeModal = () => {
    setModalOpen(false)
    setModal(null)
  }

  const childrenWithProps = React.Children.map(props.children, child =>{
    const props = {openModal}
    if (React.isValidElement(child)){
      return React.cloneElement(child, props)
    }
    return child
  })

  return (
    <div className={classes.root}>
      {props.noSearchbar ? null : <SearchBar openModal={openModal}/>}
      <Container>
          {childrenWithProps}
      </Container>
      <BaseModal className={classes.modal} open={modalOpen} handleClose={closeModal}>
        {modal}
      </BaseModal>
    </div>
  )
}

export default MainTemplatePage
