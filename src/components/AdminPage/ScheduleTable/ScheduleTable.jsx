import ScheduleTableRow from "../ScheduleTableRow/ScheduleTableRow"
import { useState, useEffect } from "react"
import Spinner from '../../Universal/Spinner/Spinner'

const ScheduleTable = () => {
    const [schedules, setSchedules] = useState({})
    const [message, setMessage] = useState(null)
    const [waiting, setWaiting] = useState(false)


    const buttonText = () => {
        if(waiting){
            return <Spinner color='black'/>
        } else{ 
            return 'Save'
        }
    }

    const handleSave = async () => {
        setWaiting(true)
        const res = await fetch('https://www.sturrocket.com/m8/data/schedules',{
            method: 'POST',
            body: JSON.stringify(schedules),
            headers: {
                'Content-Type' : 'application/json'
            }
        })
        if(res.ok){
            setMessage('Changes Saved.')
        }
        setWaiting(false)
    }


    useEffect(()=>{

        const handleFetch = async () => {
            const res = await fetch('https://www.sturrocket.com/m8/data/schedules')
            if(res.ok){
                const res_json = await res.json()
                const scheduleObj = res_json.schedule.reduce((prev,curr)=>{
                    return {...prev, [curr.day]: {openTime: curr.openTime,closeTime: curr.closeTime, kitchen: curr.kitchen}}
                },{})
                setSchedules(scheduleObj)
            }
        }
        
        handleFetch()

    },[])

    const handleRowChange = (day, newData) => {
        setMessage(null)
        setSchedules(prevData => ({
            ...prevData,
            [day]: newData
        }));
    }

    const renderedRows = Object.keys(schedules).map((ele, index)=> {
        return <ScheduleTableRow key={ele} index={index} day={ele} data={schedules[ele]} onChange={newData=>handleRowChange(ele, newData)}/>
    })

    return(
    <div className="schedules">
        <div onClick={handleSave} className="save-button">{buttonText()}</div>
        <div className='schedule-save-message'>{message}</div>
    <table>
        <thead>
            <tr className='scheduleHeader'>
                <th>Day</th>
                <th>Open Time</th>
                <th>Close Time</th>
                <th>Kitchen?</th>
            </tr>
        </thead>
        <tbody>
            {renderedRows}
        </tbody>
    </table>
</div>
    )
}

export default ScheduleTable