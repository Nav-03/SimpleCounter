import React from "react";
import ReactDOM from "react-dom";
import { SecondsCounter } from "./component/SecondsCounter.jsx";

// styles import
import "../styles/index.css";

//getting values for props
let counter = 0;
setInterval(function () {
	const four = Math.floor(counter / 1000);
	const three = Math.floor(counter / 100);
	const two = Math.floor(counter / 10);
	const one = Math.floor(counter / 1);
	counter++;
	//render
	ReactDOM.render(
		<SecondsCounter
			digitOne={one}
			digitTwo={two}
			digitThree={three}
			digitFour={four}
		/>,
		document.querySelector("#app")
	);
}, 1000);
