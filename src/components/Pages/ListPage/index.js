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

import axios from "../../../AxiosConfig"

const ListPage = (props) => {
  const [lists, setLists] = useState([])

  const user = useSelector(store=>store.user)

  const old_getLists = () => {
    fetch(`/lists?user=${user.id}`)
    .then(response=>response.json())
    .then(json=>setLists(json))
  }

  useEffect(()=>{
    const getLists = async() => {
      var listResponse = await axios.get(`/lists?user=${user.id}`)
      setLists(listResponse.data)
    }
    getLists()
  }, [])


  return (
    <Grid container>
      <CreateNewCard type="List" clickHandler={()=>props.openModal(<AddListModal />)}/>
      {lists ? lists.map((value, index) => <ListCard key={index} list={value} />) : null}
    </Grid>
  )
}

export default ListPage
