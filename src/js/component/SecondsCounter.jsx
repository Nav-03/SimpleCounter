import React from "react";
import propTypes from "prop-types";
import { useState } from "react";

//Main page layout

export const SecondsCounter = (props) => {
	const digits = props.seconds.toString().padStart(6, "0");
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
				setPaused(true);
			}
		});
	};

	const stopTimer = () => {
		clearInterval(setSeconds(0));
		if (!document.querySelector("#counter")) {
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
					<i className="far fa-clock"></i>
				</div>
				<div className="six">{digits[0]}</div>
				<div className="five">{digits[1]}</div>
				<div className="four">{digits[2]}</div>
				<div className="three">{digits[3]}</div>
				<div className="two">{digits[4]}</div>
				<div className="one">{digits[5]}</div>
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
};

//proptypes
SecondsCounter.prototypes = {
	seconds: propTypes.number,
};
