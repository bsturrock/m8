import './Schedule.scss'
import ScheduleDay from './ScheduleDay'

const Schedule = () => {
    return (
        <div className="schedule">
            <h4 className='hours-title'>Hours</h4>
            <div className="schedule-days">
                <ScheduleDay day='Sunday'/>
                <ScheduleDay day='Monday'/>
                <ScheduleDay day='Tuesday'/>
                <ScheduleDay day='Wednesday'/>
                <ScheduleDay day='Thursday'/>
                <ScheduleDay day='Friday'/>
                <ScheduleDay day='Saturday'/>
            </div>
            <div className="ravens-wrapper">
                Ravens Gamedays: Open at 9am
            </div>
            <img src="static/images/" alt="" />
        </div>
    )
}

export default Schedule