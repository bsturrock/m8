import './AdminPanel.scss'

const AdminPanel = ({title, children}) => {
    return(
    <div className="admin-panel">
        <h3>{title}</h3>
        {children}
    </div>
    )
}

export default AdminPanel