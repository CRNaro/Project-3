


import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import App from './App.jsx'
import Home from './pages/Home.jsx'
//--import pages here--


ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <Routes>
      <Route path='/' element={<App />} />
      <Route index element={<Home />} />
      {/* ADD routes to pages here */}
    </Routes>
  </Router>
)














// Old build code
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//     errorElement: <h1 className='display-2'>Wrong page!</h1>,
//     children: [
//       {
//         index: true,
//         element: <Home />
//       }, 
//     //--ADD links to pages here--
//     ]
//   }
// ])
