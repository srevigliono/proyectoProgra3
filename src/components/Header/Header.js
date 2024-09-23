import "./Header.css"
import { Link } from 'react-router-dom';

const Header = () => {
    return(
    <header className="header">
        <div className="logo">
            <h1>Movies Spotlight</h1> {}
        </div>
        <nav >
            
            <ul>
            <li>
                <Link to={"/"}>Home</Link> 
            </li>
            <li>
                <Link to={"/favorites"}>Favoritos</Link> 
            </li>
            </ul>
        </nav>
        </header>
    )
}

export default Header