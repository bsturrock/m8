import './Footer.scss'
import { IoMdRocket } from "react-icons/io";


const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-copyright">
                Copyright 2024 M8 Brewing Co. All Rights Reserved
            </div>
            <div className="rocket">
                <IoMdRocket />
            </div>
            <div className="footer-powered-by">
                Launched by sturrocket.com 
            </div>
        </div>
    )
}

export default Footer