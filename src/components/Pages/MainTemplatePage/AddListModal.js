import React from "react"

import {withRouter} from "react-router-dom"

import {Formik, Form} from "formik"
import {FormikTextField} from "../../Templates/FormikComponents"

import {useSelector} from "react-redux"

import axios from "../../../AxiosConfig"

import {
  Paper,
  Box
} from "@material-ui/core"

import ButtonTemplate  from "../../Templates/ButtonTemplate"


const AddListModal = (props) => {
  const token = useSelector(store=>store.token)

  const submit = async(values, actions) => {
    try {
      var newList = await axios.post(`/lists`, values)
    }
    catch(e) {
      console.log(e)
      return
    }
    console.log(newList.data)
    props.history.push(`/list/${newList.data.id}`)

  }

  return (
    <Formik
      initialValues={{
        name: ""
      }}
      onSubmit={submit}
    >
      <Form>
        <FormikTextField label="List Name" name="name" />
        <ButtonTemplate type="submit" color="primary">Create List</ButtonTemplate>
      </Form>
    </Formik>
  )
}

export default withRouter(AddListModal)
