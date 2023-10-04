import React from 'react'
import ReactDOM from 'react-dom/client'
import'./index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/contact/contact'
import Github from './components/github/github'
import User from './components/user/user'

// const router = createBrowserRouter([
//    {
//    path: '/',
//     element: <Layout/>,
//     children: [
//       {
//         path: "",
//         element: <Home />
//       },
//       {
//         path: "about",
//         element: <About />
//       },{
//         path:"Contact",
//         element:<Contact/>
//       },
//       {
//         path:"user",
//         element:<User/>
//       },{
//         path:"github",
//         element:<Github/>
//       }


//       ]
//     }
  
// ])
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route 
      path='github' element={<Github />} />
   
    </Route>
  )
)



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)