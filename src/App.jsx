
import './App.css'
import HomePage from './pages/HomePage/HomePage'
import AdminPage from './pages/AdminPage/AdminPage'
import { Routes, Route } from 'react-router-dom'
import Modal21 from './components/HomePage/Modal21/Modal21'
import { useState } from 'react'

function App() {
  const [over21, setOver21] = useState(true)
  return (
    <>
    {!over21 && <Modal21 setOver21={setOver21}/>}
    {over21 && 
    <div className="app">
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/admin' element={<AdminPage/>}/>
      </Routes>
    </div>
    }
    </>
  )
}

export default App
