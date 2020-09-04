import React, {useState} from "react"

import {
  Paper,
  Box
} from "@material-ui/core"

import {useSelector} from "react-redux"

import {withRouter} from "react-router-dom"

import axios from "../../../AxiosConfig"

import {Formik, Form} from "formik"
import * as Yup from "yup"
import {FormikTextField} from "../../Templates/FormikComponents"
import ButtonTemplate from "../../Templates/ButtonTemplate"


const AddRecipeModal = (props) => {
  const token = useSelector(store=>store.token)
  const [redirect, setRedirect] = useState()

  const submit = async(values, actions) => {
    try {
      var newRecipe = await axios.post(`/recipes`, {
        "create_from_url": values.url
      })
    }
    catch(e) {
      console.log(e)
      return
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
        {redirect}
        </>
  )
}

export default withRouter(AddRecipeModal)
