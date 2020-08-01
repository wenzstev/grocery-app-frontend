import React from "react"

const RegisteredPanel = (props) => {
  console.log(props.email)
  console.log(props.password)
  const sendVerificationEmail = () => {
    let headers = new Headers()
    headers.append('Authorization', 'Basic ' + btoa(props.email + ":" + props.password))

    console.log(headers)

    fetch("/users/verification?url=http://localhost:3000/verify",{
      method: 'GET',
      headers: headers,
    })
    .then(request=>console.log(request))
  }
  sendVerificationEmail()
  return (
    <div>
      <p>
      Success! your account has been created. Please go to your email and click the verification link to validate your account.
      </p>
      <p>
      Click <button onClick={sendVerificationEmail}>here</button> to resend the email.
      </p>
    </div>
  )
}

export default RegisteredPanel
