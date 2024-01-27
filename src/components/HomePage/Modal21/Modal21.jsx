import './Modal21.scss'

const Modal21 = ({setOver21}) => {
    return (
        <div className="modal-21">
            <div className="modal-21-logo">
                <img src="static/images/transparent-clay-logo.png" alt="" />
            </div>
            <div className="modal-21-content">
                <h4>Are you over 21?</h4>
                <div className="modal-21-buttons">
                    <div onClick={()=>setOver21(true)}className="modal-21-button">Yes</div>
                    <div onClick={()=>window.location='https://www.toysrus.com'}className="modal-21-button">No</div>
                </div>
            </div>
        </div>
    )
}

export default Modal21