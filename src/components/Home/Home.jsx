import homeCss from "./Home.module.css";
import myPic from "../../assets/me.jpg";

export function Home() {
	return (
		<div className={homeCss.wrapper}>
			<img className={homeCss.img} src={myPic}></img>

			<div className={homeCss.allSections}>
				<section className={homeCss.section}>
					<h3 className={homeCss.title}>About me</h3>
					<p>I am Nikolay Kirilov Avramov, 28 years old, from Momchilgrad</p>
					Contact me on:
					<ul>
						<li></li>
					</ul>
				</section>
				<section className={homeCss.section}>
					<h3 className={homeCss.title}>Education</h3>
					<p>I started my education as a web developer in January 2022 in Sofuni. There I took the courses:</p>
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
						<li>Html</li>
						<li>Css</li>
					</ul>
				</section>
				<section className={homeCss.section}>
					<h3 className={homeCss.title}>Skils</h3>
					<ul>
						<li>Good teamwork</li>
						<li>Algorithmic thinking</li>
						<li>Very good level of written and spoken English</li>
						<li> Problem Solver</li>
						<li>I adapt quickly</li>
						<li>Creativity</li>
						<li>Attention to Details</li>
						<li>Basic skills with GitHub</li>
					</ul>
				</section>
				<section className={homeCss.section}>
					<h3 className={homeCss.title}>Experience</h3>
					<p>I have no professional experience as a developer, but during my studies at Softuni we have made several Single Page Applications with vanilla JS and React.</p>
				</section>
			</div>
		</div>
	);
}
