import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Product from './pages/Product'
import About from './pages/About'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <BrowserRouter>
   <Routes>

    <Route path="/" element={<Home />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/products" element={<Product />} />

    <Route path="/about" element={<About />} />


   </Routes>
   
   
   </BrowserRouter>
   </>
  )
}

export default App
