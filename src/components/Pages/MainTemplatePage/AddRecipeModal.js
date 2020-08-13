import React, {useState} from "react"

import {
  Paper,
  Box
} from "@material-ui/core"

import {useSelector} from "react-redux"

import {Redirect} from "react-router-dom"

import {Formik, Form} from "formik"
import * as Yup from "yup"
import {FormikTextField} from "../../Templates/FormikComponents"
import ButtonTemplate from "../../Templates/ButtonTemplate"


const AddRecipeModal = () => {
  const token = useSelector(store=>store.token)
  const [redirect, setRedirect] = useState()
  return (
    <>
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
            .then(response=>{
              if(response.status===200){
                return response.json()
              } else {
                throw new Error("Something went wrong!")
              }
            })
            .then(json=>{
              console.log(json)
              setRedirect(<Redirect to={`/recipe/${json.recipe.id}`} />)
            })
            .catch(err=>console.log(err))
          }}
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

export default AddRecipeModal
