import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <h1 className="logo">React App</h1>
            <nav>
                <ul className="links">
                    <li>
                        <Link to="/Blog-App">home</Link>
                    </li>
                    <li>
                        <Link to="/Blog-App/create">new blog</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
