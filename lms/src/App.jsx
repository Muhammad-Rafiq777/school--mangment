import { Routes,Route } from 'react-router-dom'
import React from 'react';
import About from "./pages/About.jsx";
import Home from "./pages/Home.jsx"
import Contact from "./pages/Contact.jsx"
import Media from "./pages/Media.jsx"
import Service1 from "./pages/Service1.jsx"
import Service2 from "./pages/Service2.jsx"
import Service3 from "./pages/Service3.jsx"
import Service4 from "./pages/Service4.jsx"
import Service5 from "./pages/Service5.jsx"
import Media1 from "./pages/Media1.jsx"
import Media2 from "./pages/Media2.jsx"
import Media3 from "./pages/Media3.jsx"
import Media4 from "./pages/Media4.jsx"
import  Services from "./pages/Services.jsx"
import Navbar from "./components/Navbar.jsx"
import Footer from "./components/Footer.jsx"
import { ToastContainer,toast } from 'react-toastify';
function App() {

  return (
   <>
   <ToastContainer/>
    <Navbar/>  
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/media' element={<Media/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/service1' element={<Service1/>}/>
        <Route path='/service2' element={<Service2/>}/>
        <Route path='/service3' element={<Service3/>}/>
        <Route path='/service4' element={<Service4/>}/>
        <Route path='/service5' element={<Service5/>}/>
        <Route path='/media1' element={<Media1/>}/>
        <Route path='/media2' element={<Media2/>}/>
        <Route path='/media3' element={<Media3/>}/>
        <Route path='/media4' element={<Media4/>}/>
      </Routes>
      <Footer/>
     </>
  )
}

 export default App
