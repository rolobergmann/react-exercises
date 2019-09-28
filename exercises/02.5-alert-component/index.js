import React from "react";
import ReactDOM from "react-dom";
import PropType from "prop-types";

const Alert = props => {
	return (
		<div className="alert alert-danger" role="alert">
			{props.text}
		</div>

		//here you have to return expected html using the properties being passed to the component
	);
};

Alert.propTypes = {
	text: PropType.string
};
/**
 * here you have declare your Alert component and return
 * the html that bootstrap dictates for its alert component
 */

// here is where the alert component is being used, you don't have to edit this part,
// but it helps you understan what properties is the component using
ReactDOM.render(<Alert text="OMG! Something really bad has happended!" />, document.querySelector("#myDiv"));
