// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Product from './pages/Product.jsx'
import Contact from './pages/Contact.jsx'
import About from './pages/About.jsx'
import NotFound from './pages/Notfound.jsx'
import SingleProduct from './pages/SingleProduct.jsx'
import Home from './pages/Home.jsx'

const router = createBrowserRouter([
  {
    path : "/",
    element : <Layout />,
    children : [
      {
        path : "",
        element : <Home/>
      },
      {
        path : "About",
        element : <About/>
      },
      {
        path : "Contact",
        element : <Contact/>
      },
      {
        path : "Product",
        element : <Product/>
      },
      {
        path : "singleproduct/:id",
        element : <SingleProduct/>
      },
      {
        path : "*",
        element : <NotFound/>
      }
    ]

  }  
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)