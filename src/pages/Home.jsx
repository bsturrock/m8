import HomeTiles from "../components/HomeTiles"
import { useMediaQuery } from "react-responsive"
import { useEffect, useState } from "react"
import './Home.css'
const Home = () => {

    const isFullSize = useMediaQuery({minWidth: '1670px'})
    const isLess1670 = useMediaQuery({maxWidth: '1669px', minWidth:"1467px"})
    const isLess1465 = useMediaQuery({maxWidth: '1466px', minWidth: "1304px"})
    const isLess1303 = useMediaQuery({maxWidth: '1303px', minWidth: '1141px'})
    const isLess1140 = useMediaQuery({maxWidth: '1140px', minWidth: '800px'})
    const isLess800 = useMediaQuery({maxWidth: '799px', minWidth: '639px'})
    const isMobile = useMediaQuery({maxWidth: '638px'})

    const [responsiveClass, setResponsiveClass] = useState('full')

    useEffect(()=>{
        if(isFullSize){
            setResponsiveClass('full')
            return
        }

        if(isLess1670){
            setResponsiveClass('large')
            return
        }

        if(isLess1465){
            setResponsiveClass('medium')
            return
        }

        if(isLess1303){
            setResponsiveClass('small')
            return
        }
        if(isLess1140){
            setResponsiveClass('mini')
            return
        }

        if(isLess800){
            setResponsiveClass('tablet')
            return
        }

        if(isMobile){
            setResponsiveClass('mobile')
            return
        }

    },[isFullSize, isLess1670, isLess1465, isLess1303, isLess1140, isLess800, isMobile])

    return (
        <div className="home">
            <HomeTiles responsiveClass={responsiveClass}/>
        </div>
    )
}

export default Home