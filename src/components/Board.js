import Score from "./Score";

const Board = (props) => {


    return (
        <div className="scoreboard">
            <h2> Leaderboard </h2>
            {props.scores.map((score, index) => {
                return <Score key={index+1}
                    rank={index+1}
                    nickname={score.nickname}
                    score = {score.time}
                ></Score>
            })}
        </div>
    )
}

export default Board;