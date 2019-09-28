import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

const Alert = props => {
	let alertClasses = "alert";
	if (props.color == "red") alertClasses += " alert-danger";
	else if (props.color == "orange") alertClasses += " alert-warning";
	return (
		<div className={alertClasses} role="alert">
			{props.text}
		</div>
	);
	//your component here
};
Alert.propTypes = {
	color: PropTypes.string,
	text: PropTypes.string
};

// here is where the alert component is being used, you don't have to edit this part,
// but it helps you understand what properties are being passed to the component
ReactDOM.render(
	<div>
		<Alert text="This is a primary alert—check it out!" color="red" />
		<Alert text="This is a primary alert—check it out!" color="orange" />
	</div>,
	document.querySelector("#myDiv")
);
