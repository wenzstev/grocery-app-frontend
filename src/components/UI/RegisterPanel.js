import React from "react"
import {FormikTextField} from "./FormikComponents"
import {Formik, Form} from "formik"
import * as Yup from "yup"
import {
  Paper,
  Button,
  Box,
  makeStyles,
  createStyles
} from "@material-ui/core"


const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    borderRadius: 10,
    margin: "auto",
    width: "80vw"
  }
}))

const RegisterPanel = () => {
  const classes = useStyles()
  return (
    <Paper className={classes.root}>
      <Box p={2}>
        <Formik
          initialValues={{
            username: '',
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
            setTimeout(()=>{
              alert(JSON.stringify(values, null, 2))
              actions.setSubmitting(false)
            }, 400)
          }}
        >
          <Form>
            <FormikTextField label="Email" name="email" type="text" />
            <FormikTextField label="Password" name="password" type="password" />
            <FormikTextField label="Confirm Password" name="confirmPassword" type="password" />
            <Button type="submit">Submit</Button>
          </Form>
        </Formik>
      </Box>
    </Paper>
  )
}

export default RegisterPanel
