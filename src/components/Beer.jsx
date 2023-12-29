import './MenuItem.css'

const Beer = ({beer, responsiveClass}) => {
    const {name, type, abv, brewery, description, sizes} = beer

    return (
        <div className={`menu-item ${responsiveClass}`}>
            <div className={`menu-item-info ${responsiveClass}`}>
                <h2 className={`menu-item-name-and-type ${responsiveClass}`}>
                    <div className={`menu-item-name ${responsiveClass}`}>
                        {name} 
                        {
                        responsiveClass!='mobile' && (
                        <>
                        <span className={`menu-item-type ${responsiveClass}`}>{type}</span>
                        <span className={`menu-item-abv ${responsiveClass}`}>({abv})</span>
                        </>
                        )}

                    </div>
                    <div className={`menu-item-price ${responsiveClass}`}>
                        
                    </div>
                </h2>
                    {
                    responsiveClass=='mobile' && (
                    <>
                    <span className={`menu-item-type ${responsiveClass}`}>{type}</span>
                    <span className={`menu-item-abv ${responsiveClass}`}>({abv})</span>
                    </>
                    )}
                <p className={`menu-item-brewery ${responsiveClass}`}>{brewery}</p>
                <p className={`menu-item-description ${responsiveClass}`}>{description}</p>
            </div>
        </div>
    )
}

export default Beer