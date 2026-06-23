import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

const products = ["Proyect1", "Proyect2", "Proyect3"];

const displayItems = products.map(function(product){
  return "<li>" + product + "</li>"
});

console.log(displayItems);
