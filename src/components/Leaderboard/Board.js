import Score from "./Score";

const Board = (props) => {


    return (
        <div className="scoreboard">
            <h1> TOTAL SCORE RANKING </h1>
            <table>
                <thead>
                    <tr>
                        <th>RANK</th>
                        <th>NAME</th>
                        <th>TIME</th>
                    </tr>
                </thead>
                <tbody>
                    {props.scores.map((score, index) => {
                        return <Score key={index+1}
                            rank={index+1}
                            nickname={score.player}
                            score = {score.score}
                        ></Score>
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Board;