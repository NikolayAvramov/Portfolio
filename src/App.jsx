import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import "./App.css";

import { Certificates } from "./components/Certificates/Gertificates.jsx";
import { Feedback } from "./components/Feedback/Feedback.jsx";
import { Knowlege } from "./components/Knowlege/Knowlege";

import { Projects } from "./components/Projects/Project";
import { About } from "./components/About/About";
import { Footer } from "./components/Footer/Footer";
import { MoreInfo } from "./components/MoreInfo/MoreInfo";

export function App() {
    return (
        <>
            {/* <Header /> */}
            <About />
            <MoreInfo />
            <Routes>
                <Route path="/certificate" element={<Certificates />} />
                <Route path="/feedback" element={<Feedback />} />
            </Routes>
            <Knowlege />
            <Projects />
            <Footer />
        </>
    );
}
