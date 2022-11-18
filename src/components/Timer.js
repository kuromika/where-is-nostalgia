import { useEffect, useState } from "react";
import Counter from "./Counter";


const Timer = (props) => {

    const [seconds, setSeconds] = useState(0);

    useEffect(() => {

        const interval = setInterval(() => {
            setSeconds((prevState) => prevState += 1);
        }, 1000);

        if (!props.run) {
            clearInterval(interval);
        };

        return () => clearInterval(interval);

    }, [props.run]);


    return (
        <div className="timer">
            <Counter seconds={seconds}></Counter>
        </div>
    )
}

export default Timer;