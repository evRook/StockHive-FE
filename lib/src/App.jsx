import logo from './logo.svg';
import './App.css';
import {
  Layout,
  Home
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
    </Route>
  )
)

export default function App() {
  return <RouterProvider router={router} />
}
