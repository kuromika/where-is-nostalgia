import Score from "./Score";

const Board = (props) => {


    return (
        <div className="scoreboard">
            <h2> Leaderboard </h2>
            <table>
                <tr>
                    <th>Rank</th>
                    <th>Nickname</th>
                    <th>Time</th>
                </tr>
                {props.scores.map((score, index) => {
                    return <Score key={index+1}
                        rank={index+1}
                        nickname={score.player}
                        score = {score.score}
                    ></Score>
                })}
            </table>
        </div>
    )
}

export default Board;