import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="not-found">
            <div>
                <h1>404 Not Found</h1>
                <Link to="/">Back To Home Page</Link>
            </div>
            <img src={require("./images/ghost.png")} alt="Ghost" />
        </div>
    );
};

export default NotFound;
