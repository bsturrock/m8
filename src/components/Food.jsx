import './MenuItem.css'

const Food = ({food, responsiveClass}) => {
    const {name, extras, price} = food
    const renderedExtras = extras.map((ele, index)=><p key={index} className='menu-item-extra'>{ele}</p>)

    return (
        <div className={`menu-item ${responsiveClass}`}>
            <div className={`menu-item-info ${responsiveClass}`}>
                <h2 className={`menu-item-name-and-type ${responsiveClass}`}>
                    <div className={`menu-item-name ${responsiveClass}`}>
                        {name} 
                        <span className="menu-item-type"></span>
                        <span className="menu-item-abv"></span>
                    </div>
                    <div className={`menu-item-price ${responsiveClass}`}>
                        {price}
                    </div>
                </h2>
                {renderedExtras}
            </div>
        </div>
    )
}

export default Food