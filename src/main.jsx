import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {App} from './App.jsx'
import { Conditional } from './Conditinal.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <Conditional/> */}
   
  </StrictMode>
)
