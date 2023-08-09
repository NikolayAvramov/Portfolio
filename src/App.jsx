import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import "./App.css";

import { Home } from "./components/Home/Home.jsx";
import { Header } from "./components/Header/Header.jsx";
import { Certificates } from "./components/Certificates/Gertificates.jsx";
import { Feedback } from "./components/Feedback/Feedback.jsx";
import { Knowlege } from "./components/Knowlege/Knowlege";

import { Projects } from "./components/Projects/Project";
import { About } from "./components/About/About";
import { Footer } from "./components/Footer/Footer";

export function App() {
    return (
        <>
            {/* <Header /> */}
            <About />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/certificate" element={<Certificates />} />
                <Route path="/feedback" element={<Feedback />} />
            </Routes>
            <Knowlege />
            <Projects />
            <Footer />
        </>
    );
}
