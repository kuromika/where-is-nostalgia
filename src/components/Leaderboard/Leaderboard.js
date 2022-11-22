import { collection, getDocs, getFirestore, limit, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import Board from "./Board";
import WithLoading from "../WithLoading";
import '../../styles/leaderboard.css';

const BoardWithLoading = WithLoading(Board);

const Leaderboard = () => {

    const [scores, setScores] = useState([]);
    const [loading, setLoading] = useState(true);

    
    useEffect(() => {

        async function fetchScores() {
            const scoresQuery = query(collection(getFirestore(), 'scores'),
                                        orderBy('score', 'asc'), limit(20));
        
            const querySnapshot = await getDocs(scoresQuery);

            const elements = [];

            querySnapshot.forEach((doc) => {
                elements.push(doc.data());
            })

            setScores(elements);
            setLoading(false);
        }

        fetchScores();

        
    }, []);

    return (
        <div className="leaderboard">
            <BoardWithLoading isLoading={loading} scores={scores}></BoardWithLoading>
        </div>
    )
}

export default Leaderboard;