import './BreweryPage.css'
import {useMediaQuery} from 'react-responsive'
import { useState, useEffect } from 'react'
import InstaPics from '../../components/insta/InstaPics'
const BreweryPage = ({responsiveClass}) => {

    const aboutus = `
    Welcome to M8 Brewery, where our passion for crafting fresh and easily enjoyable beer comes alive with an Aussie flair. Our story originated among a group of friends who shared a deep appreciation for beer and a desire to bring something distinctive to the brewing scene. The opportunity to establish our brewery arose when the accomplished Checkerspot Brewery relocated, leaving behind their award-winning equipment.
    Infused with our Australian roots and a commitment to producing top-notch beer, M8 Brewery has evolved into a vibrant and inviting destination to gather with friends. Our tap room offers a unique experience, serving cold beer directly from the tanks, allowing you to savor a variety of our meticulously crafted beer styles. Complementing our brews is a delectable menu featuring Aussie-inspired cuisine.
    Join us at M8 Brewery for a memorable time, where you can share a cold M8 Beer with your mates and immerse yourself in the lively atmosphere of our brewery!`

    const whybalt = `
    Jeff (the guy with hair in the photo) grew up on the sunny Gold Coast in Australia and always loved beer, especially craft beer with flavour! Jeff was a professional squash player (silly sport we know) and a post game beer was his favourite! When he came to Baltimore in 1999, Jeff fell in love with this town and when the chance to start a brewery here came, he jumped like a kangaroo! We aren't letting Jeff brew the beer, but we can guarantee he will be trying every single one that we produce the first chance he gets! Come grab a beer with him some time, he loves a chat! (P.S. The bald guy is world famous squash player and beer aficionado Chris Walker).`

    const RenderedText = ({text}) => {
        let split = text.split('\n')
        return (
            <div className={`rendered-text`}>
                {split.map((ele, index)=> <p className={`rendered-text-block ${responsiveClass}`} key={index}>{ele}</p>)}
            </div>
        )
    }

    const isLessThan1805 = useMediaQuery({maxWidth:1804, minWidth:1597})
    const between1804and1596 = useMediaQuery({maxWidth:1596, minWidth: 1222})
    const between1596and1221 = useMediaQuery({maxWidth:1221, minWidth: 1083})
    const islessThan1082 = useMediaQuery({maxWidth:1082})

    const [instaResponsiveClass, setInstaResponsiveClass] = useState('')

    useEffect(()=>{
      if(isLessThan1805){
            setInstaResponsiveClass('large')
      } else if(between1804and1596){
            setInstaResponsiveClass('medium')
      } else if (between1596and1221){
            setInstaResponsiveClass('small')
      } else if (islessThan1082){
            setInstaResponsiveClass('hide')
    } else {
            setInstaResponsiveClass('')
      }
    }, [isLessThan1805, between1804and1596, between1596and1221, islessThan1082])
    

    if(responsiveClass == 'small'){
        return(
                <div className="brewery-wrapper">
                    <div className="columns">
                    <div className={`column ${instaResponsiveClass=='hide' ? 'is-one-third' : 'is-one-fifth'}`}>
                            <div className="schedule-block">
                                <div className={`brewery-page-title ${responsiveClass}`}>Hours</div>
                                <div className='about-us-schedule'>
                                    <p>Monday <span>4pm - 10pm</span></p>
                                    <p>Tuesday <span>4pm - 10pm</span></p>
                                    <p>Wednesday <span>4pm - 10pm</span></p>
                                    <p>Thursday <span>4pm - 10pm</span></p>
                                    <p>Friday <span>11am - 11pm</span></p>
                                    <p>Saturday <span>11am - 11pm</span></p>
                                    <p>Sunday <span>11am - 11pm</span></p>
                                    <p className='about-us-ravens'>Ravens Game Days <span>9am - 11pm</span></p>
                                </div>
                            </div>
                            <div className="location-block">
                                <div className={`brewery-page-title ${responsiveClass}`}>Find Us</div>
                                <p>1399 S Sharp St, Baltimore MD 21230</p>
                                <div className="map">
                                    <iframe className={`google-map ${instaResponsiveClass}`} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3088.5993925004855!2d-76.62260432355153!3d39.27465527164599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c8034237bfa2e3%3A0x7ec4158231a16683!2s1399%20S%20Sharp%20St%2C%20Baltimore%2C%20MD%2021230!5e0!3m2!1sen!2sus!4v1703045222112!5m2!1sen!2sus" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                                </div>
        
                            </div>
                        </div>
                        <div className={`column ${instaResponsiveClass=='hide' ? 'is-two-thirds' : 'is-two-fifths'}`}>
                            <div className={`brewery-page-title ${responsiveClass}`}>About Us</div>
                            <div className={`brewery-page-about-us-image-wrapper`}>
                                    <img className={`brewery-page-about-us-image ${responsiveClass}`} src="static/images/jeffwilly.webp" alt="" />
                                </div>
                            <div className={`brewery-page-about-us ${responsiveClass}`}>

                                <div className={`brewery-page-about-us-content ${responsiveClass}`}>
                                    <RenderedText text={aboutus}/>
                                </div>
                            </div>
                            <div className={`brewery-page-why-baltimore-content`}>
                                <span className={`brewery-page-why-baltimore-title`}>Why Baltimore? and why Aussie Beer?</span>
                                <RenderedText text={whybalt}/>
                            </div>
                        </div>
                        <div className={`column is-two-fifths ${instaResponsiveClass}`}>
                            <InstaPics instaResponsiveClass={instaResponsiveClass}/>
                        </div>


                    </div>
                </div>
            )
    }

    return (
        <div className="brewery-wrapper">
            <div className="columns">
                <div className={`column ${instaResponsiveClass=='hide' ? 'is-two-thirds' : 'is-two-fifths'}`}>
                    <div className={`brewery-page-title ${responsiveClass}`}>About Us</div>
                    <div className={`brewery-page-about-us ${responsiveClass}`}>
                        <div className={`brewery-page-about-us-image-wrapper`}>
                            <img className={`brewery-page-about-us-image ${responsiveClass}`} src="static/public/jeffwilly.webp" alt="" />
                        </div>
                        <div className={`brewery-page-about-us-content ${responsiveClass}`}>
                            <RenderedText text={aboutus}/>
                        </div>
                    </div>
                    <div className={`brewery-page-why-baltimore-content`}>
                        <span className={`brewery-page-why-baltimore-title`}>Why Baltimore? and why Aussie Beer?</span>
                        <RenderedText text={whybalt}/>
                    </div>
                </div>
                <div className={`column is-two-fifths ${instaResponsiveClass}`}>
                    <InstaPics instaResponsiveClass={instaResponsiveClass}/>
                </div>
                <div className={`column ${instaResponsiveClass=='hide' ? 'is-one-third' : 'is-one-fifth'}`}>
                    <div className="schedule-block">
                        <div className="brewery-page-title">Hours</div>
                        <div className='about-us-schedule'>
                            <p>Monday <span>4pm - 10pm</span></p>
                            <p>Tuesday <span>4pm - 10pm</span></p>
                            <p>Wednesday <span>4pm - 10pm</span></p>
                            <p>Thursday <span>4pm - 10pm</span></p>
                            <p>Friday <span>11am - 11pm</span></p>
                            <p>Saturday <span>11am - 11pm</span></p>
                            <p>Sunday <span>11am - 11pm</span></p>
                            <p className='about-us-ravens'>Ravens Game Days <span>9am - 11pm</span></p>
                        </div>
                    </div>
                    <div className="location-block">
                        <div className="brewery-page-title">Find Us</div>
                        <p>1399 S Sharp St, Baltimore MD 21230</p>
                        <div className="map">
                            <iframe className={`google-map ${instaResponsiveClass}`} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3088.5993925004855!2d-76.62260432355153!3d39.27465527164599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c8034237bfa2e3%3A0x7ec4158231a16683!2s1399%20S%20Sharp%20St%2C%20Baltimore%2C%20MD%2021230!5e0!3m2!1sen!2sus!4v1703045222112!5m2!1sen!2sus" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>

                    </div>

                </div>



            </div>
        </div>
    )
}

export default BreweryPage