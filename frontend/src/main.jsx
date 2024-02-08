import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import LoginSignup from './pages/LoginSignup.jsx'
import { createBrowserRouter,createRoutesFromElements,RouterProvider,Route } from 'react-router-dom'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path = '/' element= {<App/>}>
      <Route path = '/login' element = {<LoginSignup/>}/>

    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router}/>
  </React.StrictMode>,
)
