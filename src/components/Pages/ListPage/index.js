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

  const user = useSelector(store=>store.user)

  const getLists = () => {
    fetch(`/lists?user=${user.id}`)
    .then(response=>response.json())
    .then(json=>setLists(json))
  }


  useEffect(()=>getLists(), [])


  return (
    <>
      <CreateNewCard type="List"/>
      {lists ? lists.map((value, index) => <ListCard key={index} list={value} />) : null}
    </>
  )
}

export default ListPage
