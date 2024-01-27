import './HomePage.scss'

import FullPageNav from '../../components/HomePage/FullPageNav/FullPageNav'
import Schedule from '../../components/HomePage/Schedule/Schedule'
import BeerSplash from '../../components/HomePage/BeerSplash/BeerSplash'
import Socials from '../../components/HomePage/Socials/Socials'
import FindUs from '../../components/HomePage/FindUs/FindUs'
import Footer from '../../components/Universal/Footer/Footer'
const HomePage = () => {


    return (
        <>
            <div className="home">
                <FullPageNav/>
                <Schedule/>
                <BeerSplash/>
                <Socials/>
                <FindUs/>
                <Footer/>
            </div>
        </>
    )
}

// comment

export default HomePage