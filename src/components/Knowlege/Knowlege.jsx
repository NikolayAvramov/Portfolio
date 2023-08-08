import "./Knowlege.scss";
import { Link } from "react-router-dom";
import jsIcon from "../../assets/js.png";
import reactIcon from "../../assets/react.png";
import htmlIcon from "../../assets/html.png";
import cssIcon from "../../assets/css.png";
import githubIcon from "../../assets/github.png";
import sassIcon from "../../assets/sass.png";
export function Knowlege() {
    return (
        <>
            <div className="knowlege">
                <ul className="knowlege-list">
                    <li className="knowlege-list-item">
                        <Link
                            className="knowlege-link"
                            to={
                                "https://react-icons.github.io/react-icons/search?q=sass"
                            }
                            target="_blank"
                        >
                            <img
                                src={jsIcon}
                                alt="js"
                                className="knowlege-list-item-image"
                            />
                            <h3 className="knowlege-list-item-title">
                                JavaScript
                            </h3>
                        </Link>
                    </li>
                    <li className="knowlege-list-item">
                        <img
                            src={reactIcon}
                            alt="react icon"
                            className="knowlege-list-item-image"
                        />

                        <h3 className="knowlege-list-item-title">ReactJs</h3>
                    </li>
                    <li className="knowlege-list-item">
                        <img
                            src={htmlIcon}
                            alt="html icon"
                            className="knowlege-list-item-image"
                        />

                        <h3 className="knowlege-list-item-title">HTML</h3>
                    </li>
                    <li className="knowlege-list-item">
                        <img
                            src={cssIcon}
                            alt="css icon"
                            className="knowlege-list-item-image"
                        />

                        <h3 className="knowlege-list-item-title">CSS</h3>
                    </li>
                    <li className="knowlege-list-item">
                        <img
                            src={sassIcon}
                            alt="sass icon"
                            className="knowlege-list-item-image"
                        />

                        <h3 className="knowlege-list-item-title">SASS</h3>
                    </li>
                    <li className="knowlege-list-item">
                        <img
                            src={githubIcon}
                            alt="github icon"
                            className="knowlege-list-item-image"
                        />

                        <h3 className="knowlege-list-item-title">GitHub</h3>
                    </li>
                </ul>
            </div>
        </>
    );
}
