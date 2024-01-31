import './Schedule.scss'
import ScheduleDay from './ScheduleDay'
import { useEffect, useState } from 'react'
const Schedule = () => {

    const [schedules, setSchedules] = useState([])

    useEffect(()=>{
        async function fetchSchedules(){
            let res = await fetch('https://www.sturrocket.com/m8/data/schedules')
            if(res.ok){
                let res_json = await res.json()
                setSchedules(res_json.schedule)
            }
        }
        fetchSchedules()
    },[])

    const renderedSchedule = schedules.map((ele, index)=><ScheduleDay key={index} day={ele.day} openTime={ele.openTime} closeTime={ele.closeTime} kitchen={ele.kitchen}/>)

    return (
        <div className="schedule">
            <h4 className='hours-title'>Hours</h4>
            <div className="schedule-days">
                {renderedSchedule}
            </div>
            <div className="ravens-wrapper">
                Ravens Gamedays: Open at 9am
            </div>
            <img src="static/images/" alt="" />
        </div>
    )
}

export default Schedule