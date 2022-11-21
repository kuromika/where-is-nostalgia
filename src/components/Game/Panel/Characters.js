import useFetchImageURL from "../../../hooks/useFetchImageURL";
import CharacterCard from "./CharacterCard";

const Characters = () => {

    const razielURL = useFetchImageURL('RazielPNG.png');
    const snakeURL = useFetchImageURL('snakePNG.png');
    const blackMageURL = useFetchImageURL('blackmagePNG.png');

    return (
        <div className="characters">
            <CharacterCard src={razielURL} name='Raziel'></CharacterCard>
            <CharacterCard src={blackMageURL} name='Black Mage'></CharacterCard>
            <CharacterCard src={snakeURL} name='Snake'></CharacterCard>
        </div>
    )
}

export default Characters;  