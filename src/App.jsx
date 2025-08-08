import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home"
import Footer from "./Components/Footer"
import About from "./Components/About"
import Navbar from "./Components/Navbar";
import Contact from "./Components/Contact"
import OurTeam from "./Components/Team"
import Gurugram from "./Components/Gurugram"
import Industrial from "./Components/Industrial"
import Blog from "./Components/UseBlog"
import BlogDetails from "./Components/BlogDetails"
  function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path ="/about" element={<About/>} />
      <Route path ="/contact" element={<Contact/>} />
      <Route path = "/about/team" element={<OurTeam/>}/>
      <Route path="/gurugram" element={<Gurugram/>}/>
      <Route path="/industrial" element={<Industrial/>}/>
      <Route path="/blog" element={<Blog/>}/>
      <Route path="/blog/:id" element={<BlogDetails/>}/>


      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}
export default App;