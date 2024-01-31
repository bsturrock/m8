import { useState, useEffect } from "react"
import './ScheduleTableRow.scss'

const ScheduleTableRow = ({index, data, onChange, day}) => {

    const [rowData, setRowData] = useState(data)

    useEffect(()=>{
        setRowData(data)
    }, [data])

    const handleInputChange = (e) => {
        const {name, value, checked} = e.target;
        if(name=='kitchen'){
            setRowData(prevData => ({
                ...prevData,
                [name]: checked
            }));
        } else {
          setRowData(prevData => ({
            ...prevData,
            [name]: value
        }));  
        }
    }

    useEffect(()=>{
        if(JSON.stringify(data) !== JSON.stringify(rowData)){
            onChange(rowData)
        }
        
    }, [rowData, onChange, data])

    return (

        <tr className={`scheduleFullRow ${index%2==0 ? 'odd' : 'even'}`} >
            <td className='scheduleRow'>{day}</td>
            <td className='scheduleRow'><input name='openTime' onChange={handleInputChange} className='scheduleInput' disabled={closed} type="text" value={rowData.openTime}/></td>
            <td className='scheduleRow'><input name='closeTime' onChange={handleInputChange} className='scheduleInput' disabled={closed} type="text" value={rowData.closeTime}/></td>
            <td className='scheduleRow'><input name='kitchen' type="checkbox" defaultChecked={rowData.kitchen} onChange={handleInputChange} /></td>
        </tr>
    )
}

export default ScheduleTableRow