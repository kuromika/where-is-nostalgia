
const Score = (props) => {

    return (
        <div className="score">
            <span className="score-rank">{props.rank}</span>
            <span className="score-name">{props.nickname}</span>
            <span className="score-time">{props.score}</span>
        </div>
    )
}

export default Score;