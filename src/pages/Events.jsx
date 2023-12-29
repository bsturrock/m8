import './Events.css'
import Calendar from '../components/Calendar'
import { useState, useEffect } from 'react'
const Events = () => {

    const date = new Date()
    const currentMonth = date.getMonth()
    const currentYear = date.getFullYear()
    const day = date.getDay()
    const [month, setMonth] = useState(currentMonth+1)
    const [year, setYear] = useState(currentYear)
    const [events, setEvents] = useState({})


    useEffect(()=>{
        const fetchEvents = async () => {
            let res = await fetch('static/data/events.json',{headers:{'Content-Type' : 'application/json'}})
            let res_json = await res.json()
            setEvents(res_json)
        }

        fetchEvents()
    },[])

    const changeDate = (direction) => {

        if(direction > 0){
            if(month==12){
                setMonth(1)
                setYear(year+1)
            } else {
                setMonth(month+1)
            }
        } else {
            if(month==1){
                setMonth(12)
                setYear(year-1)
            } else {
                setMonth(month-1)
            }
        }
    }

    return (

        <div className="events">
            <h1 className='specials-title'>Specials</h1>
            <div className="specials-columns">
                <div className={`column is-1 ${day==0 ? 'today' : ''}`}>

                    <div className="day-title">Sunday</div>
                    <p>10am - 9pm</p>
                    <p>2 for 1 domestic buckets</p>
                    <p>Rugby World Cup</p>
                </div>
                <div className={`column is-1 ${day==1 ? 'today' : ''}`}>
                    <div className="day-title">Monday</div>
                    <p>Rugby World Cup</p>
                </div>
                <div className={`column is-1 ${day==2 ? 'today' : ''}`}>
                    <div className="day-title">Tuesday</div>
                    <p>Trivia @ 8pm</p>
                    <p>$2 off six packs</p>
                </div>
                <div className={`column is-1 ${day==3 ? 'today' : ''}`}>
                    <div className="day-title">Wednesday</div>
                    <p>Buy one get one pints</p>
                </div>
                <div className={`column is-1 ${day==4 ? 'today' : ''}`}>
                    <div className="day-title">Thursday</div>
                    <p>2 for 1 domestic buckets</p>
                    <p>Rugby World Cup</p>
                </div>
                <div className={`column is-1 ${day==5 ? 'today' : ''}`}>
                    <div className="day-title">Friday</div>
                    <p>2 for 1 domestic buckets</p>
                    <p>Rugby World Cup</p>
                </div>
                <div className={`column is-1 ${day==6 ? 'today' : ''}`}>
                    <div className="day-title">Saturday</div>
                    <p>2 for 1 domestic buckets</p>
                    <p>Rugby World Cup</p>
                </div>
            </div>

            {events && <div className="calendar">
                <Calendar month={month} year={year} changeDate={changeDate} events={events}/>
            </div>}
            
        </div>
    )
}

export default Events