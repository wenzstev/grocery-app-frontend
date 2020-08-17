import React, {useState, useEffect} from "react"
import {useSelector} from "react-redux"

import {
  Container,
  Box,
  Grid
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
    <Grid container>
      <CreateNewCard type="List" clickHandler={()=>props.openModal(<AddListModal />)}/>
      {lists ? lists.map((value, index) => <ListCard key={index} list={value} />) : null}
    </Grid>
  )
}

export default ListPage
