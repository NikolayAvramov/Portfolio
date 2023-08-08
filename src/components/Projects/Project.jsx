import natoursImg from "../../assets/Natours.png";
import classicCarCenterImg from "../../assets/ClassicCarCenter.png";
import easyshopImg from "../../assets/easyshop.png";
import { Link } from "react-router-dom";
import "./Project.scss";
export function Projects() {
    return (
        <div className="projects">
            <h2 className="projects-main-title">Projects</h2>
            <div className="projects-wrapper">
                <div className="card">
                    <img
                        src={natoursImg}
                        alt="Natours img"
                        className="card-img"
                    />
                    <h3 className="card-title">Natour</h3>
                    <p className="card-description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Magnam molestiae, ex aliquid perferendis vitae dolore
                        eligendi quaerat nesciunt beatae temporibus quidem
                        deleniti labore iste nemo omnis sed maiores voluptates
                        exercitationem.
                    </p>
                    <div className="card-buton-wrapper">
                        <Link className="card-buton">See Demo</Link>
                        <Link className="card-buton">See on GitHub</Link>
                    </div>
                </div>

                <div className="card">
                    <img
                        src={classicCarCenterImg}
                        alt="Natours img"
                        className="card-img"
                    />
                    <h3 className="card-title">Classic Car Center</h3>
                    <p className="card-description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Magnam molestiae, ex aliquid perferendis vitae dolore
                        eligendi quaerat nesciunt beatae temporibus quidem
                        deleniti labore iste nemo omnis sed maiores voluptates
                        exercitationem.
                    </p>
                    <div className="card-buton-wrapper">
                        <Link className="card-buton">See Demo</Link>
                        <Link className="card-buton">See on GitHub</Link>
                    </div>
                </div>
                <div className="card">
                    <img
                        src={easyshopImg}
                        alt="Natours img"
                        className="card-img"
                    />
                    <h3 className="card-title">EasyShop</h3>
                    <p className="card-description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Magnam molestiae, ex aliquid perferendis vitae dolore
                        eligendi quaerat nesciunt beatae temporibus quidem
                        deleniti labore iste nemo omnis sed maiores voluptates
                        exercitationem.
                    </p>
                    <div className="card-buton-wrapper">
                        <Link className="card-buton">See Demo</Link>
                        <Link className="card-buton">See on GitHub</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
