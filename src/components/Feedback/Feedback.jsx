import {useState} from "react";
import FeedbackCss from "./feedbackQueries.module.css";
import {AiOutlineClose} from "react-icons/ai";
import {sendFeedback} from "../../services/requester.js";
import {useNavigate} from "react-router-dom";
export function Feedback() {
	const [errorS, setError] = useState(null);
	const [data, setData] = useState({
		name: "",
		feedback: ""
	});
	const navigate = useNavigate();
	function onDataChange(e) {
		setData(state => ({...state, [e.target.name]: e.target.value}));
	}

	const [showPopUp, setShowPopUp] = useState(false);
	async function onClickSend(e) {
		e.preventDefault();

		const response = await sendFeedback(data);
		const result = await response.json();
		if (response.ok) {
			setShowPopUp(true);
			const timer = setTimeout(() => {
				setShowPopUp(false);
				navigate("/");
			}, 1000);
			() => clearTimeout(timer);
		} else {
			setError(result.error);
		}
	}

	return (
		<>
			{showPopUp ? (
				<p className={FeedbackCss.popUp}>Thank you for your feedback! </p>
			) : (
				<div className={FeedbackCss.wrapper}>
					<form className={FeedbackCss.feedbackForm}>
						<h3 className={FeedbackCss.title}>I will be grateful if you leave a feedback or suggestion. This will help me improve</h3>
						<div className={FeedbackCss.fields}>
							<span className={FeedbackCss.label}>Company name</span>
							<input className={FeedbackCss.name} name="name" type="text" value={data.name} onChange={onDataChange} />
							<textarea placeholder="feedback..." className={FeedbackCss.textArea} name="feedback" value={data.feedback} onChange={onDataChange}></textarea>
							{errorS && <p className={FeedbackCss.error}>{errorS.toUpperCase()}</p>}
							<button onClick={onClickSend} className={FeedbackCss.sendBtn}>
								Send
							</button>
						</div>
					</form>
				</div>
			)}
		</>
	);
}
