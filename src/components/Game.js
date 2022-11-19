import Timer from "./Timer";
import Characters from "./Characters"
import Puzzle from "./Puzzle";

const Game = () => {
    return (
        <div className="game">
            <div className="info-panel">
                <Timer run={true}></Timer>
                <Characters></Characters>
            </div>
            <Puzzle handleGuess={(x,y) => console.log(x,y)}></Puzzle>
        </div>
    )
}

export default Game;