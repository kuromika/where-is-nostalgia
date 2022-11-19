import Timer from "./Timer";
import Characters from "./Characters"
import Puzzle from "./Puzzle";
import { useState } from "react";

const Game = () => {

    const [options, setOptions] = useState(['Black Mage', 'Snake', 'Raziel']);

    const updateOptions = (guess) => {
        setOptions(options.filter((option) => option !== guess));
    }

    return (

        <div className="game">
            <div className="info-panel">
                <Timer run={true}></Timer>
                <Characters></Characters>
            </div>
            <Puzzle
                handleGuess={(x, y) => console.log(x, y)}
                options={options}
                updateOptions = {updateOptions}
            >
            </Puzzle>
        </div>
    )
}

export default Game;