import "./MoreInfo.scss";

export function MoreInfo() {
    return (
        <>
            <div className="more">
                <div className="more-left-side">
                    <h3 className="more-info-title">Education</h3>
                    <p className="more-text">
                        I started gaining skills as a web developer in SofUni in
                        January 2022. There I took the courses
                    </p>
                    <ul>
                        <li className="more-list-item">
                            Programming Basics with JavaScript
                        </li>
                        <li className="more-list-item">
                            Programming Fundamentals with JavaScript
                        </li>
                        <li className="more-list-item">JS Advanced</li>
                        <li className="more-list-item">JS Applications</li>
                        <li className="more-list-item">React JS</li>
                    </ul>
                </div>
                <div className="more-right-side">
                    <h3 className="more-info-title">Skills</h3>
                    <ul>
                        <li className="more-list-item">Good in teamwork</li>
                        <li className="more-list-item">Algorithmic thinking</li>
                        <li className="more-list-item">
                            Very good level of written and spoken English
                        </li>
                        <li className="more-list-item">Problem Solver</li>
                        <li className="more-list-item">Adapt quickly</li>
                        <li className="more-list-item">Creativity</li>
                        <li className="more-list-item">Attention to Details</li>
                    </ul>
                </div>
            </div>
        </>
    );
}
