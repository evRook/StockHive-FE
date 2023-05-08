import logo from './logo.svg';
import './App.css';
import {
  Layout,
  Home,
  About,
  Login,
  SignUp,
} from './Pages'

import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<SignUp />} />
    </Route>
  )
)

export default function App() {
  return <RouterProvider router={router} />
}
