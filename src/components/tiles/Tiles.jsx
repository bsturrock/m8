import './Tiles.css'
import { Link } from 'react-router-dom'

const Tiles = ({responsiveClass, showAnims, setShowAnims}) => {

    return (
        <div className={`tiles-container ${responsiveClass}`}>
                <div className={`${showAnims ? 'fall-0' : ''} image-tile ${responsiveClass}`}>
                    <img className={`${showAnims ? 'fall-0' : ''} image-raw ${responsiveClass}`} src="src/assets/kangaroo_sq.jpg"/>
                </div>
                <div className={`${showAnims ? 'fall-1' : ''} image-tile ${responsiveClass}`}>
                    <img className={`${showAnims ? 'fall-1' : ''} image-tile ${responsiveClass}`} src="src/assets/m8_sq.jpeg"/>
                </div>
                <Link to='brewery' className={`${showAnims ? 'fall-2' : ''} text-tile ${responsiveClass}`}>
                    <h1>Brewery Hours</h1>
                    <div className={`schedule ${responsiveClass}`}>
                        <p>Monday <span>4pm - 10pm</span></p>
                        <p>Tuesday <span>4pm - 10pm</span></p>
                        <p>Wednesday <span>4pm - 10pm</span></p>
                        <p>Thursday <span>4pm - 10pm</span></p>
                        <p>Friday <span>11am - 11pm</span></p>
                        <p>Saturday <span>11am - 11pm</span></p>
                        <p>Sunday <span>11am - 11pm</span></p>
                        <p className={`ravens ${responsiveClass}`}>Ravens Game Days <span>9am - 11pm</span></p>
                    </div>
                </Link>
                <div className={`${showAnims ? 'fall-3' : ''} image-tile ${responsiveClass}`}>
                    <img  className={`${showAnims ? 'fall-3' : ''} image-raw ${responsiveClass}`} src="src/assets/beercans_sq.jpeg"/>
                </div>
                <div className={`${showAnims ? 'fall-4' : ''} image-tile ${responsiveClass}`}>
                    <img className={`${showAnims ? 'fall-4' : ''} image-raw ${responsiveClass}`} src="src/assets/burger_sq.jpg"/>
                </div>   
                <Link to='menu' className={`${showAnims ? 'fall-5' : ''} text-tile ${responsiveClass}`}>
                    <div>Beer & Food</div>
                    <div>Menu</div>
                </Link>         
                <div className={`${showAnims ? 'fall-6' : ''} image-tile ${responsiveClass}`}>
                    <img className={`${showAnims ? 'fall-6' : ''} image-raw ${responsiveClass}`} src="src/assets/beers_sq.jpg"/>
                </div>

                <div className={`${showAnims ? 'fall-7' : ''} image-tile ${responsiveClass}`}>
                    <img  className={`${showAnims ? 'fall-7' : ''} image-raw ${responsiveClass}`} onAnimationEnd={()=>setShowAnims(false)}src="src/assets/kangar_sq.jpg"/>
                </div>
            </div>
    )
}

export default Tiles