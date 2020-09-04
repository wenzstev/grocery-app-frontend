import React from "react"
import {useState, useEffect} from "react"
import {Redirect} from "react-router-dom"

import {TopSquiggle} from "../../Backgrounds/Squiggles"
import IngredientPanel from "./IngredientPanel"
import ListModificationPanel from "./ListModificationPanel"
import AddRecipeButton from "./AddRecipeButton"
import ListInfoButton from "./ListInfoButton"
import QuickRecipeAdd from "./QuickRecipeAdd"
import RecipePanel from "./RecipePanel"
import MainTemplatePage from "../MainTemplatePage"

import EditableTitle from "../../SharedComponents/EditableTitle"

import woodBackground from "../../../assets/wood-background.jpg"

import axios from "../../../AxiosConfig"

import {
  Container,
  Box,
  Grid,
  makeStyles
} from "@material-ui/core"

import {
  Router,
  useRouteMatch,
  useParams
} from "react-router-dom"



const ListPage = (props) => {
  const [listItems, setListItems] = useState([])
  const [listName, setListName] = useState("")
  const [listExists, setListExists] = useState(true)
  const [associations, setAssociations] = useState([])

  const [drawerOpen, setDrawerOpen] = useState(false)

  const {resourceId} = useParams()

  const old_getListInfo = () => {
    axios.get(`/lists/${resourceId}`)
    .then(res=>setListName(res.data.name))
  }

  const getIngredients = () => {
    axios.get(`/ingredients?list=${resourceId}`)
    .then(res=>{
      setListItems(res.data)
    })
  }

  const getListInfo = async() => {
    try {
      var listInfo = await axios.get(`/lists/${resourceId}`)
    }
    catch(e) {
      if (e.response.status == 404){
        setListExists(false)
        return
      } else {
        console.log(e)
      }
    }
  }

  useEffect(()=>{
    getIngredients()
    getListInfo()
  },[])

  return (
    <MainTemplatePage noSearchbar>
      {listExists ? (
        <>
        <EditableTitle type="list" />
        <Container>
          <Grid container>
              <RecipePanel
                drawerOpen={drawerOpen}
                getIngredients={getIngredients}/>
            <Grid item xs={12} md={6}>
              <IngredientPanel
                listItems={listItems.map(item=>item.name)}
                getIngredients={getIngredients}
                />
            </Grid>
          </Grid>
          <Box my={3}>
            <AddRecipeButton clickHandler={()=>setDrawerOpen(true)}/>
          </Box>
        </Container>
        <QuickRecipeAdd
          open={drawerOpen}
          listId={resourceId}
          onClose={()=>setDrawerOpen(false)}
          getIngredients={getIngredients}
          />
        </>
    ) : <Redirect to="/pagenotfound" />}
  </MainTemplatePage>
  )
}

export default ListPage
