import logo from './logo.svg';
import './App.css'

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
} from './Pages'

import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import{
  companyLoader,
  tickerLoader,
  chartLoader
} from './loaders'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<Home />} loader={chartLoader}/>
      <Route path='/about' element={<About />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/reset_password' element={<PWReset />} />
      <Route path='/password/reset/confirm/:uid/:token' element={<PWConfirm />} />
      <Route path='/activation/:uid/:token' element={<Verify />} />
    </Route>
  )
)

export default function App() {
  return <RouterProvider router={router} />
}
