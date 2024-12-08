import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import MainLayout from './layouts/MainLayout.jsx'
import Home from './pages/Home.jsx'
import Vision from './pages/Vision.jsx'
import Documentation from './pages/Documentation.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Home />} />
      <Route path="vision" element={<Vision />} />
      <Route path="documentation" element={<Documentation />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)