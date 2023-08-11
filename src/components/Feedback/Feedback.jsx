import { useState } from "react";
import "./feedback.scss";
import { AiOutlineClose } from "react-icons/ai";
import { sendFeedback } from "../../services/requester.js";

export function Feedback({ setShowFeedback }) {
    const [errorS, setError] = useState(null);
    const [data, setData] = useState({
        name: "",
        feedback: "",
    });

    function onDataChange(e) {
        setData(state => ({ ...state, [e.target.name]: e.target.value }));
    }

    const [showPopUp, setShowPopUp] = useState(false);
    async function onClickSend(e) {
        e.preventDefault();
        const response = await sendFeedback(data);
        const result = await response.json();

        if (response.ok) {
            setShowPopUp(true);
            setShowFeedback(value => !value);
            const timer = setTimeout(() => {
                setShowPopUp(false);
            }, 1000);
            () => clearTimeout(timer);
        } else {
            setError(result.error);
        }
    }

    return (
        <>
            {showPopUp ? (
                <p className="popUp">Thank you for your feedback! </p>
            ) : (
                <div className="wrapper">
                    <p
                        className="close-btn"
                        onClick={() => setShowFeedback(value => !value)}
                    >
                        <AiOutlineClose />
                    </p>
                    <form className="feedbackForm">
                        <h3 className="title">
                            I will be grateful if you leave a feedback or
                            suggestion. This will help me improve!
                        </h3>
                        <div className="fields">
                            <span className="label">Company name</span>
                            <input
                                className="name"
                                name="name"
                                type="text"
                                value={data.name}
                                onChange={onDataChange}
                            />
                            <textarea
                                placeholder="feedback..."
                                className="textArea"
                                name="feedback"
                                value={data.feedback}
                                onChange={onDataChange}
                            ></textarea>
                            {errorS && (
                                <p className="error">{errorS.toUpperCase()}</p>
                            )}
                            <button onClick={onClickSend} className="sendBtn">
                                Send
                            </button>
                        </div>
                    </form>
                </div>
            )}
        </>
    );
}
