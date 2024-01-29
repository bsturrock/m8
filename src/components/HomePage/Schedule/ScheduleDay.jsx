
const ScheduleDay = ({day, times, kitchen}) => {
    return(
        <div className="schedule-day">
            <div className="day-name-wrapper">
                <h4 className="day-name">{day}</h4>
            </div>
            <div className="schedule-divider"></div>
            <div className="hours-wrapper">
                <h4 className="hours">{times}</h4>
            </div>
            {day != 'Monday' && 
            <div className="kitchen-wrapper">
                <h4 className="kitchen-hours">KITCHEN: {kitchen ? "OPEN" : "CLOSED"}</h4>
            </div>
            }

        </div>
    )
}

export default ScheduleDay