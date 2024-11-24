import React from "react";
import Home from "./home/home";
import Courses from "./components/courses";
import Login from "./components/login"
import { Routes, Route } from "react-router-dom"
import AboutUs from "./aboutUs/aboutUs";
import Contact from "./contact/Contact";
import Signup from "./components/signup";

const App = () => {
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/login" element={<Login />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<Signup />} />

        </Routes>
      </div>
    </>
  )
}

export default App;