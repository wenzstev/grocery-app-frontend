import React from "react"
import {Formik, useField} from "formik"
import {
  Input,
  FormLabel,
  Box,
  makeStyles
} from "@material-ui/core"

const useStyles = makeStyles({
  root: {
    "& input": {
      backgroundColor: "#B3B3B3",
      borderRadius: 15,
      padding: "10px 15px"
    },
  },
  error: {
    color: "red",
    textAlign: "left"
  }
})

export const FormikTextField = ({label, ...props}) => {
  const [field, meta] = useField(props)
  const classes = useStyles()
  return(
    <Box my={2} className={classes.root}>
      <Input
        label={label}
        variant="outlined"
        placeholder={label}
        disableUnderline
        fullWidth
        {...field}
        {...props}
        {...meta.touched && meta.error ?
          ({error: true})
          : null}
      />
    {meta.touched && meta.error ?
    <div className={classes.error}>{meta.error}</div> : null}
    </Box>
  )
}
