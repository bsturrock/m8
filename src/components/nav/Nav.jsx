import './Nav.css'
import { NavLink, Link } from 'react-router-dom'


const Nav = ({responsiveClass}) => {
    return (
        <>
        <div className="logo-holder">

            <Link to='/' className={`fall-0 nav-image-holder ${responsiveClass}`}>
                <img id={`nav-image ${responsiveClass}`} src="static/images/logo_fixed.png"></img>
            </Link>

        </div>

        <nav>
            <div className={`nav-holder fall-0 ${responsiveClass}`}>
                <NavLink to='menu' className={ ({ isActive }) => (isActive ? `active navigation-link ${responsiveClass}` : `navigation-link ${responsiveClass}`)}>Beers</NavLink>
                <NavLink to='brewery' className={({ isActive }) => (isActive ? `active navigation-link ${responsiveClass}` : `navigation-link ${responsiveClass}`)}>The Brewery</NavLink>
                <NavLink to='events' className={({ isActive }) => (isActive ? `active navigation-link ${responsiveClass}` : `navigation-link ${responsiveClass}`)}>Events</NavLink>
                <NavLink to='contact' className={({ isActive }) => (isActive ? `active navigation-link ${responsiveClass}` : `navigation-link ${responsiveClass}`)}>Contact Us</NavLink>
            </div>
        </nav>
      </>)
}

export default Nav