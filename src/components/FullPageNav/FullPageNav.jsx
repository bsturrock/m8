import './FullPageNav.scss'
import { useState } from 'react'
const FullPageNav = () => {

    const [showImage, setShowImage] = useState(false)
    
    return (
        <>
        <div className="full-page-nav">
            <img onLoad={()=>setShowImage(true)} id='splash-image' className={showImage?'show-splash':''} src="public/static/images/variant-brewing-darker.png" alt="" />
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
                    <div className="nav-button">HOURS</div>
                </div>
            </div>
        </div>
        <div className="content-block">
            <h1>Welcome to M8!</h1>
            <p>Discover the essence of M8 Beer, where passion meets craft in every sip. Born from the camaraderie of mates with a shared love for beer, our journey took an exciting turn when we seized the opportunity to open a brewery in Baltimore. With Aussie roots and a commitment to creating high-quality, easy-to-enjoy craft beer, M8 Brewery is your go-to spot for a fun and unique experience. Our tap room offers a direct taste of our award-winning beer straight from the tanks, featuring various styles to explore. Join us for a M8 Beer and savor Aussie-inspired delights from our menu. </p>
        </div>
        <div className="content-block">
            <div className="content-wrapper beer-image">
            <div className="image-holder"></div>
                <div className="schedule">
                    <h1>Hours</h1>
                    <div className="schedule-columns">

                        <div className="schedule-days">
                            <h4 className="schedule-day">Sunday:</h4>
                            <h4 className="schedule-day">Monday:</h4>
                            <h4 className="schedule-day">Tuesday:</h4>
                            <h4 className="schedule-day">Wednesday:</h4>
                            <h4 className="schedule-day">Thursday:</h4>
                            <h4 className="schedule-day">Friday:</h4>
                            <h4 className="schedule-day">Saturday:</h4>
                            <h4 className="schedule-day ravens">Ravens Gamedays:</h4>
                        </div>
                        <div className="schedule-hours">
                            <h4 className="schedule-hour">9am - 10pm</h4>
                            <h4 className="schedule-hour">9am - 10pm</h4>
                            <h4 className="schedule-hour">9am - 10pm</h4>
                            <h4 className="schedule-hour">9am - 10pm</h4>
                            <h4 className="schedule-hour">9am - 10pm</h4>
                            <h4 className="schedule-hour">9am - 10pm</h4>
                            <h4 className="schedule-hour">9am - 10pm</h4>
                            <h4 className="schedule-hour ravens">9am - 12am</h4>
                        </div>
                    </div>

                </div>

            </div>
            
        </div>
        <div className="content-block">
            <div className="content-wrapper">
                <div className="location-info">
                    <h3>1399 S Sharp St, Baltimore MD 21230</h3>
                <p>Between Top Golf and Fed Hill, you will find M8 Beer on the corner of South Sharp St and West Ostend.
We are in the old Checkerspot Brewery location. We are dog friendly and the kitchen is open!</p>    
                </div>
            
    <iframe className='google-map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1292.2369543605707!2d-76.6208353260298!3d39.274603921254666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c8030147121c5b%3A0x3ff90ef9834ad6c1!2sM8%20Beer!5e0!3m2!1sen!2sus!4v1706202492366!5m2!1sen!2sus" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            
        </div>
        </>
    )

}

export default FullPageNav