import Puzzle from "./Puzzle";
import {useEffect, useState} from "react";
import { addDoc, collection, getDocs, getFirestore, query } from 'firebase/firestore';
import inRange from "../../util/inRange";
import Box from "./Box";
import Panel from "./Panel/Panel";
import '../../styles/game.css';

const Game = () => {

    const [options, setOptions] = useState(['Black Mage', 'Snake', 'Raziel']);
    const [cords, setCords] = useState({});
    const [runTimer, setRunTimer] = useState(false);
    const [playerCords, setPlayerCords] = useState([]);
    const [userState, setUserState] = useState('');
    const [boxCords, setBoxCords] = useState([]);
    const [score, setScore] = useState(0);

    const boxStyle = {
        position: 'absolute',
        zIndex: '2',
        top: `${boxCords[0]}px`,
        left: `${boxCords[1]}px`
    }

     const handleImageClick = (x, y, top, left) => {
        setPlayerCords([x, y]);
        setBoxCords([top, left]);
        setUserState('Dropdown');
    }

    useEffect(() => {

        async function getDBCords() {
            try {
                const q = query(collection(getFirestore(), 'characters'));
                const snapshot = await getDocs(q);
                const elements = {};

                snapshot.forEach((doc) => {
                    elements[doc.id] = doc.data();
                });

                console.log(elements);
                setCords(elements);
            
            } catch (error) {
                console.log(error);
            }
        }

        getDBCords();

    }, []);
    
    async function updateOptions(guess) {

        if (inRange(playerCords[0], cords[guess].x) && inRange(playerCords[1], cords[guess].y)) {
            setOptions(options.filter((option) => option !== guess));
            setUserState('Correct');
            if (options.length - 1 === 0) {
                setRunTimer(false)
                setUserState('Insert');
            }
            return;
        }
        setUserState('Incorrect');
    }

    async function handleGameOver(nickname) {
        
        try {
            await addDoc(collection(getFirestore(), 'scores'), {
                player: nickname,
                score: score
            });
        } catch (error) {
            console.error('Error adding a new score', error);
        }

        setUserState('Over');
        
    }


    return (

        <div className="game">
            <Panel runTimer ={runTimer} setScore ={setScore}></Panel>
            <Puzzle
                saveCords={handleImageClick}
                options={options}
                updateOptions={updateOptions}
                runTimer = {setRunTimer}
            >
                <Box
                    userState={userState}
                    update={updateOptions}
                    style={boxStyle}
                    options={options}
                    gameOver={handleGameOver}
                />
                
            </Puzzle>
        </div>
    )
}

export default Game;