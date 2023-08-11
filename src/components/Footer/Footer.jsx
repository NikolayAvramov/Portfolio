import "./Footer.scss";
import { Link } from "react-router-dom";
import { AiFillLinkedin, AiOutlineGithub } from "react-icons/ai";
export function Footer({ setShowFeedback }) {
    return (
        <>
            <div className="footer">
                <h2 className="footer-contact-title">Contact me on:</h2>
                <div className="footer-contacts-wrapper">
                    <p className="footer-contact-info">
                        Email: avramov94@mail.bg
                    </p>
                    <p className="footer-contact-info">Tel: +359894479756</p>
                </div>

                <h2 className="footer-visit-title">Visite me on:</h2>
                <div className="footer-link-wrapper">
                    <Link
                        to={"https://github.com/NikolayAvramov"}
                        className="footer-visit-link"
                        target="_blank"
                    >
                        <AiOutlineGithub />
                    </Link>
                    <Link
                        to={
                            "https://www.linkedin.com/in/nikolay-avramov-46b836260"
                        }
                        className="footer-visit-link"
                        target="_blank"
                    >
                        <AiFillLinkedin />
                    </Link>
                </div>
                <Link
                    className="footer-feedback-btn"
                    onClick={() => setShowFeedback(value => !value)}
                >
                    Leave me feedback
                </Link>
            </div>
        </>
    );
}
