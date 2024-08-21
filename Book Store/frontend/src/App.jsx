import React from "react";
import Home from "./home/home";
import Courses from "./components/courses";
import {Routes , Route} from "react-router-dom"

const App  = () => {
  return (
    <>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/courses" element={<Courses />} />
      
      </Routes>
    </>
  )
}

export default App;