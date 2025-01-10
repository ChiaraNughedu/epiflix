//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNavbar from './components/MyNavbar'
import TvShows from './components/TvShows'
import MyFooter from './components/MyFooter'


function App() {

  return (
    <>
    <MyNavbar />
    <TvShows/>
    <MyFooter/>
    </>
  )
}

export default App
