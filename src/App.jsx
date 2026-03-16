import React from 'react'
import Navbar from './Component/Navbar'
import { Hero } from './Component/Hero'
import { Stats } from './Component/Stats'
import { Features } from './Component/Features'
import { Footer } from './Component/Footer'

Hero
function App() {
  return (
    <div>
       <Navbar />
        <Hero />
      <Stats />
      <Features />
      <Footer />
    </div>
  )
}

export default App