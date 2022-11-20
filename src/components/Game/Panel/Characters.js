import useFetchImageURL from "../../../hooks/useFetchImageURL";
import CharacterCard from "./CharacterCard";

const Characters = () => {

    const razielURL = useFetchImageURL('RazielPNG.png');
    const snakeURL = useFetchImageURL('snakePNG.png');
    const blackMageURL = useFetchImageURL('blackmagePNG.png');

    return (
        <div className="characters">
            <h2> Characters </h2>
            <CharacterCard src={razielURL} name='Raziel'></CharacterCard>
            <CharacterCard src={snakeURL} name='Black Mage'></CharacterCard>
            <CharacterCard src={blackMageURL} name='Snake'></CharacterCard>
        </div>
    )
}

export default Characters;  