import { Link } from "react-router-dom";
import "./Header.scss";

export function Header() {
    return (
        <div className="header">
            <p className="header-title">Nikolay Avramov</p>
            <nav className="header-nav">
                <Link className="header-nav-link" to="/">
                    Home
                </Link>
                <Link className="header-nav-link" to="/certificate">
                    Cerificates
                </Link>
                <Link className="header-nav-link" to="/feedback">
                    Feedback
                </Link>
            </nav>
        </div>
    );
}
