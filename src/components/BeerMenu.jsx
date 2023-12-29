import Beer from "./Beer"
import './BeerMenu.css'
const BeerMenu = ({beers, responsiveClass}) => {
    const {drafts, cans, onDeck} = beers
    const renderedDrafts = drafts.map((ele,index)=><Beer beer={ele} key={index} responsiveClass={responsiveClass}/>)
    const renderedCans = cans.map((ele,index)=><Beer beer={ele} key={index} responsiveClass={responsiveClass}/>)
    const renderedOnDeck = onDeck.map((ele,index)=><Beer beer={ele} key={index} responsiveClass={responsiveClass}/>)
    return (
        <div className="menu">
            <h1 className='menu-title'>Beer</h1>
            <h2 className={`menu-subtitle ${responsiveClass}`}>Drafts</h2>
            {renderedDrafts}
            <h2 className={`menu-subtitle ${responsiveClass}`}>Bottles and Cans</h2>
            {renderedCans}
            <h2 className={`menu-subtitle ${responsiveClass}`}>On Deck</h2>
            {renderedOnDeck}
        </div>
    )
}

export default BeerMenu