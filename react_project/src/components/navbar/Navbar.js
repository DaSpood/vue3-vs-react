import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="navbar">
            <ul>
                <li>
                    <Link to="/">Accueil</Link>
                </li>
                <li>
                    <Link to="/table">Tableau</Link>
                </li>
                <li>
                    <Link to="/popup">Popup</Link>
                </li>
                <li>
                    <Link to="/form">Formulaire</Link>
                </li>
                <li>
                    <Link to="/broken">CSS</Link>
                </li>
            </ul>
        </nav>
    );
}
