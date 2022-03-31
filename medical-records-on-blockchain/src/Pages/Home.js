import React from 'react'
import Cover from '../Components/Cover';
import Features from '../Components/Features';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
// import './Home.css';
// import image from "./image.jpg";

export default function Home() {
  return (
    <div>
      <Navbar/>

      <Cover/>

      <Features/>

      <Footer/>
    </div>
  )
}
