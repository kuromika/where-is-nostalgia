import Timer from "./Timer";
import Characters from "./Characters"
import Puzzle from "./Puzzle";
import { useState } from "react";
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import { getApp } from "firebase/app";
import inRange from "../util/inRange";
import Dropdown from "./Dropdown";

const Game = () => {

    const [options, setOptions] = useState(['Black Mage', 'Snake', 'Raziel']);
    const [playerGuess, setPlayerGuess] = useState([0,0]);
    const [isPuzzleReady, setIsPuzzleReady] = useState(false);
    const [box, setBox] = useState(null);

   

    const handleGuess = (x, y, top, left) => {
          setBox(
                <Dropdown
                    options={options}
                    style={{
                        position: 'absolute',
                        top: `${top}px`,
                        left: `${left}px`,
                        zIndex: 2,
                    }}
                    updateOptions={updateOptions}
              />
          );
        setPlayerGuess([x, y]);
    }

    async function getDBCords(character) {

        const db = getFirestore(getApp());
        const docRef = doc(db, "characters", "fmIlO0ocTPRVph6ufJ6p");
        const docSnap = await getDoc(docRef);
        const data = docSnap.data();
        return data[character];

    }

    async function updateOptions(guess){

        const cords = await getDBCords(guess);

        console.log(cords);

        console.log(inRange(playerGuess[0], cords[0], cords[1])
            && inRange(playerGuess[1], cords[2], cords[3])
        );
        
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
                {box}
            </Puzzle>
        </div>
    )
}

export default Game;