import './Socials.scss'
import { IoLogoInstagram } from "react-icons/io5";

const Socials = () => {
    return (
        <div className="socials">
            <h1 className="socials-title">Follow Us on Social Media</h1>
            <div className="socials-icons">
                <div className="insta-link">
                    <IoLogoInstagram/>
                </div>
            </div>
            <div className="mailing-list">
                <h1 className='mailing-list-title'>Join Our Mailing List:</h1>
                <input className='mailing-list-input' placeholder='Enter your email'type="text" />
                <div className="mailing-list-join">Join</div>
            </div>
            
        </div>
    )
}

export default Socials