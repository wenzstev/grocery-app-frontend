import React from "react"
import {Formik, useField} from "formik"
import {
  TextField,
  Box,
  makeStyles
} from "@material-ui/core"

const useStyles = makeStyles({
  root: {
  "& fieldset": {
    borderRadius: 15,
  },
  "& input": {
    backgroundColor: "#B3B3B3",
    borderRadius: 15,
  },
  "& label": {
    backgroundColor: "#B3B3B3",
    padding: "0px 5px",
    borderRadius: "10px",
    }
  }
})

export const FormikTextField = ({label, ...props}) => {
  const [field, meta] = useField(props)
  const classes = useStyles()
  return(
    <Box my={2}>
      <TextField
        className={classes.root}
        label={label}
        variant="outlined"
        fullWidth
        {...field}
        {...props}
        {...meta.touched && meta.error ?
          ({error: true, helperText: meta.error})
          : null}
      />
    </Box>
  )
}
