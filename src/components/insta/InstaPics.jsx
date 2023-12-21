
const InstaPics = ({instaResponsiveClass}) => {

    if(instaResponsiveClass == 'hide'){
        return <></>
    }

    if(instaResponsiveClass=='medium'){
        return(
                <div className={`brewery-page-insta-pics ${instaResponsiveClass}`}>
                <a target="_blank" rel='noreferrer' href='https://www.instagram.com/m8beerco' className={`brewery-page-insta-pic ${instaResponsiveClass}`}>
                    <img src="src/assets/insta/solo_sq.jpg" alt="" />
                </a>
                <a target="_blank" rel='noreferrer' href='https://www.instagram.com/m8beerco' className={`brewery-page-insta-pic ${instaResponsiveClass}`}>
                    <img src="src/assets/insta/smiling_sq.jpg" alt="" />
                </a>
                <a target="_blank" rel='noreferrer' href='https://www.instagram.com/m8beerco' className={`brewery-page-insta-pic ${instaResponsiveClass}`}>
                    <img src="src/assets/insta/pork_sq.jpg" alt="" />
                </a>
                <a target="_blank" rel='noreferrer' href='https://www.instagram.com/m8beerco' className={`brewery-page-insta-pic ${instaResponsiveClass}`}>
                    <img src="src/assets/insta/group_sq.jpg" alt="" />
                </a>
                <a target="_blank" rel='noreferrer' href='https://www.instagram.com/m8beerco' className={`brewery-page-insta-pic ${instaResponsiveClass}`}>
                    <img src="src/assets/insta/food_sq.jpg" alt="" />
                </a>
                <a target="_blank" rel='noreferrer' href='https://www.instagram.com/m8beerco' className={`brewery-page-insta-pic ${instaResponsiveClass}`}>
                    <img src="src/assets/insta/drinking_sq.jpg" alt="" />
                </a>
            </div>
        )
    } else {
        return (
            <div className={`brewery-page-insta-pics ${instaResponsiveClass}`}>
            <a target="_blank" rel='noreferrer' href='https://www.instagram.com/m8beerco' className={`brewery-page-insta-pic ${instaResponsiveClass}`}>
                <img src="src/assets/insta/solo_sq.jpg" alt="" />
            </a>
            <a target="_blank" rel='noreferrer' href='https://www.instagram.com/m8beerco' className={`brewery-page-insta-pic ${instaResponsiveClass}`}>
                <img src="src/assets/insta/smiling_sq.jpg" alt="" />
            </a>
            <a target="_blank" rel='noreferrer' href='https://www.instagram.com/m8beerco' className={`brewery-page-insta-pic ${instaResponsiveClass}`}>
                <img src="src/assets/insta/pork_sq.jpg" alt="" />
            </a>
            <a target="_blank" rel='noreferrer' href='https://www.instagram.com/m8beerco' className={`brewery-page-insta-pic ${instaResponsiveClass}`}>
                <img src="src/assets/insta/group_sq.jpg" alt="" />
            </a>
            <a target="_blank" rel='noreferrer' href='https://www.instagram.com/m8beerco' className={`brewery-page-insta-pic ${instaResponsiveClass}`}>
                <img src="src/assets/insta/food_sq.jpg" alt="" />
            </a>
            <a target="_blank" rel='noreferrer' href='https://www.instagram.com/m8beerco' className={`brewery-page-insta-pic ${instaResponsiveClass}`}>
                <img src="src/assets/insta/drinking_sq.jpg" alt="" />
            </a>
            <a target="_blank" rel='noreferrer' href='https://www.instagram.com/m8beerco' className={`brewery-page-insta-pic ${instaResponsiveClass}`}>
                <img src="src/assets/insta/dog_sq.jpg" alt="" />
            </a>
            <a target="_blank" rel='noreferrer' href='https://www.instagram.com/m8beerco' className={`brewery-page-insta-pic ${instaResponsiveClass}`}>
                <img src="src/assets/insta/rugby_sq.jpg" alt="" />
            </a>
            <a target="_blank" rel='noreferrer' href='https://www.instagram.com/m8beerco' className={`brewery-page-insta-pic ${instaResponsiveClass}`}>
                <img src="src/assets/insta/equip_sq.jpg" alt="" />
            </a>
    
        </div>
        )
    }

}

export default InstaPics