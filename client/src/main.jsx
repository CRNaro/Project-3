import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ApolloProvider } from '@apollo/client'
import { ApolloClient, InMemoryCache } from '@apollo/client'
import 'bootstrap/dist/css/bootstrap.min.css'

import App from './App.jsx'
import Home from './pages/Home.jsx'
import Customer from './pages/Customer.jsx'
//--import pages here--

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache()
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <ApolloProvider client={client}>
  <Router>
    <Routes>
      <Route path='/' element={<App />} />
      <Route index element={<Home />} />
      <Route path='/customer' element={<Customer />} />
      {/* ADD routes to pages here */}
    </Routes>
  </Router>
  </ApolloProvider>
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
