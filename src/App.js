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

import {useSelector, useDispatch} from 'react-redux'

import {setToken, setUser} from "./actions/"

import AuthenticatedApp from "./components/AppVersions/AuthenticatedApp"
import UnauthenticatedApp from "./components/AppVersions/UnauthenticatedApp"
import LandingPage from "./components/Pages/MiscPages/LandingPage"

import axios from "./AxiosConfig"


function App() {
  const [hasToken, setHasToken] = useState(false)
  const [wait, setWait] = useState(true)

  const dispatch = useDispatch()
  const token = useSelector(state=>state.token)

  const getToken = async() => {
    try {
      var tokenResponse = await axios.get(`/users/token`)
    }
    catch(e) {
      // TODO: inform the user of the error
      console.log(e)
      setWait(false)
      return
    }
    const {data} = tokenResponse
    dispatch(setUser(data['user']))
    dispatch(setToken(data['token']))
    setHasToken(true)
    setWait(false)
    axios.defaults.headers['Authorization'] = 'Basic ' + btoa(data['token']+':')
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
        {wait ? <LandingPage />
        : token ? <AuthenticatedApp /> : <UnauthenticatedApp />}
      </div>
    </Router>

  );
}

export default App;
