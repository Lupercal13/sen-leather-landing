

import About from "./components/About"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Gallery from "./components/Gallery"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Services from "./components/Services"

function App() {

  return (
    <div className="bg-gray-50">
      <Navbar/>
      <Hero/>
      <About/>
      <Services/>
      <Gallery/>
      <Contact/>
      <Footer/>

    </div>
  )
}

export default App
