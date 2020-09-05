import React, {useState, useEffect} from "react"

import {Typography} from "@material-ui/core"

import axios from "../../../AxiosConfig"

import BasicInfoPage from "../MiscPages/BasicInfoPage"

const RegisteredPanel = (props) => {
  const [pending, setPending] = useState(true)
  const [sent, setSent] = useState(false)

  const sendVerificationEmail = async() => {
    try {
      var verification = await axios.get(`/users/verification`,{
        params: {
          url: "http://localhost:3000/verify"
        }
      })
    } catch (e) {
      setSent(false)
      setPending(false)
    }
    setPending(false)
    setSent(true)
  }

  useEffect(()=> {
    sendVerificationEmail()

  }, [])
  return (
    <BasicInfoPage>
      {
        pending ? <Typography>Please Wait...</Typography>
      : sent ? <Typography>Success! Please check your email for instructions on how to validate your account.</Typography>
    : <Typography>Hmm, something went wrong. Please check your email and try again. </Typography>
      }
    </BasicInfoPage>
  )
}

export default RegisteredPanel
