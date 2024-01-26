import './HomePage.scss'

import FullPageNav from '../../components/FullPageNav/FullPageNav'
import Schedule from '../../components/Schedule/Schedule'

const HomePage = () => {



    return (
        <>
        <div className="home">
            <FullPageNav/>
            <Schedule/>
        </div>
        </>
    )
}

// comment

export default HomePage