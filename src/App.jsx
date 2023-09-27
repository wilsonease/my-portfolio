import { useState } from 'react'
import './App.css'
import { Header } from './components/Header/Header'
import { About } from './components/About/About'
import { Services } from './components/Services/Services'
import { Milestones } from './components/Milestones/Milestones'
import { Projects } from './components/Projects/Projects'
import { Testimonials } from './components/Testimonials/Testimonials'
import { Contact } from './components/Contact/Contact'
import { Sponsors } from './components/Sponsors/Sponsors'

function App() {

  return (
    <div className=''>
      <Header />
      <About />
      <Sponsors />
      <Services />
      <Milestones />
      <Projects />
      {/* <Testimonials /> */}
      <Contact />
    </div>
  )
}

export default App
