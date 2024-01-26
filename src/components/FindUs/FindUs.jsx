import './FindUs.scss'

const FindUs = () => {
    return (
        <div className="find-us">
            <div className="brand-slogan">
                <h2>Good Beers.</h2>
                <h2>Good M8s.</h2>
                <h2>Good Times.</h2>
            </div>
            <div className="google-map-section">
                <h2>Come Visit Us!</h2>
                <iframe className='google-map' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12354.397565002344!2d-76.6200294!3d39.2746553!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c8030147121c5b%3A0x3ff90ef9834ad6c1!2sM8%20Beer!5e0!3m2!1sen!2sus!4v1706291449868!5m2!1sen!2sus" style={{border:0}} allowFullscreen="" loading="lazy" ></iframe>
            </div>
        </div>
    )
}

export default FindUs