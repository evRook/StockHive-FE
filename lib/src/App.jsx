import logo from './logo.svg';
import './App.css'
import React, { useState, useEffect } from 'react'

import {
  Layout,
  Home,
  About,
  Login,
  SignUp,
  PWReset,
  PWConfirm,
  Verify,
  Contact,
  Profile,
  Disclosures,
} from './Pages'

import {
  Route,
  useNavigate,
  useLocation,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import{
  companyLoader,
  tickerLoader,
  chartLoader
} from './loaders'

const isAuthenticated = () => {
    const user = window.localStorage.getItem('user')
    if(!user){
      console.log('Not Authenticated')
      return false   
    }else{
      console.log('Authenticated')
      return true
    } 
}

const ProtectedRoute = ({element: Element}) => {
  const navigate = useNavigate()
  // const [isAuth, setIsAuth] = useState(false)
  
  // useEffect(() => {
  //   if(!isAuthenticated()){
  //     setIsAuth(false)
  //   }else{
  //     setIsAuth(true)
  //   }
  // },[navigate])
  
  if(!isAuthenticated()){
    navigate('/login') 
  }else{
    return <Element /> 
  }
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<Home />} loader={chartLoader}/>
      <Route path='/about' element={<About />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/profile' element={<ProtectedRoute element={Profile}/>} />
      <Route path='/reset_password' element={<PWReset />} />
      <Route path='/password/reset/confirm/:uid/:token' element={<PWConfirm />} />
      <Route path='/activation/:uid/:token' element={<Verify />} />
      <Route path='/disclosures' element={<Disclosures />} />
    </Route>
  )
)

export default function App() {
  return <RouterProvider router={router} />
}
