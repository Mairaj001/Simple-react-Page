import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {RouterProvider, createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/about.jsx'
import ContactUs from './components/contactUs/ContactUs.jsx'
import User from './components/user/user.jsx'
import Github from './Github/Github.jsx'
import SignIn from './components/sigin/signin.jsx'
import SignUp from './components/signUp/SignUp.jsx'
import { Princing } from './components/Pricing.jsx'
import { ProductThree } from './components/products/product.jsx'
// import Github from './Github/Github.jsx'



const route= createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout/>}>
     <Route path='' element={<Home/>}/>
     <Route path='about' element={<About/>}/>
     <Route path='contact' element={<ContactUs/>}/>
     <Route path='signin' element={<SignIn/>}/>
    
     <Route path='products' element={<ProductThree/>}/>
     <Route path='signUp' element={<SignUp/>}/>
     <Route path='user/:userid' element={<User />} />
     <Route path='github' element={<Github/>}/>
     <Route path='pricing' element={<Princing/>}/>
  </Route>
))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={route}/>
  </React.StrictMode>,
)
