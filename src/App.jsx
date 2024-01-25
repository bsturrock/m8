
import './App.css'
import HomePage from './pages/HomePage/HomePage'
import AdminPage from './pages/AdminPage/AdminPage'
import { Routes, Route } from 'react-router-dom'
function App() {

  return (
    <>
    <div className="app">
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/admin' element={<AdminPage/>}/>
      </Routes>
    </div>

    
    </>
  )
}

export default App
