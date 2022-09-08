import React from "react";
import { Route,Routes ,BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/navbar";
import Projects from "./Pages/projects"
import MyWork from "./Pages/mywork"
import Newhome from "./Pages/newhome";


function App() {
  return (
    <>
    <Router>
    <Navbar/>
    <Routes>
      <Route path="/" exact element={<Newhome/>} />
      <Route path="/projects" element={<Projects/>} />
      <Route path="/mywork" element={<MyWork/>} />
    </Routes>
    </Router>
      
    </>
  );
}

export default App;
