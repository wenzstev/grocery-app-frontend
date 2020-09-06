import React, {useState} from "react"

import {
  Container,
  Typography,
  Grid,
  Box,
  Snackbar,
  makeStyles
} from "@material-ui/core"

import MuiAlert from "@material-ui/lab/Alert"

import {LoginSquiggle} from "../../Backgrounds/Squiggles"
import woodBackground from "../../../assets/wood-background.jpg"
import RegisterPanel from "./RegisterPanel"
import LoginPanel from "./LoginPanel"
import RegisteredPanel from "./RegisteredPanel"
import MainTemplatePage from "../MainTemplatePage"

const useStyles = makeStyles({
  root: {
    background: "url(" + woodBackground + ")",
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundColor: "#a8d4ff",
    backgroundBlendMode: "multiply",
    height: "100vh",
    width: "100vw",
  },
  panel: {
    zIndex: "5",
    position: "relative",
    color: "white"
  }
})

const Alert = (props) => <MuiAlert elevation={6} variant="filled" {...props} />


const LoginPage = (props) => {
  const classes = useStyles()
  const [hasRegistered, setHasRegistered] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")
  const [open, setOpen] = useState(false)

  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)

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
      onClose={handleClose}>
      <Alert severity="error">{errorMessage}</Alert>
    </Snackbar>
  )

  const displayAlert = (message) => {
    setErrorMessage(message)
    setOpen(true)
  }


  return (
    <>
    {hasRegistered ? <RegisteredPanel email={email} password={password}/>
  : (
    <MainTemplatePage login noSearchbar>
        <Grid container>
            <Grid item xs={12} md={6}>
              <Box mx={5}>
                <LoginPanel
                  displayAlert={displayAlert}
                  setToken={props.setToken}
                  setHasToken={props.setHasToken}/>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box mx={5}>
                <RegisterPanel
                  displayAlert={displayAlert}
                  setHasRegistered={setHasRegistered}
                  setEmail={setEmail}
                  setPassword={setPassword}/>
              </Box>
            </Grid>
          </Grid>
          {snackBar}
    </MainTemplatePage>
  )}
    </>

  )
}

export default LoginPage
