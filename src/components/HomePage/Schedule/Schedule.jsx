import './Schedule.scss'
import ScheduleDay from './ScheduleDay'

const Schedule = () => {
    return (
        <div className="schedule">
            <h4 className='hours-title'>Hours</h4>
            <div className="schedule-days">
                <ScheduleDay day='Sunday' times='12pm - 11pm' kitchen={true}/>
                <ScheduleDay day='Monday' times='CLOSED' kitchen={false}/>
                <ScheduleDay day='Tuesday' times='4pm - 10pm' kitchen={false}/>
                <ScheduleDay day='Wednesday' times='4pm - 10pm' kitchen={true}/>
                <ScheduleDay day='Thursday' times='4pm - 10pm' kitchen={true}/>
                <ScheduleDay day='Friday' times='12pm - 11pm' kitchen={true}/>
                <ScheduleDay day='Saturday' times='12pm - 11pm' kitchen={true}/>
            </div>
            <div className="ravens-wrapper">
                Ravens Gamedays: Open at 9am
            </div>
            <img src="static/images/" alt="" />
        </div>
    )
}

export default Schedule