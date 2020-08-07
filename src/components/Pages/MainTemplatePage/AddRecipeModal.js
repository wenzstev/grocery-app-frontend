import React from "react"

import {
  Paper,
  Box
} from "@material-ui/core"

import {useSelector} from "react-redux"

import {Formik, Form} from "formik"
import * as Yup from "yup"
import {FormikTextField} from "../../Templates/FormikComponents"
import ButtonTemplate from "../../Templates/ButtonTemplate"


const AddRecipeModal = () => {
  const token = useSelector(store=>store.token)
  return (
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
            })
            .catch(err=>console.log(err))
          }}
        >
          <Form>
            <FormikTextField label="URL" name="url"/>
            <ButtonTemplate type="submit" color="primary">Get Recipe</ButtonTemplate>
          </Form>
        </Formik>
  )
}

export default AddRecipeModal
