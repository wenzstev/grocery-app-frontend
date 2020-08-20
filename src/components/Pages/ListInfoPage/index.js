import React from "react"
import {useState, useEffect} from "react"
import {TopSquiggle} from "../../Backgrounds/Squiggles"
import ListPanel from "./ListPanel"
import ListModificationPanel from "./ListModificationPanel"
import AddRecipeButton from "./AddRecipeButton"
import ListInfoButton from "./ListInfoButton"
import QuickRecipeAdd from "./QuickRecipeAdd"

import woodBackground from "../../../assets/wood-background.jpg"

import axios from "../../../AxiosConfig"

import {
  Container,
  Box,
  makeStyles
} from "@material-ui/core"

import {
  Router,
  useRouteMatch,
  useParams
} from "react-router-dom"

const useStyles = makeStyles({
  root: {
    backgroundImage: 'url('+ woodBackground + ')',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundColor: "#a8d4ff",
    backgroundBlendMode: "multiply",
    height: "100vh",
    width: "100vw",
  },
  rightFloat: {
    float: "right"
  }
})



const ListPage = (props) => {
  const[listItems, setListItems] = useState([])
  const[listName, setListName] = useState("")
  const[associations, setAssociations] = useState([])

  const [drawerOpen, setDrawerOpen] = useState(false)

  const {listId} = useParams()
  const classes = useStyles()

  const getListInfo = () => {
    axios.get(`/lists/${listId}`)
    .then(res=>setListName(res.data.name))
  }

  const getIngredients = () => {
    console.log("in getIngredients")
    axios.get(`/ingredients?list=${listId}`)
    .then(res=>setListItems(res.data))
  }



  useEffect(()=>{
    getIngredients()
    getListInfo()
  },[])

  return (
    <div className={classes.root}>
      <TopSquiggle>
        {listName}
      </TopSquiggle>
      <Container>
        <ListModificationPanel />
        <ListPanel listItems={listItems.map(item=>item.name)}/>
        <Box my={3}>
          <AddRecipeButton clickHandler={()=>setDrawerOpen(true)}/>
          <Box display="inline-block" className={classes.rightFloat}>
            <ListInfoButton/>
          </Box>
        </Box>
      </Container>
      <QuickRecipeAdd
        open={drawerOpen}
        listId={listId}
        onClose={()=>setDrawerOpen(false)}
        getIngredients={getIngredients}
        />
    </div>
  )
}

export default ListPage
