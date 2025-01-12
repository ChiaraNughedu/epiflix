//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./components/MyNavbar";
import TvShows from "./components/TvShows";
import MyFooter from "./components/MyFooter";
import FirstComponent from "./components/FirstComponent";
import SecondComponent from "./components/SecondComponent";
import ThirdComponent from "./components/ThirdComponent";

function App() {
  return (
    <>
      <MyNavbar />
      <TvShows />
      <FirstComponent />
      <SecondComponent />
      <ThirdComponent />
      <MyFooter />
    </>
  );
}

export default App;
