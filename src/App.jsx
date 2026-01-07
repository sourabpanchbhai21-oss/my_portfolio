import './App.css'
import Navbar from "../src/components/Navbar"
import ProfileSection from "../src/components/ProfileSection"
import About from './components/About'
import Skills from './components/Skills'
import Conatact from './components/Contact'

function App() {
  
  return (
    <>
      <Navbar/>
      <ProfileSection/>
      <About/>
      <Skills/>
      <Conatact/>
    </>
  )
}

export default App
