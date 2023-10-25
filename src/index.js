import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// import 'antd/dist/reset.css'
// import App from './App'
import router from './router/index'
import reportWebVitals from './reportWebVitals'
import {
  RouterProvider
} from 'react-router-dom'

import { registerMicroApps, start } from 'qiankun'

registerMicroApps([
  {
    name: 'vue app',
    entry: { scripts: ['//127.0.0.1:5173//main.js'] },
    container: '#container',
    activeRule: '/vue-app'
  }
])
start()
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
