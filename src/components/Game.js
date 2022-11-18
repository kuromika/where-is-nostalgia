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
            <Puzzle></Puzzle>
        </div>
    )
}

export default Game;