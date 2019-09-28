import React from "react";
import ReactDOM from "react-dom";
import PropType from "prop-types";

const BootstrapCard = props => {
	// 1) replace the hard-coded image, description, link, etc. With their property variable.
	return (
		<div className="card m-5">
			<img className="card-img-top" src={props.png} alt="Card image cap" />
			<div className="card-body">
				<h5 className="card-title">{props.title}</h5>
				<p className="card-text">{props.description}</p>
				<a href="props.url" className="btn btn-primary">
					{props.label}
				</a>
			</div>
		</div>
	);
};
BootstrapCard.propTypes = {
	title: PropType.string,
	png: PropType.string,
	description: PropType.string,
	url: PropType.string,
	label: PropType.string

	// 2) add here the new properties into the proptypes object
};

ReactDOM.render(
	<BootstrapCard
		title="Bob Dylan"
		png="https://ucarecdn.com/f8cf81eb-3bab-4bba-9431-668884eab174/-/resize/300x/"
		description="Bob Dylan (born Robert Allen Zimmerman, May 24, 1941) is an American singer-songwriter."
		url="https://en.wikipedia.org/wiki/Bob_Dylan"
		label="Go to wikipedia"
	/>,
	document.querySelector("#myDiv")
);
// 3) Use ReactDOM to add the component into then DOM element #myDiv
