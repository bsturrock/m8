import Food from "./Food"

const FoodMenu = ({foods, responsiveClass}) => {

    const renderedFood = foods.map((ele, index)=><Food key={index} food={ele} responsiveClass={responsiveClass}/>)

    return (
        <div className="menu">
            <h1 className='menu-title'>Food</h1>
            {responsiveClass!='mobile' && <h2 className='menu-subtitle hide'>Drafts</h2>}
            
            {renderedFood}
        </div>
    )
}

export default FoodMenu