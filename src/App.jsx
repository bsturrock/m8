
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Nav from './components/Nav'
import Menu from './pages/Menu'
import Brewery from './pages/Brewery'
import Events from './pages/Events'

function App() {

  return (
    <div className="app">
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/menu' element={<Menu/>}/>
        <Route path='/brewery' element={<Brewery/>}></Route>
        <Route path='/events' element={<Events/>}></Route>
      </Routes>
    </div>


  )
}

export default App
