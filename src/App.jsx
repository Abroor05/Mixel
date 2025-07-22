import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import Footer from './components/footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>

        <Navbar />

        <Routes >
          <Route path='/' element={<Home/>} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
