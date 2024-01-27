import './FullPageNav.scss'
import { useState } from 'react'
const FullPageNav = () => {

    const [showImage, setShowImage] = useState(false)
    
    return (
        <>
        <div className="full-page-nav">
            <img onLoad={()=>setShowImage(true)} id='splash-image' className={showImage?'show-splash':''} src="static/images/variant-brewing-darker.png" alt="" />
            <div className="main-navigation-wrapper">
                <div className="main-navigation">
                    <div className="navigation-item">
                        <div className="nav-selector left">Beers</div>
                    </div>
                    <div className="navigation-item">
                    <div className="nav-selector left">Brewery</div>
                    </div>
                    <div className="navigation-item">
                        <img className="brand-logo" src="static/images/transparent-white-logo.png" alt="" />
                    </div>
                    <div className="navigation-item">
                        <div className="nav-selector right">Events</div>
                    </div>
                    <div className="navigation-item">
                        <div className="nav-selector right">Contact</div>
                    </div>
                </div>
            </div>
            <div className="nav-splash">
                <h1 className="nav-greeting">G&#39;DAY, M8!</h1>
                <div className="button-holder">
                    <div className="nav-button">MENU</div>
                </div>
                <div className="button-holder">
                    <div className="nav-button">The Brewery</div>
                </div>
            </div>
        </div>
        </>
    )

}

export default FullPageNav