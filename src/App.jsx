import "./App.scss";
import { Feedback } from "./components/Feedback/Feedback.jsx";
import { Knowlege } from "./components/Knowlege/Knowlege";
import { Projects } from "./components/Projects/Project";
import { About } from "./components/About/About";
import { Footer } from "./components/Footer/Footer";
import { MoreInfo } from "./components/MoreInfo/MoreInfo";
import { useState } from "react";

export function App() {
    const [showFeedback, setShowFeedback] = useState(false);
    return (
        <>
            {showFeedback ? (
                <Feedback setShowFeedback={setShowFeedback} />
            ) : (
                <>
                    <About />
                    <MoreInfo />
                    <Knowlege />
                    <Projects />
                    <Footer setShowFeedback={setShowFeedback} />
                </>
            )}
        </>
    );
}
