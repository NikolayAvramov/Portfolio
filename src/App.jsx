import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import "./App.css";

import { Home } from "./components/Home/Home.jsx";
import { Header } from "./components/Header/Header.jsx";
import { Certificates } from "./components/Certificates/Gertificates.jsx";
import { Feedback } from "./components/Feedback/Feedback.jsx";
import { Knowlege } from "./components/Knowlege/Knowlege";

import { Projects } from "./components/Projects/Project";

export function App() {
    return (
        <>
            <Header />
            <Projects />
            {/* <Knowlege /> */}
            {/* <Routes>
				<Route path="/" element={<Home />} />
				<Route path="/certificate" element={<Certificates />} />
				<Route path="/feedback" element={<Feedback />} />
			</Routes> */}
        </>
    );
}
