import Menu from "./Menu";
import '../../styles/home.css'
import useFetchImageURL from '../../hooks/useFetchImageURL';
import WithLoading from '../WithLoading';

const MenuWithLoading = WithLoading(Menu);

const Home = () => {

    const logo = useFetchImageURL('PS1logo.png');

    return (
        <div className="home">
            <MenuWithLoading isLoading={!logo} logo={logo}></MenuWithLoading>
        </div>
    )
}

export default Home;