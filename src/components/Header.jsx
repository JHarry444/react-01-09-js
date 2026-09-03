import { useContext } from "react";
import { Link } from "react-router";
import { themeContext } from "../context";

function Header() {
    const { toggleTheme } = useContext(themeContext);
    return (
        <nav style={{
            display: "flex",
            justifyContent: "space-around"
        }}>
            <Link to="/">Home</Link>
            <Link to="/components">Components</Link>
            <Link to="/external">External Data</Link>
            <Link to="/events">Event Handling</Link>
            <Link to="/state">State</Link>
            <Link to="/lifting">Lifting State</Link>
            <Link to="/list">My List</Link>
            <button onClick={toggleTheme}>Toggle Theme</button>
        </nav>
    );
}
export default Header;