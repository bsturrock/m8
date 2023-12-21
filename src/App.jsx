import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import MenuPage from './pages/menu/MenuPage';
import BreweryPage from './pages/brewery/BreweryPage';
import 'bulma/css/bulma.min.css'
import Nav from './components/nav/Nav';
import { useMediaQuery } from 'react-responsive';
import { useState, useEffect } from 'react';
function App() {

  const isLessThan509 = useMediaQuery({maxWidth: 509})
  const between510and949 = useMediaQuery({minWidth:510, maxWidth:949})
  const between950and1407 = useMediaQuery({minWidth:950, maxWidth:1407})

  const [responsiveClass, setResponsiveClass] = useState('')
  const [showAnims, setShowAnims] = useState(true)

  useEffect(()=>{
    if(isLessThan509){
        setResponsiveClass('small')
    } else if(between510and949){
        setResponsiveClass('medium')
    } else if(between950and1407){
        setResponsiveClass('large')
    } else {
        setResponsiveClass('')
    }
  }, [isLessThan509, between510and949, between950and1407])

  return (
    <div className="app">
      <Nav responsiveClass={responsiveClass}/>
      <Routes>
          <Route path='/' element={<HomePage responsiveClass={responsiveClass} showAnims={showAnims} setShowAnims={setShowAnims}/>}/>
          <Route path='/menu' element={<MenuPage responsiveClass={responsiveClass}/>} />
          <Route path='/brewery' element={<BreweryPage responsiveClass={responsiveClass}/>} />
      </Routes>
    </div>
  )
}

export default App
