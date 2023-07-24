import homeCss from "./Home.module.css";
import myPic from "../../assets/me.jpg";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Knowlege } from "../Knowlege/Knowlege";
export function Home() {
    return (
        <div className={homeCss.wrapper}>
            <img className={homeCss.img} src={myPic}></img>

            <div className={homeCss.allSections}>
                <section className={homeCss.section}>
                    <h3 className={homeCss.title}>About me</h3>
                    <p>
                        I am Nikolay Kirilov Avramov, 28 years old, from
                        Momchilgrad
                    </p>
                    Contact me on:
                    <div>
                        <p>avramov94@mail.bg</p>
                        <p>+359894479756</p>
                        <p>
                            <Link
                                className={homeCss.contactLink}
                                to="https://github.com/NikolayAvramov"
                            >
                                <AiFillGithub />
                            </Link>
                        </p>
                        <p>
                            <Link
                                className={homeCss.contactLink}
                                to="https://www.linkedin.com/in/nikolay-avramov-46b836260/"
                            >
                                <AiFillLinkedin />
                            </Link>
                        </p>
                    </div>
                </section>
                <section className={homeCss.section}>
                    <h3 className={homeCss.title}>Education</h3>
                    <p>
                        I started gaining skills as a web developer in SofUni in
                        January 2022. There I took the courses:
                    </p>
                    <ul>
                        <li>Programming Basics with JavaScript</li>
                        <li>Programming Fundamentals with JavaScript</li>
                        <li>JS Advanced</li>
                        <li>JS Applications</li>
                        <li>React JS</li>
                    </ul>
                </section>
                <section className={homeCss.section}>
                    <h3 className={homeCss.title}>Knowledge</h3>
                    <ul>
                        <li>JavaScript</li>
                        <li>ReactJs</li>
                        <li>HTML</li>
                        <li>Css</li>
                        <li>Basic skills with GitHub</li>
                    </ul>
                </section>
                <section className={homeCss.section}>
                    <h3 className={homeCss.title}>Skills</h3>
                    <ul>
                        <li>Good in teamwork</li>
                        <li>Algorithmic thinking</li>
                        <li>Very good level of written and spoken English</li>
                        <li> Problem Solver</li>
                        <li>Adapt quickly</li>
                        <li>Creativity</li>
                        <li>Attention to Details</li>
                    </ul>
                </section>
                <Knowlege />
                <section className={homeCss.section}>
                    <h3 className={homeCss.title}>Experience</h3>
                    <p>
                        I have no professional experience as a developer, but
                        during my studies at Softuni we have made JavaScript
                        Single Page Applications with vanilla JS and ReactJS.
                    </p>
                    <Link to="#">Last ReactJS project</Link>
                </section>
            </div>
        </div>
    );
}
