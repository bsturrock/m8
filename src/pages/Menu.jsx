
import './Menu.css'
import FoodMenu from '../components/FoodMenu'
import BeerMenu from '../components/BeerMenu'
import { useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive'

const Menu = () => {

    const [menuType, setMenuType] = useState(true)
    const [beers, setBeers] = useState(null)
    const [food, setFood] = useState(null)
    const [readyToShow, setReadyToShow] = useState(false)
    const [responsiveClass, setResponsiveClass] = useState('full')
    const isMobile = useMediaQuery({maxWidth: '638px'})
    
    useEffect(()=>{
        if(isMobile){
            setResponsiveClass('mobile')
            return
        } else {
            setResponsiveClass('full')
        }
    },[isMobile])

    useEffect(()=>{


        const fetchData = async () => {
            await fetchBeers()
            await fetchFood()
        }

        const fetchBeers = async () => {
            let res = await fetch('static/data/beers.json',{headers:{'Content-Type' : 'application/json'}})
            let res_json = await res.json()
            setBeers(res_json)
        }

        const fetchFood = async () => {
            let res = await fetch('static/data/food.json',{headers:{'Content-Type' : 'application/json'}})
            let res_json = await res.json()
            setFood(res_json)   

        }
        
        fetchData().then(()=>setTimeout(setReadyToShow(true),100))

    },[])

    return (
        <>    
        {readyToShow &&     
        <div className="nav beer-food-nav">
            <div onClick={()=>setMenuType(true)} className={`nav-item sub-menu ${menuType ? 'selected' : ''}`}>Beer</div>
            <div onClick={()=>setMenuType(false)} className={`nav-item sub-menu ${!menuType ? 'selected' : ''}`}>Food</div>
        </div>}

        {readyToShow && 
            <div className={`menu ${responsiveClass}`}>
                {menuType && beers && <BeerMenu beers={beers} responsiveClass={responsiveClass}/>}
                {!menuType && food && <FoodMenu foods={food} responsiveClass={responsiveClass}/>}
            </div>
        }
        </>
    )
}

export default Menu