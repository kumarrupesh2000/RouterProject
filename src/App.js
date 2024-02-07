import "./App.css";
import Navbar from "./components/Navbar";
import { Route,Routes } from "react-router-dom";
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'
import { useState } from "react";

function App() {

  const[isLoggedin,setisLoggedin]=useState(false);
  return <div className="w-screen h-auto bg-richblack-900 flex flex-col">
    <Navbar isLoggedin={isLoggedin} setisLoggedin={setisLoggedin}></Navbar>


    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login setIsLoggedIn={setisLoggedin}/>}/>
      <Route path="/signup" element={<Signup setIsLoggedIn={setisLoggedin}/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
    </Routes>
  </div>;
}

export default App;
