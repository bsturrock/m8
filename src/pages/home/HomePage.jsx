import './HomePage.css'
import Tiles from '../../components/tiles/Tiles'
const HomePage = ({responsiveClass, showAnims, setShowAnims}) => {

    return (
        <div className='home'>
            <div className="container">
                <Tiles responsiveClass={responsiveClass} showAnims={showAnims} setShowAnims={setShowAnims}/>
            </div>
            
        </div>

    )
}
export default HomePage