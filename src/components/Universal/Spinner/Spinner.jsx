import './Spinner.scss'
const Spinner = ({color='white'}) => {
    return (
        <span className={`loader ${color}`}></span>
    )
}

export default Spinner