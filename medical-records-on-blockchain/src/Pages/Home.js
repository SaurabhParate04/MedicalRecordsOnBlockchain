import React from 'react'
import './Home.css';
import Cover from '../Components/Cover';
import Features from '../Components/Features';
import Footer from '../Components/Footer';
import Hero from '../Components/Hero';
import Navbar from '../Components/Navbar';

export default function Home() {
  return (
    <div>
      <Navbar/>

      <Cover/>

      <Features/>

      <Hero/>

      <Footer/>
    </div>
  )
}
