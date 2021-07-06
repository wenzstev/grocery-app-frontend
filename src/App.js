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

import { datadogRum } from '@datadog/browser-rum';

datadogRum.init({
    applicationId: '0ca40d4d-b690-415a-8eab-1faf08f07429',
    clientToken: 'pub5d0d6e04db0c3e58d612f7a6b5cfb158',
    site: 'datadoghq.com',
    service:'souschef',
    env:'prod',
    // Specify a version number to identify the deployed version of your application in Datadog 
    version: '1.0.0',
    sampleRate: 100,
    trackInteractions: true
});


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
    console.log("getting token")
    getToken()
    if(hasToken === true){
      setInterval(()=>{
        getToken()
      }, 240000)
    }
  }, [hasToken])



  return (
    <Router>
      <div className="App">
        {wait ? <LandingPage />
        : token ? <AuthenticatedApp /> : <UnauthenticatedApp setHasToken={setHasToken}/>}
      </div>
    </Router>

  );
}

export default App;
