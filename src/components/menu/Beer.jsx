import './Beer.css'
const Beer = ({name, abv, type, owner, description}) => {

    return (
        <div className="beer-container">
            <div className="beer-name">{name} <span className="beer-type">{type} ({abv} abv)</span></div>
            <div className="beer-details">
                <div className="beer-abv"><span className='beer-owner'>{owner}</span></div>
            </div>
            <div className="beer-description">{description}</div>
        </div>
    )

}

export default Beer