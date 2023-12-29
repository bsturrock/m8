import HomeImageTile from "./HomeImageTile"
import './HomeTiles.css'

const HomeTiles = ({responsiveClass}) => {

    const imageTiles = ['0','1','2','3','4','5','6','7']
    const renderedImageTiles = imageTiles.map((ele, index)=><HomeImageTile responsiveClass={responsiveClass} img={ele} key={index}/>)

    return (
        <>
        <div className="home-tiles">
            {renderedImageTiles}
        </div>
        </>

    )
}

export default HomeTiles