import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client' 
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './router'
import { Toaster } from 'react-hot-toast';
createRoot(document.getElementById('root')!).render(
  <StrictMode> 
    <Toaster/>
    <RouterProvider router={router} />
  </StrictMode>,
)
