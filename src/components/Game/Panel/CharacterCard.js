
const CharacterCard = (props) => {

    return (
        <div className="character-card">
            <img src={props.src} alt={props.alt}></img>
            <span className="character-name">{props.name}</span>
        </div>
    )
}

export default CharacterCard;