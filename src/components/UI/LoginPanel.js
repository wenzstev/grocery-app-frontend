import React from "react"
import {Formik, Form} from "formik"
import * as Yup from "yup"
import {
  Box,
  Paper,
  Typography,
  Button,
  makeStyles,
  createStyles
} from "@material-ui/core"

import {FormikTextField} from "./FormikComponents"
import ButtonTemplate from "../Buttons/ButtonTemplate"

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

const LoginPanel = () => {
  const classes = useStyles()
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
        onSubmit={(values, actions) => {
          setTimeout(()=>{
            alert(JSON.stringify(values, null, 2))
            actions.setSubmitting(false)
          }, 400)
        }}
      >
      <Form>
        <Paper className={classes.root}>
          <Box p={2}>
          <FormikTextField label="Email" name="email" type="text" />
          <FormikTextField label="Password" name="password" type="password" />
          </Box>
        </Paper>
        <Box m={2}>
          <ButtonTemplate type="sumbit" color="secondary">Log In</ButtonTemplate>
        </Box>
      </Form>
      </Formik>
    </Box>
  )
}

export default LoginPanel
