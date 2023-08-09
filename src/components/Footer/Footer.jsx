import "./Footer.scss";
import { Link } from "react-router-dom";
import { AiFillLinkedin, AiOutlineGithub } from "react-icons/ai";
export function Footer() {
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
                    <Link className="footer-visit-link">
                        <AiOutlineGithub />
                    </Link>
                    <Link className="footer-visit-link">
                        <AiFillLinkedin />
                    </Link>
                </div>
            </div>
        </>
    );
}
