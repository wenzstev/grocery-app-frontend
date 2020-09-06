import React from "react"
import {useState} from "react"
import {Formik, Form} from "formik"
import * as Yup from "yup"
import {
  Box,
  Paper,
  Typography,
  Button,
  Snackbar,
  makeStyles,
  createStyles
} from "@material-ui/core"


import {FormikTextField} from "../../Templates/FormikComponents"
import ButtonTemplate from "../../Templates/ButtonTemplate"

import {useDispatch} from 'react-redux'
import {setToken, setUser} from '../../../actions/'

import axios from "../../../AxiosConfig"

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    backgroundColor: theme.palette.secondary.main,
    borderRadius: 20,
    margin: "auto",
    width: "100%",
    color: "white",
    textAlign: "center",
  },
  header: {
    margin: 14,
    textAlign: "center",
    color: "white"
  },
}))


const LoginPanel = (props) => {
  const classes = useStyles()
  const dispatch = useDispatch()


  const login = async(values, actions) => {
    try {
      var loginResponse = await axios.get(`/users/refresh-token`,{
        headers: {
          'X-Requested-With': 'XMLHttpRequest', // attempt to disable default authorization prompt, not working
          'Authorization': 'Basic ' + btoa(values.email + ":" + values.password)
        }
      })
    } catch(e) {
      if (e.response.status == 500) {
        props.displayAlert("There appears to be a problem with the server. Please check back later.")
      }
      if(e.response.status==401){
        props.displayAlert("Invalid Username or Password.")
      }
      return
    }
    if (loginResponse.status != 204){
      console.log("error: request returned response of " + loginResponse.status)
      return
    }
    try {
      var tokenResponse = await axios.get(`/users/token`)
    } catch(e) {
      console.log(e)
      return
    }
    dispatch(setToken(tokenResponse.data['token']))
    dispatch(setUser(tokenResponse.data['user']))
    props.setHasToken(true)
  }


  return (
    <Box>
      <Typography variant="h5" className={classes.header}>Sign In</Typography>
      <Formik
        initialValues = {{
          email: '',
          password: ''
        }}
        validationSchema = {Yup.object({
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
          password: Yup.string()
            .required("Required")
        })}
        onSubmit={login}

      >
      <Form>
        <Paper className={classes.root}>
          <Box p={2}>
          <FormikTextField label="Email" name="email" type="text" />
          <FormikTextField label="Password" name="password" type="password" />
          </Box>
        </Paper>
        <Box m={2}>
          <ButtonTemplate type="submit" color="secondary">Log In</ButtonTemplate>
        </Box>
      </Form>
      </Formik>
    </Box>
  )
}

export default LoginPanel
