
const Day = ({day, currentDay, currentMonth, currentYear, events, currentDate, month, year}) => {
    return (
        <div className={`calendar-day ${currentDay==day && currentMonth+1==month && currentYear==year? "current-day" : ''} ${(day < currentDate && currentMonth+1==month && currentYear==year) || (month < currentMonth+1 && currentYear==year) || year < currentYear ?  'past' : ''}`}>
            <div className="day-marker">
                {day}
            </div>
            {events.map((ele, index)=><div className='event'>{ele}</div>)}
        </div>
    )
} 

export default Day