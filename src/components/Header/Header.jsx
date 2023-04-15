import {Link} from "react-router-dom";
import NavCss from "./Header.module.css";

export function Header() {
	return (
		<div className={NavCss.container}>
			<p className={NavCss.title}>Nikolay Avramov</p>
			<nav className={NavCss.nav}>
				<Link className={NavCss.link} to="/">
					Home
				</Link>
				<Link className={NavCss.link} to="/certificate">
					Cerificates
				</Link>
				<Link className={NavCss.link} to="/feedback">
					Feedback
				</Link>
			</nav>
		</div>
	);
}
