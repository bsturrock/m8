import './Food.css'

const Food = ({name, extras, price, responsiveClass}) => {
    let splitExtras = extras.split('\n')
    const renderedExtras = splitExtras.map((ele, index)=><div key={index} className={`food-details ${responsiveClass}`}>{ele}</div>)
    return (
        <div className={`food-container ${responsiveClass}`}>
            <div className={`food-info ${responsiveClass}`}>
                <div className={`food-name ${responsiveClass}`}>{name}</div>
                {renderedExtras}
            </div>
            <div className={`food-price ${responsiveClass}`}>{price}</div>
            
        </div>
    )
}

export default Food