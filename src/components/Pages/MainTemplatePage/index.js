import React, {useState} from "react"

import {
  Container,
  Grid,
  Box,
  Paper,
  Modal,
  Fade,
  makeStyles,
  createStyles
} from "@material-ui/core"

import {withRouter, Redirect} from "react-router-dom"

import woodBackground from "../../../assets/wood-background.jpg"

import SearchBar from "./SearchBar"
import {LoginSquiggle} from "../../Backgrounds/Squiggles"
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
    width: "100%",
    minHeight: "100vh",
    position: "relative",
    top: "0",
    left: "0"
  },
  content: {
    zIndex: 10
  },
  spacer: {
    height: "10vh",
    overflowX: "hidden"
  }
}))

const MainTemplatePage = (props) => {
  const classes = useStyles()
  const [modal, setModal] = useState(null)
  const [loaded, setLoaded] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)


  const openModal = (modal) => {
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
    <>
    {loaded ? (
      <div className={classes.root}>
        {props.noSearchbar ? null : <SearchBar openModal={openModal}/>}
        <Container className={classes.content}>
            {childrenWithProps}
        </Container>
        <BaseModal className={classes.modal} open={modalOpen} handleClose={closeModal}>
          {modal}
        </BaseModal>
        <div className={classes.spacer} />
      </div>
    ) : <img src={woodBackground} onLoad={()=>setLoaded(true)} />
  }
  </>
  )
}

export default MainTemplatePage
