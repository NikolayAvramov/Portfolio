import homeCss from "./Home.module.css";
import myPic from "../../assets/mecopy.png";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Knowlege } from "../Knowlege/Knowlege";
export function Home() {
    return (
        <div className={homeCss.wrapper}>
            <div className={homeCss.allSections}>
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
            </div>
        </div>
    );
}
