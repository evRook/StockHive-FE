import logo from './logo.svg';

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
} from './Pages'

import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import{
  companyLoader,
  tickerLoader
} from './loaders'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<Home />} loader={tickerLoader}/>
      <Route path='/about' element={<About />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/reset_password' element={<PWReset />} />
      <Route path='/password/reset/confirm/:uid/:token' element={<PWConfirm />} />
      <Route path='/activation/:uid/:token' element={<Verify />} />
    </Route>
  )
)

export default function App() {
  return <RouterProvider router={router} />
}
