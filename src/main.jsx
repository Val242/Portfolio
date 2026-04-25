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
    element: <App />

  },
  {
    path: "/about",
    element: <About />

  },
  {
    path: "/services",
    element: <Services />

  },
  {
    path: "/projects",
    element: <Projects />

  },
  {
    path: "/contact",
    element: <Contact />

  },



])




import { ThemeProvider } from './ThemeContext.jsx'
import Projects from "./Projects.jsx"

createRoot(document.getElementById('root')).render(
  <ThemeProvider>
    <RouterProvider router={router}></RouterProvider>
  </ThemeProvider>
)