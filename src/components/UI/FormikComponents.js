import React from "react"
import {Formik, useField} from "formik"
import {
  TextField,
  Box,
  makeStyles,
  createStyles,
} from "@material-ui/core"

import {useTheme} from "@material-ui/core/styles"


const useStyles = makeStyles((theme: Theme) => createStyles({
  error: {
    color: theme.palette.error.main
  }
}))

export const FormikTextField = ({label, ...props}) => {
  const [field, meta] = useField(props)
  const classes = useStyles()
  console.log(classes)
  return(
    <Box mb={2}>
      <TextField label={label} variant="outlined" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className={classes.error}>{meta.error}</div>
      ) : null}
    </Box>
  )
}
