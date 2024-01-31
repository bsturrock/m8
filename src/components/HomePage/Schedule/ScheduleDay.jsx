
const ScheduleDay = ({day, openTime, closeTime, kitchen}) => {
    console.log(openTime, closeTime)
    const hoursText = () => {
        if(openTime=='CLOSED'){
            return 'CLOSED'
        } else {
            return `${openTime} - ${closeTime}`
        }
    }

    return(
        <div className="schedule-day">
            <div className="day-name-wrapper">
                <h4 className="day-name">{day}</h4>
            </div>
            <div className="schedule-divider"></div>
            <div className="hours-wrapper">
                <h4 className="hours">{hoursText()}</h4>
            </div>
            {openTime != 'CLOSED' && 
            <div className="kitchen-wrapper">
                <h4 className="kitchen-hours">KITCHEN: {kitchen ? "OPEN" : "CLOSED"}</h4>
            </div>
            }

        </div>
    )
}

export default ScheduleDay