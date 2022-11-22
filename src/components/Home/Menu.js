import { Link } from "react-router-dom";

const Menu = (props) => {

    return (
        <div className="menu">
            <img src={props.logo} alt="PS1 Logo"></img> 
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