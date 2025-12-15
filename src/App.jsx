import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RandomUser from "../src/components/randomUser.jsx"
import Login from "../src/components/login.jsx"
import Logout from '../src/components/logout.jsx'

function App() {

  return (
    <>
    <RandomUser></RandomUser>
    <Login></Login>
    <Logout></Logout>
    </>
  )
}



export default App;
