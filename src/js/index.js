//import into the bundle
import React from "react";
import ReactDOM from "react-dom";
import propTypes from "prop-types";
import { useState } from "react";

// styles import
import "../styles/index.css";

//Main page layout
function SimpleCounter(props) {
	const [seconds, setSeconds] = useState(0);
	const [paused, setPaused] = useState(false);

	const startTimer = () => {
		const current = setInterval(() => {
			setSeconds((seconds) => seconds + 1);
		}, 1000);

		document
			.querySelector(".start-button")
			.setAttribute("disabled", "true");
		document.querySelector(".stop-button").removeAttribute("disabled");

		const pauseButton = document.createElement("button");
		pauseButton.innerText = "pause";
		pauseButton.className = "pause-button";
		document.querySelector(".counter-container").appendChild(pauseButton);
		pauseButton.addEventListener("click", () => {
			if (pauseButton.innerText === "pause") {
				pauseButton.innerText = "resume";
			} else {
				pauseButton.innerText = "pause";
				setInterval(() => {
					setSeconds((seconds) => seconds + 1);
				}, 1000);
				setPaused(false);
			}
		});
	};

	const stopTimer = () => {
		clearInterval(setSeconds(0));
		if (!!document.querySelector("#counter")) {
			document.querySelector("#counter").remove();
		}

		document.querySelector(".stop-button").setAttribute("disabled", "true");
		document.querySelector(".start-button").removeAttribute("disabled");
		document.querySelector(".pause-button").remove();
	};

	const currentCount = seconds;
	return (
		<>
			<div className="bigCounter">
				<div className="calendar">
					<i class="far fa-clock"></i>
				</div>
				<div className="four">{props.digitFour % 10}</div>
				<div className="three">{props.digitThree % 10}</div>
				<div className="two">{props.digitTwo % 10}</div>
				<div className="one">{props.digitOne % 10}</div>
			</div>
			{/* buttons */}

			<div className="counter-container">
				<button className="start-button" onClick={startTimer}>
					Start
				</button>
				<button className="stop-button" onClick={stopTimer}>
					Stop
				</button>
				<p id="counter">{currentCount}</p>
			</div>
		</>
	);
}
//proptypes
SimpleCounter.prototypes = {
	digitFour: propTypes.number,
	digitThree: propTypes.number,
	digitTwo: propTypes.number,
	digitOne: propTypes.number,
};
//getting values for props
let counter = 0;
setInterval(function () {
	const four = Math.floor(counter / 1000);
	const three = Math.floor(counter / 100);
	const two = Math.floor(counter / 10);
	const one = Math.floor(counter / 1);
	console.log(four, three, two, one);
	counter++;
	//render
	ReactDOM.render(
		<SimpleCounter
			digitOne={one}
			digitTwo={two}
			digitThree={three}
			digitFour={four}
		/>,
		document.querySelector("#app")
	);
}, 1000);
