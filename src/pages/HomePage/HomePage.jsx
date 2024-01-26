import './HomePage.scss'

import FullPageNav from '../../components/FullPageNav/FullPageNav'
import Schedule from '../../components/Schedule/Schedule'
import BeerSplash from '../../components/BeerSplash/BeerSplash'
import Socials from '../../components/Socials/Socials'
import FindUs from '../../components/FindUs/FindUs'
const HomePage = () => {



    return (
        <>
        <div className="home">
            <FullPageNav/>
            <Schedule/>
            <BeerSplash/>
            <Socials/>
            <FindUs/>
        </div>
        </>
    )
}

// comment

export default HomePage