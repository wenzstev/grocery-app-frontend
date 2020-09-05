import React from "react"
import {useState, useEffect} from "react"
import {useSelector} from "react-redux"
import {
  Redirect,
  Router,
  useRouteMatch,
  useParams
} from "react-router-dom"

import {TopSquiggle} from "../../Backgrounds/Squiggles"
import IngredientPanel from "./IngredientPanel"
import ListModificationPanel from "./ListModificationPanel"
import AddRecipeButton from "./AddRecipeButton"
import ListInfoButton from "./ListInfoButton"
import QuickRecipeAdd from "./QuickRecipeAdd"
import RecipePanel from "./RecipePanel"
import MainTemplatePage from "../MainTemplatePage"
import NotYourResource from "../MiscPages/NotYourResource"

import EditableTitle from "../../SharedComponents/EditableTitle"

import woodBackground from "../../../assets/wood-background.jpg"

import axios from "../../../AxiosConfig"

import {
  Container,
  Box,
  Grid,
  makeStyles
} from "@material-ui/core"



const ListPage = (props) => {
  const [listItems, setListItems] = useState([])
  const [listExists, setListExists] = useState(true)
  const [hasPermission, setHasPermission] = useState(true)
  const [associations, setAssociations] = useState([])

  const [drawerOpen, setDrawerOpen] = useState(false)

  const {resourceId} = useParams()
  const user = useSelector(store=>store.user)


  const getIngredients = async() => {
    var ingredientResponse = await axios.get(`/ingredients?list=${resourceId}`)
    setListItems(ingredientResponse.data)
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
    if (listInfo.data.creator_id != user.id){
      setHasPermission(false)
    }
  }

  useEffect(()=>{
    getIngredients()
    getListInfo()
  },[])

  return (
    <>
      {listExists ?
        hasPermission ?
        (
        <MainTemplatePage noSearchbar>
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
        </MainTemplatePage>
    ) : <NotYourResource resource="list" />
      : <Redirect to="/pagenotfound" />
  }
  </>
  )
}

export default ListPage
