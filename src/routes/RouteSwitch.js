import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom';
import Layout from '../Layout';
import Home from '../components/Home/Home';
import Game from '../components/Game/Game';
import Leaderboard from '../components/Leaderboard/Leaderboard';

const RouteSwitch = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Home />}></Route>
                    <Route path='game' element={<Game />}></Route>
                    <Route path='leaderboard' element={<Leaderboard/>}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default RouteSwitch;