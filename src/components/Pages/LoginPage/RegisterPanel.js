import React from "react"
import {FormikTextField} from "../../Templates/FormikComponents"
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
import ButtonTemplate from "../../Templates/ButtonTemplate"

import axios from "../../../AxiosConfig"

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
    textAlign: "center",
    color: "white"
  },
  submitButton: {
    borderRadius: "15px",
    textTransform: "none"
  }
}))

const RegisterPanel = (props) => {
  const classes = useStyles()

  const submit = async(values, actions)=>{
    try {
      var newUserResponse = await axios.post(`/users`, {
          email:values.email,
          password:values.password
        })
    } catch(e) {
      if (e.response.data.payload == "IntegrityError"){
        props.displayAlert("This email address is already in use.")
      }
      return
    }
    props.setEmail(values.email)
    props.setPassword(values.password)
    props.setHasRegistered(true)
  }


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
        onSubmit={submit}
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
