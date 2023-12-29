import { useEffect, useState } from "react"
import './Brewery.css'
const Brewery = () => {

    const [aboutUs, setAboutUs] = useState([])
    const [whyBaltimore, setWhyBaltimore] = useState('')
    const date = new Date();
    const day = date.getDay();
    const [readyToShow, setReadyToShow] = useState(false)
    const [imgLoaded, setImgLoaded] = useState(false)

    useEffect(()=>{
        const getPageData = async () => {
            willyJeff[0].src = "static/jeffwilly550x400.png"
            let res = await fetch("static/data/about-us.json", {headers:{'Content-Type' : 'application/json'}})
            let res_json = await res.json()
            setAboutUs(res_json['about-us'])
            setWhyBaltimore(res_json['why-baltimore'])
        }

        getPageData().then(()=>setTimeout(setReadyToShow(true), 100))
    },[])

    const renderedAboutUs = aboutUs.map((ele, index)=> <p>{ele}</p>)
    return (
        <>
        {readyToShow && imgLoaded && (
        <div className="brewery-content">
            <div className="about-us">
                <img src="static/jeffwilly550x400.png" alt="" onLoad={()=>setTimeout(setImgLoaded(true),200)}/>
                <div className='about-us-content'>
                    <h2 className='why-baltimore'>Welcome to M8 Brewery</h2>
                    {renderedAboutUs}
                    <h2 className='why-baltimore extra-top-padding'>Why Baltimore?</h2>
                    <p>{whyBaltimore}</p>
                </div>
            </div>
            <div className="brewery-image">
                <img src="static/brewery.jpg" alt="" />
                <div className="columns">
                <div className="column">
                    <div className="schedule">
                        <h1>Brewery Hours</h1>
                        <div className={`schedule-element ${day==1?'active':''}`}>
                            <div className="day">Monday:</div>
                            <div className="times">11am - 4pm</div>
                        </div>
                        <div className={`schedule-element ${day==2?'active':''}`}>
                            <div className="day">Tuesday:</div>
                            <div className="times">11am - 4pm</div>
                        </div>
                        <div className={`schedule-element ${day==3?'active':''}`}>
                            <div className="day">Wednesday:</div>
                            <div className="times">11am - 4pm</div>
                        </div>
                        <div className={`schedule-element ${day==4?'active':''}`}>
                            <div className="day">Thursday:</div>
                            <div className="times">10am - 8pm</div>
                        </div>
                        <div className={`schedule-element ${day==5?'active':''}`}>
                            <div className="day">Friday:</div>
                            <div className="times">10am - 10pm</div>
                        </div>
                        <div className={`schedule-element ${day==6?'active':''}`}>
                            <div className="day">Saturday:</div>
                            <div className="times">10am - 10pm</div>
                        </div>
                        <div className={`schedule-element ${day==0?'active':''}`}>
                            <div className="day">Sunday:</div>
                            <div className="times">10am - 10pm</div>
                        </div>
                        <div className={`schedule-element`}>
                            <div className="day ravens">Ravens Game Days:</div>
                            <div className="times ravens">9am - 11pm</div>
                        </div>
                    </div>
                </div>
                <div className="column">
                    <div className="maps">
                        <h1>Find Us</h1>
                        <h4>1399 S Sharp St, Baltimore MD 21230</h4>
                        <iframe className={`google-map`} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3088.5993925004855!2d-76.62260432355153!3d39.27465527164599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c8034237bfa2e3%3A0x7ec4158231a16683!2s1399%20S%20Sharp%20St%2C%20Baltimore%2C%20MD%2021230!5e0!3m2!1sen!2sus!4v1703045222112!5m2!1sen!2sus" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
            </div>


        </div>
        )}
        </>
    )
}

export default Brewery