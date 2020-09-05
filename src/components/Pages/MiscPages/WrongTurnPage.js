import React from "react"

import {useHistory, withRouter} from "react-router-dom"

import MainTemplatePage from "../MainTemplatePage"
import ButtonTemplate from "../../Templates/ButtonTemplate"
import WrongTurnNavOptions from "../../SharedComponents/WrongTurnNavOptions"
import BasicInfoPage from "./BasicInfoPage"

import {
  Box,
  Paper,
  Typography,
  Divider,
  Grid,
  makeStyles
} from "@material-ui/core"

const useStyles = makeStyles({
  root: {
    borderRadius: "15px",
    position: "relative",
    top: "10vh",
    padding: "20px"
  }
})

const WrongTurnPage = (props) => {
  const classes = useStyles()
  const history = useHistory()
  return (
    <BasicInfoPage>
        {props.children}
        <WrongTurnNavOptions />
    </BasicInfoPage>
  )
}

export default WrongTurnPage
