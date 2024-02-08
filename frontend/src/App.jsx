import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
    <Navbar/>
    <main>
      <Outlet/>
    </main>
   </div>
  )
}

export default App
