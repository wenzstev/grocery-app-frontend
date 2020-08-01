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

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    backgroundColor: theme.palette.secondary.main,
    borderRadius: 20,
    margin: "auto",
    width: "100%",
    color: "white",
    textAlign: "center"
  },
  header: {
    margin: 14,
    textAlign: "center"
  },
}))



const LoginPanel = (props) => {
  const classes = useStyles()
  const [open, setOpen] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }
    setOpen(false)
  }

  const snackBar = (
    <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left'
      }}
      open={open}
      autoHideDuration={6000}
      message={errorMessage}
      onClose={handleClose}/>
  )

  const login = (values, actions) => {
    let headers = new Headers()
    headers.append('Authorization', 'Basic ' + btoa(values.email + ":" + values.password))

    fetch("/users/token",{
      method: 'GET',
      headers: headers,
    })
    .then(response=>{
      console.log(response)
      return response.json()
    })
    .then(json=>props.setToken(json['token']))
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
      {snackBar}
    </Box>
  )
}

export default LoginPanel
