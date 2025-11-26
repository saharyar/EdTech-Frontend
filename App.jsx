import React from 'react'
import Navbar from './Component/Navbar'
import Home from './Component/Home'
import Services from './Component/Services'
import IDCard from './assets/IDCard'
import Training from './Component/Training'
import Client from './Component/Clients'
import Footer from './Component/footer'


const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
     <Services/>
     <IDCard/>
     <Training/>
     <Client/>
     <Footer/>
    </div>
  )
}

export default App
