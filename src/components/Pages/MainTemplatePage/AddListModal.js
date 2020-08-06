import React from "react"

import {Formik, Form} from "formik"
import {FormikTextField} from "../../Templates/FormikComponents"

import {useSelector} from "react-redux"

import {
  Paper,
  Box
} from "@material-ui/core"

import ButtonTemplate  from "../../Templates/ButtonTemplate"


const AddListModal = () => {
  const token = useSelector(store=>store.token)
  return (
    <Formik
      initialValues={{
        name: ""
      }}
      onSubmit={(values, actions)=>{
        const headers = new Headers()
        headers.append("Authorization", "Basic " + btoa(token + ":"))
        headers.append("Content-Type", "application/json")
        const body = JSON.stringify(values)
        fetch("/lists",{
          method: "POST",
          headers: headers,
          body: body
        })
        .then(response=>{
          if(response.status===201){
            return response.json()
          } else {
            throw new Error("Something went wrong!")
          }
        })
        .then(json=>console.log(json))
        .catch(err=>console.log(err))
      }}
    >
      <Form>
        <FormikTextField label="List Name" name="name" />
        <ButtonTemplate type="submit" color="primary">Create List</ButtonTemplate>
      </Form>
    </Formik>
  )
}

export default AddListModal
