import React from "react";
import ReactDOM from "react-dom";
import { SecondsCounter } from "./component/SecondsCounter.jsx";

// styles import
import "../styles/index.css";

//getting values for props
//render

let counter = 0;
let start = Date.now();
setInterval(function () {
	let seconds = Math.floor((Date.now() - start) / 1000);
	counter++;
	ReactDOM.render(
		<div>
			<SecondsCounter seconds={counter} />
		</div>,
		document.querySelector("#app")
	);
}, 1000);
