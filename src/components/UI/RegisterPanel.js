import React from "react"
import {FormikTextField} from "./FormikComponents"
import {Formik, Form} from "formik"
import * as Yup from "yup"
import {
  Paper,
  Button,
  Box,
  Typography,
  Snackbar,
  makeStyles,
  createStyles
} from "@material-ui/core"
import ButtonTemplate from "../Buttons/ButtonTemplate"


const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    borderRadius: 20,
    margin: "auto",
    width: "100%",
    backgroundColor: theme.palette.primary.main,
    color: "white",
    textAlign: "center"
  },
  header: {
    margin: 14,
    textAlign: "center"
  },
  submitButton: {
    borderRadius: "15px",
    textTransform: "none"
  }
}))

const RegisterPanel = () => {
  const classes = useStyles()
  return (
    <Box>
      <Typography variant="h5" className={classes.header}> Register </Typography>
      <Formik
        initialValues={{
          email: '',
          password: '',
          confirmPassword: '',
        }}
        validationSchema = {Yup.object({
          email: Yup.string()
            .email("Invalid email address.")
            .required('Required'),
          password: Yup.string()
            .matches(
              /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
              "Must contain 8 characters, one uppercase, one number and one special case character."
            )
            .required('Required'),
          confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Required')
        })}
        onSubmit={(values, actions) => {
          let url = "http://localhost:5000/users"
          let body = {
              email: values.email,
              password: values.password,
          }

          fetch(url , {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
          }).then(response=>response.json())
            .then(json=>console.log(json))
        }}
      >
        <Form>

      <Paper className={classes.root}>
        <Box p={2}>

              <FormikTextField label="Email" name="email" type="text" />
              <FormikTextField label="Password" name="password" type="password" />
              <FormikTextField label="Confirm Password" name="confirmPassword" type="password" />
              </Box>
            </Paper>
            <Box m={2} justifyContent="center">
            <ButtonTemplate
              color="primary"
              type="submit">
              Register!
            </ButtonTemplate>
            </Box>
            </Form>
          </Formik>

    </Box>

  )
}

export default RegisterPanel
