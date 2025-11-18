import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Facts from './components/Facts'
import Products3D from './components/Products3D'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#05060A] text-white">
      <Hero />
      <About />
      <Facts />
      <Products3D />
      <Contact />
      <Footer />
    </div>
  )
}

export default App