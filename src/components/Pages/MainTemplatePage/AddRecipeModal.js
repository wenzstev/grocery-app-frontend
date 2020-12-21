import React, {useState} from "react"

import {
  Typography,
  Box
} from "@material-ui/core"

import {useSelector} from "react-redux"

import {Link, withRouter} from "react-router-dom"

import axios from "../../../AxiosConfig"

import {Formik, Form} from "formik"
import * as Yup from "yup"
import {FormikTextField} from "../../Templates/FormikComponents"
import ButtonTemplate from "../../Templates/ButtonTemplate"


const AddRecipeModal = (props) => {
  const token = useSelector(store=>store.token)
  const [redirect, setRedirect] = useState()
  const [notImpError, setNotImpError] = useState("")

  const submit = async(values, actions) => {
    try {
      var newRecipe = await axios.post(`/recipes${props.isSample ? `/nologin`:''}`, {
        "create_from_url": values.url,
      })
    }
    catch(e) {
      console.log(e)
      if (e.response.status == 501) {
        setNotImpError(e.response.data["payload"])
      }
    }
    props.history.push(`/recipe/${newRecipe.data.id}`)

  }


  return (
    <>
        <Formik
          initialValues = {{
            url: ''
          }}
          onSubmit={submit}
        >
          <Form>
            <FormikTextField label="URL" name="url"/>
            <ButtonTemplate type="submit" color="primary">Get Recipe</ButtonTemplate>
          </Form>
        </Formik>
        <Box m={2} />
        {notImpError != "" ? (
          <Typography>Unfortunately, {notImpError} is not currently supported. Please check <Link to="/sites-supported">here</Link> for a list of supported websites.</Typography>
        ) : null}
        {redirect}
      </>
  )
}

export default withRouter(AddRecipeModal)
