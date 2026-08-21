import { Link } from "react-router-dom";
function Navbar() {
    return (
        <nav>
            <h2>Ravi's Portfolio</h2>
            <div>
                <Link to="/">Home</Link>{" "}
                <Link to="/about">About</Link>{" "}
                <Link to="/career">Career</Link>{" "}
                <Link to="/contact">Contact Us</Link>
            </div>
        </nav>
    );
}
export default Navbar;