import { Link } from "react-router-dom";

const Menu = () => {

    return (
        <div className="Menu">
            <img src="/" alt="/"></img> 
            <div className="menu-buttons">
                <Link to='game'>
                    <button type="button" id="play-button"> Play </button>
                </Link>

                <Link to='leaderboard'>
                    <button type="button" id='leaderboard-button'> Leaderboard </button>
                </Link>
            </div>
        </div>
    )
}

export default Menu;