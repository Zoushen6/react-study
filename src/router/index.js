import {
  createBrowserRouter
} from 'react-router-dom'
import Root from '../routes/Root'
import App from '../App'
import React from 'react'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    redirect: '/test',
    children: [{
      path: '/test',
      element: <App />
    }]
  },
  {
    path: '/test',
    element: <App />
  }
])

export default router
