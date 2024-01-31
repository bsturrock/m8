import './AdminPage.scss'
// import AdminModal from '../../components/AdminPage/AdminModal/AdminModal'
import AdminPanel from '../../components/AdminPage/AdminPanel/AdminPanel'
import ScheduleTable from '../../components/AdminPage/ScheduleTable/ScheduleTable'

const AdminPage = () => {

    // const [hideModal, setHideModal] = useState(true)
    // const [message, setMessage] = useState({status:null,message:'x'})
    // const [token, setToken] = useState(null)

    // const resetMessage = () => {
    //     setMessage({status:null, message:message.message})
    // }

    // const handleSubmit = async (username, password) => {
    //     const res = await fetch('https://www.sturrocket.com/m8/auth/login', {
    //         method: 'POST',
    //         headers: {
    //             "Content-Type" : 'application/json',
    //             'Access-Control-Allow-Origin' : '*'
    //         },
    //         body: JSON.stringify({username: username.current.value, password: password.current.value})
    //     });
    //     if(res.ok){
    //         const res_json = await res.json()
    //         setHideModal(true)
    //         setToken(res_json)

    //     } else if(res.status == 404){
    //         setMessage({status:400, message: 'User Not Found.'})
    //     } else if(res.status == 401){
    //         setMessage({status:400, message: 'Incorrect Password.'})
    //     }
    // }

    // const handleCreate = async (username, password) => {
    //     const res = await fetch('https://www.sturrocket.com/m8/auth/create', {
    //         method: 'POST',
    //         headers: {
    //             "Content-Type" : 'application/json',
    //             'Access-Control-Allow-Origin' : '*'
    //         },
    //         body: JSON.stringify({username: username.current.value, password: password.current.value})
    //     });
    //     if(res.status != 201){
    //         setMessage({status:400, message:'Error Creating User.'})
    //     }

    // }


    return(
        <div className="admin-page">
            {/* {!hideModal && 
                <AdminModal handleSubmit={handleSubmit} handleCreate={handleCreate} message={message} resetMessage={resetMessage}/> 
            } */}
            <AdminPanel title='Schedule'>
                <ScheduleTable/>
            </AdminPanel>
        </div>
        
    )
    
}

export default AdminPage