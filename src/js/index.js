//import into the bundle
import React from "react";
import ReactDOM from "react-dom";
import propTypes from "prop-types";

// styles import
import "../styles/index.css";

//Main page layout
function SimpleCounter(props) {
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
			<div className="extraFunctions">
				<button onclick="myFunction()">Start</button>
				<button onclick="myFunction()">Stop</button>
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
