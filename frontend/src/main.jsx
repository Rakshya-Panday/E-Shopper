import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import LoginSignup from './pages/LoginSignup.jsx'
import ShopCategory from './pages/ShopCategory.jsx'
import Cart from './pages/Cart.jsx'
import { createBrowserRouter,createRoutesFromElements,RouterProvider,Route } from 'react-router-dom'
import Shop from './pages/Shop.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path = '/' element= {<App/>}>
      <Route path = '/' element = {<Shop/>}/>
      <Route path = '/man' element = {<ShopCategory category = "man"/>}/>
      <Route path = '/women' element = {<ShopCategory category = "women"/>}/>
      <Route path = '/kid' element = {<ShopCategory category = "kid"/>}/>
      <Route path = '/login' element = {<LoginSignup/>}/>
      <Route path = '/cart' element = {<Cart/>}/>

    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router}/>
  </React.StrictMode>,
)
