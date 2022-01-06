//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import SecondsCounter from "./component/SecondsCounter.jsx";



function(props) {
	return (
		<div className="bigCounter">
			<div className="calendar">
				<i class="far fa-clock"></i>
			</div>
			<div className="four">{props.digitFour}</div>
			<div className="three">{props.digitThree}</div>
			<div className="two">{props.digitTow}</div>
			<div className="one">{props.digitOne}</div>

		</div>
	)
}

let counter = 0;
setInterval(funtion(){
	ReactDOM.render(
		<SecondsCounter />,
		document.querySelector('#app')
	);
}, 1000);


//render your react application
