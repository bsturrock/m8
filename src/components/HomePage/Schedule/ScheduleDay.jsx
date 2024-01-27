
const ScheduleDay = ({day}) => {
    return(
        <div className="schedule-day">
            <div className="day-name-wrapper">
                <h4 className="day-name">{day}</h4>
            </div>
            <div className="schedule-divider"></div>
            <div className="hours-wrapper">
                <h4 className="hours">9am - 11pm</h4>
            </div>
        </div>
    )
}

export default ScheduleDay