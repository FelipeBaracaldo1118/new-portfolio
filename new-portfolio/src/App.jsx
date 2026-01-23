import React from 'react'
import Navbar from './components/Layout/Navbar';
import Hero from './components/sections/Hero'
import About from './components/sections/About';
const App = () => {
   return (
     <div className="app">
       <Navbar />
 
       {/* Scroll snapping container */}
       <main className="scroll-container">
         <Hero />
         <About />
         {/* <Projects /> */}
         {/* <Contact /> */}
       </main>
     </div>
   )
 }
 
 export default App;