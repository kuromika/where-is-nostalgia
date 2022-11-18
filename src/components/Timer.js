import { useEffect, useState } from "react";


const Timer = () => {

    const [seconds, setSeconds] = useState(0);
    const minutes = Math.floor(seconds / 60);

    useEffect(() => {

        const interval = setInterval(() => {
            setSeconds((prevState) => prevState += 1);
        }, 1000);
      
        return () => clearInterval(interval);

    }, []);

    return (
        <>
            <h1>{seconds - (60*minutes)} seconds</h1>
            <h1> {minutes} minutes</h1>
        </>
    )
}

export default Timer;