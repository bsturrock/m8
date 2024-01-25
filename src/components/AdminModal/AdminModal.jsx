import './AdminModal.scss'
import { useRef } from 'react'
const AdminModal = ({handleCreate, handleSubmit, message, resetMessage}) => {

    const username = useRef(null)
    const password = useRef(null)

    const handleLogin = async () => {
        await handleSubmit(username, password)
    }

    const handleRegister = async () => {
        await handleCreate(username, password)
    }

    return (
    <>
        <div className="admin-modal">
            <input ref={username} onChange={resetMessage} type="text" placeholder='username'/>
            <input ref={password} onChange={resetMessage} type="password" name="" id="" placeholder='password'/>
            <div className={`message${message.status==400 ? ' warning' : ''}`}>{message.message}</div>
            <div className="buttons">
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleRegister}>Register</button>
            </div>
        </div>
    </>
    )
}

export default AdminModal