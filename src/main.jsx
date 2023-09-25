import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home/Home'
import Applied_job from './components/Applied_job/Applied_job'
import Statistics from './components/Statistics/Statistics'
import Blog from './components/Blog/Blog'
import Home_page from './components/Home_page/Home_page'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children: [
      {
        path: '/',
        element: <Home_page></Home_page>
      },
      {
        path: '/applied-job',
        element: <Applied_job></Applied_job>
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
