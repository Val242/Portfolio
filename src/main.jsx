import {
  createBrowserRouter,
  RouterProvider
} from "react-router"
import ReactDOM from "react-dom/client"
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import About from "./About.jsx"
import Services from "./Services.jsx"
import Contact from "./Contact.jsx"




const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>

  },
  {
    path: "/about",
    element: <About/>
    
  },
   {
    path: "/services",
    element: <Services />
    
  },
   {
    path: "/contact",
    element: <Contact />
    
  },



])




createRoot(document.getElementById('root')).render(
  <RouterProvider router = {router}></RouterProvider>
)