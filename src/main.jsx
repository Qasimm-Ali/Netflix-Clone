import React from 'react'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import LoginPage from './Components/LoginPage.jsx'

const router = createBrowserRouter([
  {
    path : "/",
    element  : <App/>
  },
  {
    path : "/login",
    element : <LoginPage/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
