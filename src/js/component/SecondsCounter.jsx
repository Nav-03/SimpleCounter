import React from "react";
import propTypes from "prop-types";

const SecondsCounter = (props) => {
	return (
		<div className="bigCounter">
			<div className="clockIcon">
				<i className="far fa-clock"></i>
			</div>
			<div className="six">{props.digitSix}</div>
			<div className="five">{props.digitFive}</div>
			<div className="four">{props.digitFour}</div>
			<div className="three">{props.digiThree}</div>
			<div className="two">{props.digitTwo}</div>
			<div className="one">{props.digitOne}</div>
		</div>

	);
	SecondsCounter.propTypes = {
		// You can declare that a prop is a specific JS primitive. By default, these
		// are all optional.
		props.digitOne: PropTypes.number,
		props.digitTwo: PropTypes.number,
		props.digitThree: PropTypes.number,
		props.digitFour: PropTypes.number,
		props.digitFive: PropTypes.number,
		props.digitSix: PropTypes.number,
};


export default SecondsCounter;
