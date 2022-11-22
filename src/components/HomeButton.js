import { Link } from "react-router-dom"

const HomeButton = (props) => {

    return (
        <Link to='/'>
            <button className="home-button" type="button">{props.text}</button>
        </Link>
    )
}

export default HomeButton;