import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
    <Navbar/>
    <main>
      <Outlet/>
    </main>
    <Footer/>
   </div>
  )
}

export default App
