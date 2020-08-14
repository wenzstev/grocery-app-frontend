import React, {useState, useEffect} from "react"
import {useSelector} from "react-redux"

import {
  Container,
  Box
} from "@material-ui/core"

import MainTemplatePage from "../MainTemplatePage/"
import {ListCard} from "../../SharedComponents/BaseCard"
import CreateNewCard from "../../SharedComponents/CreateNewCard"
import AddListModal from "../MainTemplatePage/AddListModal"

const ListPage = (props) => {
  const [lists, setLists] = useState([])
  const [modal, setModal] = useState(null)
  const [modalOpen, setModalOpen] = useState(false)
  const user = useSelector(store=>store.user)

  const getLists = () => {
    fetch(`/lists?user=${user.id}`)
    .then(response=>response.json())
    .then(json=>setLists(json))
  }

  const openModal = (modal) => {
    console.log("opening modal")
    console.log(modal)
    setModalOpen(true)
    setModal(<AddListModal />)
  }
  useEffect(()=>getLists(), [])

  console.log(modalOpen)
  console.log(modal)

  return (
    <MainTemplatePage openModal={openModal}>
      <CreateNewCard type="List" onClick={()=>openModal(<AddListModal />)}/>
      {lists ? lists.map((value, index) => <ListCard key={index} list={value} />) : null}
    </MainTemplatePage>
  )
}

export default ListPage
