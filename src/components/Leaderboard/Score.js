
const Score = (props) => {

    return (
        <tr>
            <td className="score-rank">{props.rank}</td>
            <td className="score-name">{props.nickname}</td>
            <td className="score-time">{props.score}</td>
        </tr>
    )
}

export default Score;