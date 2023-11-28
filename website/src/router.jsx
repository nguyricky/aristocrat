import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter  } from 'react-router-dom'
import './index.css'

import { 
  Build,
  Main
} from './components/index'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Build />,
  },
  {
    path: "/dev",
    element: <Main />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)