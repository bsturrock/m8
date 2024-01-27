import './Socials.scss'
import { IoLogoInstagram } from "react-icons/io5";
import { useState, useRef } from 'react';
import Spinner from '../../Universal/Spinner/Spinner';
const Socials = () => {

    const mailingList = useRef(null)
    const [waiting, setWaiting] = useState(false)
    const [addedToMailingList, setAddedToMailingList] = useState(false)
    const [message, setMessage] = useState({status:null, message:''})

    const handleFocusOfMailingInput = () => {
        setMessage({status:null,message:''})
    }

    const joinButtonContent = () => {
        if(waiting){
            return <div className="spinner-wrapper"><Spinner/></div>
        } else {
            return 'Join'
        }
    }

    const ErrorMessage = () => {
        if(message.status==400){
            return (
                <div className="error-message">{message.message}</div>
            )
        } else {
            return (
            <div className="message-placeholder">x</div>
            )
        }
    }

    const handleMailListClick = async () => {
        
        let pattern = /^[^@]+@[^@]+\.[^@]+$/
        if(pattern.test(mailingList.current.value)){
            const res = await fetch('https://www.sturrocket.com/m8/emails', {
                method: 'POST',
                headers: {
                    "Content-Type" : 'application/json',
                    'Access-Control-Allow-Origin' : '*'
                },
                body: JSON.stringify({email: mailingList.current.value})
            });
            if(res.ok){
                setAddedToMailingList(true)
                setMessage({status:200, message:'Joined'})
            } else if(res.status == 403){
                setMessage({status:400, message: 'You\'re already on the list!'})
            } else if(res.status == 404){
                setMessage({status:400, message: 'Something went wrong.'})
            }
        } else {
            setMessage({status: 400, message: 'Doesn\'t look like an email.'})
        }
        setWaiting(false)
    }

    return (
        <div className="socials">
            <h1 className="socials-title">Follow Us on Social Media</h1>
            <div className="socials-icons">
                <div className="insta-link">
                    <IoLogoInstagram/>
                </div>
            </div>
            <div className="mailing-list">
                {!addedToMailingList && <>
                    <h1 className='mailing-list-title'>Join Our Mailing List:</h1>
                    <input onChange={handleFocusOfMailingInput} ref={mailingList} className='mailing-list-input' placeholder='Enter your email'type="text" />
                    <div onClick={()=> {setWaiting(true); handleMailListClick();}} className="mailing-list-join">{joinButtonContent()}</div>
                    </>
                }
                {addedToMailingList &&
                    <h1 className='joined-mailing-list'>Thanks For Joining!</h1>
                }
            </div>
            <ErrorMessage/>
            
        </div>
    )
}

export default Socials