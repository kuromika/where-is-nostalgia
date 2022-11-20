import CharacterCard from "./CharacterCard";

const Characters = () => {

    return (
        <div className="characters">
            <h2> Characters </h2>
            <CharacterCard src='/' name='Raziel'></CharacterCard>
            <CharacterCard src='/' name='Black Mage'></CharacterCard>
            <CharacterCard src='/' name='Snake'></CharacterCard>
        </div>
    )
}

export default Characters;