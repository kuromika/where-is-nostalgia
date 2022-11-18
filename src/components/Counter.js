import CounterUnit from "./CounterUnit";

const Counter = (props) => {

    const minutes = Math.floor(props.seconds / 60);
    const convertedSeconds = props.seconds - (60 * minutes);

    return (
        <div className="counter">
            <CounterUnit className='minutes' unit={minutes}></CounterUnit>
            <span className="counter-separator"> : </span>
            <CounterUnit className='seconds' unit={convertedSeconds}></CounterUnit>
        </div>
    )
}

export default Counter;