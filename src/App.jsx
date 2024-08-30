import React,{useState} from "react";
import {Router,Routes,Route } from "react-router";
import Navbar from "./Components/Navbar/Navbar";
import HomePage from "./Components/HomePage/HomePage";
import { BrowserRouter } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import AboutUs from "./Components/AboutUs/AboutUs";
import AllProjects from "./Components/AllProjects/AllProjects";
import ContactUs from "./Components/ContactUs/ContactUs";
const App = () => {
  return(
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<HomePage/>}/>
        <Route exact path="/AboutUs" element={<AboutUs/>}/>
        <Route exact path="/AllProjects" element={<AllProjects/>} />
        <Route exact path="ContactUs" element={<ContactUs/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  )
}
export default App;