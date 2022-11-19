import Timer from "./Timer";
import Characters from "./Characters"
import Puzzle from "./Puzzle";
import { useState } from "react";
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import { getApp } from "firebase/app";

const Game = () => {

    const [options, setOptions] = useState(['Black Mage', 'Snake', 'Raziel']);
    const [playerGuess, setPlayerGuess] = useState([0,0]);
    const [isPuzzleReady, setIsPuzzleReady] = useState(false);

   

    const handleGuess = (x, y) => {
        setPlayerGuess([x, y]);
    }

    async function getDBCords(character) {

        const db = getFirestore(getApp());
        const docRef = doc(db, "characters", "fmIlO0ocTPRVph6ufJ6p");
        const docSnap = await getDoc(docRef);
        const data = docSnap.data();
        return data[character];

    }

    async function updateOptions (guess){

        const cords = await getDBCords('raziel');
        
        setOptions(options.filter((option) => option !== guess));
    }

    return (

        <div className="game">
            <div className="info-panel">
                <Timer run={isPuzzleReady}></Timer>
                <Characters></Characters>
            </div>
            <Puzzle
                saveCords={handleGuess}
                options={options}
                updateOptions={updateOptions}
                runTimer = {setIsPuzzleReady}
            >
            </Puzzle>
        </div>
    )
}

export default Game;