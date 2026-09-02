import { Link } from "react-router";

function Header() {
    return (
        <nav style={{
            display: "flex",
            justifyContent: "space-around"
        }}>
            <Link to="/">Home</Link>
            <Link to="/components">Components</Link>
            <Link to="/external">External Data</Link>
        </nav>
    );
}
export default Header;