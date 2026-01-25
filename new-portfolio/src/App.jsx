import React from 'react'
import Navbar from './components/Layout/Navbar';
import Hero from './components/sections/Hero'
import About from './components/sections/About';
import Skills from './components/sections/Skills'
import Projects from './components/sections/Projects'
import ExperienceTimeline from './components/sections/ExperienceTimeLine';
import ContactForm from './components/sections/ContactForm';
const App = () => {
   return (
     <div className="app">
       <Navbar />
 
       {/* Scroll snapping container */}
       <main className="scroll-container">
         <Hero />
         <About />
         <Projects/>
         <ExperienceTimeline/>
         <Skills/>
        <ContactForm/>

       </main>
     </div>
   )
 }
 
 export default App;