import "./About.scss";
import { useEffect, useState } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import TypewriterComponent from "typewriter-effect";
import myPic from "../../assets/mecopy.png";

export function About() {
    const [aboutText, setAboutText] = useState("");
    const [text] = useTypewriter({
        words: ["Nikolay Avramov", "Front-End Developer"],
        loop: {},
        typeSpeed: 120,
    });

    const aboutMe = `My name is Nikolay Avramov and I am 28 years old.
     Although I have no professional experience yet 
     in this field, I want to develop in it. This is something I want to
         pursue in the future . At this stage of my knowledge,
          it is mainly Front-End, but I'm motivated to be a Full-Stack Dev
          eloper soon.`;

    return (
        <>
            <div className="about">
                <div className="about-left-side">
                    <h1 className="about-title">
                        I'm
                        <span className="about-title-text"> {text}</span>
                        <span className="cursor">
                            <Cursor />
                        </span>
                    </h1>
                    <p className="about-text">
                        {aboutMe}
                        {/* <TypewriterComponent
                            onInit={typewriter => {
                                typewriter
                                    .typeString(aboutMe)
                                    .pauseFor()
                                    .start();
                            }}
                        /> */}
                    </p>
                </div>
                <div className="about-right-side">
                    <h1 className="about-title-mobile">
                        I'm
                        <span className="about-title-text"> {text}</span>
                        <span className="cursor-mobile">
                            <Cursor />
                        </span>
                    </h1>
                    <img className="about-pic" src={myPic} alt="my pic" />
                </div>
            </div>
        </>
    );
}
