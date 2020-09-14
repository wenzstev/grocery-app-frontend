import React, {useState, useEffect} from "react"

import BasicInfoPage from "./BasicInfoPage"

import {
  Typography
} from "@material-ui/core"

import axios from "../../../AxiosConfig"

var qs = require('qs')

const VerifyPage = (props) => {
  const [verified, setVerified] = useState(false)
  const [error, setError] = useState(false)
  const {token} = qs.parse(props.location.search,{ignoreQueryPrefix:true})

  const verify = async() => {
    try {
      var verifyResponse = await axios.put(`/users/verification?token=${token}`)
    } catch (e) {
      setError(true)
      return
    }
    if (verifyResponse.status == 200) {
      setVerified(true)
    }
  }

  useEffect(()=>{
    verify()
  },[])


  return (
    <BasicInfoPage>
      {verified ?
        <Typography>Success! Your account has been verified. </Typography>
        : error ? <Typography>Hmm, we had a problem verifying your account.</Typography>
        : <Typography>Please wait...</Typography>
      }
    </BasicInfoPage>
  )
}

export default VerifyPage
