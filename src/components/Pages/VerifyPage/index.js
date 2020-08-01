import React, {useState} from "react"

import MainTemplatePage from "../MainTemplatePage/"

import {
  Grid,
  Paper,
  Box
} from "@material-ui/core"

import {
  Link
} from "react-router-dom"

var qs = require('qs')

const VerifyPage = (props) => {
  const [verified, setVerified] = useState(false)
  const token = qs.parse(props.location.search,{ignoreQueryPrefix:true})

  console.log(token)

  fetch(`/users/verification?token=${token.token}`,{
    method: 'PUT'
  })
  .then(response=>{
    if(response.status===200){
      setVerified(true)
    }
  })

  return (
    <MainTemplatePage noSearchbar>
      <Grid item>
        <Paper>
          <Box m={2}>
            {verified ? <p>Success! Your email account has been verified.</p> : null }
            <Link to="/login">Return to login page</Link>
          </Box>
        </Paper>
      </Grid>
    </MainTemplatePage>
  )
}

export default VerifyPage
