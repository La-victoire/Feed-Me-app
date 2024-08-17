import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Restaurant } from './Restaurant.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Restaurant />
  </StrictMode>,
)
