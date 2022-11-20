
const AlertBox = (props) => {

    return (
        <div className={`alert-box ${props.class}`} style={props.style}>
            <span>{props.text}</span>
        </div>
    )
}

export default AlertBox