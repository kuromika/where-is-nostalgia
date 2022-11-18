import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom';
import Layout from './Layout';
import Home from './components/Home';

const RouteSwitch = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Home />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default RouteSwitch;