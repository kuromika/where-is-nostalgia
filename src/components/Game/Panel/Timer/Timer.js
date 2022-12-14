import { useEffect, useState } from "react";
import Counter from "./Counter";


const Timer = (props) => {

    const [seconds, setSeconds] = useState(0);

    useEffect(() => {

        const interval = setInterval(() => {
            setSeconds((prevState) => prevState += 1);
        }, 1000);

        if (!props.run) {
            props.setScore(seconds);
            clearInterval(interval);
        };

        return () => clearInterval(interval);

    }, [props,seconds]);


    return (
        <div className="timer">
            <Counter seconds={seconds}></Counter>
        </div>
    )
}

export default Timer;