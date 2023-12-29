import './Nav.css'
import { NavLink } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'
import { useState, useEffect } from 'react'
const Nav = () => {

    const isMobile = useMediaQuery({maxWidth: '638px'})
    const [responsiveClass, setResponsiveClass] = useState('full')
    const [scrolled, setScrolled] = useState(false)

    useEffect(()=>{
        window.onscroll = () => {
            if(window.scrollY > 300 ){
                setScrolled(true)
                return
            }

            if(window.scrollY < 100){
                setScrolled(false)
            }

        }
    },[])


    useEffect(()=>{
        if(isMobile){
            setResponsiveClass('mobile')
            return
        } else {
            setResponsiveClass('full')
            return
        }
    },[isMobile])

    return (
        <>
        {scrolled &&
        <div className={`header ${scrolled ? 'floating' : ''}`}>
            
                <NavLink to='/' className="nav-logo-floating-container">
                    <div className="nav-logo-floating">
                        <img src="static/main_logo.png" alt="" />
                    </div>
                </NavLink>
            
            <div className={`nav ${responsiveClass} floating`}>
                <NavLink to='menu' className={ ({ isActive }) => (isActive ? `active nav-item ${responsiveClass}` : `nav-item ${responsiveClass}`)}>Beers</NavLink>
                <NavLink to='brewery' className={ ({ isActive }) => (isActive ? `active nav-item ${responsiveClass}` : `nav-item ${responsiveClass}`)}>The Brewery</NavLink>
                <NavLink to='events' className={ ({ isActive }) => (isActive ? `active nav-item ${responsiveClass}` : `nav-item ${responsiveClass}`)}>Events</NavLink>
                <NavLink to='contact' className={ ({ isActive }) => (isActive ? `active nav-item ${responsiveClass}` : `nav-item ${responsiveClass}`)}>Contact</NavLink>
            </div>
        </div>
        }

        {!scrolled && 
        <div className={`header ${scrolled ? 'floating' : 'normal'}`}>
            
            <NavLink to='/' className="nav-logo-container">
                <div className="nav-logo">
                    <img src="static/main_logo.png" alt="" />
                </div>
            </NavLink>
            
            <div className={`nav ${responsiveClass} normal`}>
                <NavLink to='menu' className={ ({ isActive }) => (isActive ? `active nav-item ${responsiveClass}` : `nav-item ${responsiveClass}`)}>Beers</NavLink>
                <NavLink to='brewery' className={ ({ isActive }) => (isActive ? `active nav-item ${responsiveClass}` : `nav-item ${responsiveClass}`)}>The Brewery</NavLink>
                <NavLink to='events' className={ ({ isActive }) => (isActive ? `active nav-item ${responsiveClass}` : `nav-item ${responsiveClass}`)}>Events</NavLink>
                <NavLink to='contact' className={ ({ isActive }) => (isActive ? `active nav-item ${responsiveClass}` : `nav-item ${responsiveClass}`)}>Contact</NavLink>
            </div>
        </div>
        }
        {scrolled && <div className="holder"></div>}

        </>
    ) 
}

export default Nav