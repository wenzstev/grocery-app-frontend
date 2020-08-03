import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
} from "react-router-dom"


import AuthenticatedApp from "./components/AppVersions/AuthenticatedApp"
import UnauthenticatedApp from "./components/AppVersions/UnauthenticatedApp"

function App() {
  const [token, setToken] = useState(null)
  const [hasToken, setHasToken] = useState(false)



  const getToken = () => {
    fetch('/users/token')
    .then(response=>{
      if (response.status === 200){
        return response.json()
      } else if (response.status === 404){
        throw new Error('No refresh token.')
      } else {
        throw new Error('Something went wrong.')
      }
    })
    .then(json=>{
      setToken(json['token'])
      setHasToken(true)
    })
    .catch(error=>console.log(error))
  }


  useEffect(()=>{
    getToken()
    if(hasToken === true){
      console.log('setting interval')
      setInterval(()=>{
        console.log('getting new token')
        getToken()
      }, 240000)
    }
  }, [hasToken])



  return (
    <Router>
      <div className="App">
        {token ? <AuthenticatedApp token={token} setToken={setToken}/> : <UnauthenticatedApp setToken={setToken} setHasToken={setHasToken}/>}
      </div>
    </Router>

  );
}

export default App;
