
const InstaPics = ({instaResponsiveClass}) => {

    if(instaResponsiveClass == 'hide'){
        return <></>
    }

    if(instaResponsiveClass=='medium'){
        return(
                <div className={`brewery-page-insta-pics ${instaResponsiveClass}`}>
                <a target="_blank" rel='noreferrer' href='https://www.instagram.com/m8beerco' className={`brewery-page-insta-pic ${instaResponsiveClass}`}>
                    <img src="static/images/insta/solo_sq.jpg" alt="" />
                </a>
                <a target="_blank" rel='noreferrer' href='https://www.instagram.com/m8beerco' className={`brewery-page-insta-pic ${instaResponsiveClass}`}>
                    <img src="static/images/insta/smiling_sq.jpg" alt="" />
                </a>
                <a target="_blank" rel='noreferrer' href='https://www.instagram.com/m8beerco' className={`brewery-page-insta-pic ${instaResponsiveClass}`}>
                    <img src="static/images/insta/pork_sq.jpg" alt="" />
                </a>
                <a target="_blank" rel='noreferrer' href='https://www.instagram.com/m8beerco' className={`brewery-page-insta-pic ${instaResponsiveClass}`}>
                    <img src="static/images/insta/group_sq.jpg" alt="" />
                </a>
                <a target="_blank" rel='noreferrer' href='https://www.instagram.com/m8beerco' className={`brewery-page-insta-pic ${instaResponsiveClass}`}>
                    <img src="static/images/insta/food_sq.jpg" alt="" />
                </a>
                <a target="_blank" rel='noreferrer' href='https://www.instagram.com/m8beerco' className={`brewery-page-insta-pic ${instaResponsiveClass}`}>
                    <img src="static/images/insta/drinking_sq.jpg" alt="" />
                </a>
            </div>
        )
    } else {
        return (
            <div className={`brewery-page-insta-pics ${instaResponsiveClass}`}>
            <a target="_blank" rel='noreferrer' href='https://www.instagram.com/m8beerco' className={`brewery-page-insta-pic ${instaResponsiveClass}`}>
                <img src="static/images/insta/solo_sq.jpg" alt="" />
            </a>
            <a target="_blank" rel='noreferrer' href='https://www.instagram.com/m8beerco' className={`brewery-page-insta-pic ${instaResponsiveClass}`}>
                <img src="static/images/insta/smiling_sq.jpg" alt="" />
            </a>
            <a target="_blank" rel='noreferrer' href='https://www.instagram.com/m8beerco' className={`brewery-page-insta-pic ${instaResponsiveClass}`}>
                <img src="static/images/insta/pork_sq.jpg" alt="" />
            </a>
            <a target="_blank" rel='noreferrer' href='https://www.instagram.com/m8beerco' className={`brewery-page-insta-pic ${instaResponsiveClass}`}>
                <img src="static/images/insta/group_sq.jpg" alt="" />
            </a>
            <a target="_blank" rel='noreferrer' href='https://www.instagram.com/m8beerco' className={`brewery-page-insta-pic ${instaResponsiveClass}`}>
                <img src="static/images/insta/food_sq.jpg" alt="" />
            </a>
            <a target="_blank" rel='noreferrer' href='https://www.instagram.com/m8beerco' className={`brewery-page-insta-pic ${instaResponsiveClass}`}>
                <img src="static/images/insta/drinking_sq.jpg" alt="" />
            </a>
            <a target="_blank" rel='noreferrer' href='https://www.instagram.com/m8beerco' className={`brewery-page-insta-pic ${instaResponsiveClass}`}>
                <img src="static/images/insta/dog_sq.jpg" alt="" />
            </a>
            <a target="_blank" rel='noreferrer' href='https://www.instagram.com/m8beerco' className={`brewery-page-insta-pic ${instaResponsiveClass}`}>
                <img src="static/images/insta/rugby_sq.jpg" alt="" />
            </a>
            <a target="_blank" rel='noreferrer' href='https://www.instagram.com/m8beerco' className={`brewery-page-insta-pic ${instaResponsiveClass}`}>
                <img src="static/images/insta/equip_sq.jpg" alt="" />
            </a>
    
        </div>
        )
    }

}

export default InstaPics