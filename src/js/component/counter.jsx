import React from "react";
import PropTypes from "prop-types";
//import { ProgressPlugin } from "webpack";
//include images into your bundle
//create your first component
function SecondsCounter(props) {
	return (
		<div className="jumbotron center">
			<div className="Counter">
				<div className="calendar">
					<i className="far fa-clock"></i>
				</div>
				<div className="digit-four">{props.digitFour}</div>
				<div className="digit-three">{props.digitThree}</div>
				<div className="digit-two">{props.digitTwo}</div>
				<div className="digit-one">{props.digitOne}</div>
			</div>
		</div>
	);
}
SecondsCounter.propTypes = {
	digitFour: PropTypes.number,
	digitThree: PropTypes.number,
	digitTwo: PropTypes.number,
	digitOne: PropTypes.number
};
export default SecondsCounter;
