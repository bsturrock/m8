
import './Calendar.css'
import { useState, useEffect } from 'react'
import Day from './Day'
import CalendarHeader from './CalendarHeader'
const Calendar = ({month, year, changeDate, events}) => {

    const Space = () => {
        return (
            <div className="space"></div>
        )
    }

    useEffect(()=>{
        setCurrentDate(new Date().getDate())
        setMaxDays(daysInMonth(year, month))
        setCurrentMonth(new Date().getMonth())
        setCurrentYear(new Date().getFullYear())
    },[month, year])



    const date = new Date(year, month-1)
    const monthText = date.toLocaleString('default', { month: 'long' })
    const yearText = date.getFullYear()

    const daysInMonth = (year, month) => {
        return new Date(year, month, 0).getDate()
    }

    const day = date.getDay()
    const [currentDate, setCurrentDate] = useState(new Date().getDate())
    const [currentMonth, setCurrentMonth] = useState(new Date().getMonth())
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear())

    const [maxDays, setMaxDays] = useState(daysInMonth(year, month))

    const buildCalendar = (startDay, maxDays) => {
        const eles = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat']
        let dayTracker = startDay

        for(let i = 0;i<startDay;i++){
            eles.push('space')
            dayTracker++
            if(dayTracker==7){
                dayTracker=0
            }
        }

        for(let i = 1;i<=maxDays;i++){
            let day_events=[]
            if(year in events){
                if(month in events[year]){
                    day_events = events[year][month][i] || []
                }
            }
            
            console.log(day_events)
            eles.push({number: i, events: day_events})
            dayTracker++
            if(dayTracker==7){
                dayTracker=0
            }
        }

        return eles

    }

    const days = buildCalendar(day,maxDays)

    const renderedDays = days.map((ele, index)=>{
        if(ele=='space'){
            return <Space/>
        } else if(['mon','tue','wed','thu','fri','sat','sun'].includes(ele)){
            return <CalendarHeader day={ele}/>
        }
        else {
            return <Day day={ele.number} events={ele.events} currentDay={currentDate} currentMonth={currentMonth} currentYear={currentYear} currentDate={currentDate} month={month} year={year}/>
        }
    })


    return (
        <>
        <div className="calendar-date-title">
            <button onClick={()=>changeDate(-1)}>{`<`}</button>
            <div className="calendar-title-text">
            {monthText} {yearText}
            </div>
            <button onClick={()=>changeDate(1)}>{`>`}</button>
        </div>
        <div className="calendar">
            {renderedDays}
        </div>
        </>
        
    )

}

export default Calendar