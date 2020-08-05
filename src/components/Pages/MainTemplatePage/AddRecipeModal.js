import React from "react"

import {
  Paper,
  Box,
  makeStyles,
  createStyles
} from "@material-ui/core"

import {useSelector} from "react-redux"

import {Formik, Form} from "formik"
import * as Yup from "yup"
import {FormikTextField} from "../../Templates/FormikComponents"
import ButtonTemplate from "../../Templates/ButtonTemplate"

const useStyles = makeStyles((theme:Theme)=>createStyles({
  root: {
    position: "relative",
    width: "95vw",
    top: "30vh",
    margin: "auto"
  },
  paper: {
    borderRadius: 15,
    padding: "7px 14px",
    backgroundColor: theme.palette.secondary.main
  }
}))

const AddRecipeModal = () => {
  const classes = useStyles()
  const token = useSelector(store=>store.token)
  return (
    <Box className={classes.root}>
      <Paper className={classes.paper}>
        <Formik
          initialValues = {{
            url: ''
          }}
          onSubmit={(values, actions)=>{
            const headers = new Headers()
            headers.append('Authorization', 'Basic ' + btoa(token + ":"))
            headers.append('Content-Type', 'application/json')
            const body = JSON.stringify({"create_from_url":values.url})
            console.log(body)
            fetch("/recipes",{
              method: "POST",
              headers: headers,
              body: body
            })
            .then(response=>response.json())
            .then(json=>console.log(json))
          }}
        >
          <Form>
            <FormikTextField label="URL" name="url"/>
            <ButtonTemplate type="submit" color="primary" fullWidth>Get Recipe</ButtonTemplate>
          </Form>
        </Formik>
      </Paper>
    </Box>
  )
}

export default AddRecipeModal
