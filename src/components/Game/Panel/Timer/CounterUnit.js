
const CounterUnit = (props) => {

    return (
        <span className={props.class}>
            {props.unit.toString().length < 2 ? `0${props.unit}` : props.unit}
        </span>
    )
}

export default CounterUnit;