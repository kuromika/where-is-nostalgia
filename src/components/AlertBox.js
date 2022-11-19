
const AlertBox = (props) => {

    return (
        <div className={`alert-box ${props.class}`}>
            <span>{props.text}</span>
        </div>
    )
}

export default AlertBox;