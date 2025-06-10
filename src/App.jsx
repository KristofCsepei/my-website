import React from "react"
import Header from "./components/Header"
import Projects from "./components/Projects"
import AboutMe from "./components/AboutMe"
import Footer from "./components/Footer"
import Contact from "./components/Contact"
import BackBtn from "./components/BackBtn"


function App() {

  return (
    <>
      <div>
        <BackBtn />
        <Header />
        <Projects />
        <AboutMe />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default App
