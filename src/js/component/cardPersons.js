import React from "react";
import PropTypes from "prop-types";

export const CardPersons = props => {
	return (
		<div className="card" style={{ width: "18rem" }}>
			<img src="..." className="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title">{props.title}</h5>
				<p className="card-text">{props.textGender}</p>
				<p className="card-text">{props.textEyeC}</p>
				<p className="card-text">{props.textHairC}</p>
				<a href="#" className="btn btn-primary">
					Learn More!
				</a>
				<button type="button" classNameName="btn btn-outline-warning">
					<i className="far fa-heart" />
				</button>
			</div>
		</div>
	);
};

CardPersons.propTypes = {
	title: PropTypes.object,
	textGender: PropTypes.object,
	textEyeC: PropTypes.object,
	textHairC: PropTypes.object
};
