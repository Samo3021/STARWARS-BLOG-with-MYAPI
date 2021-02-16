import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const CardPersons = props => {
	return (
		<div className="col-md-3" style={{ width: "18rem", float: "left" }}>
			<div className="card mb-2">
				<img
					//{props.img}
					src="https://estaticos.muyinteresante.es/media/cache/1140x_thumb/uploads/images/gallery/59c4f5655bafe82c692a7052/gato-marron_0.jpg"
					className="card-img-top"
					alt="..."
				/>
				<div className="card-body">
					<h5 className="card-title">{props.title}</h5>
					<p className="card-text">{props.textGender}</p>
					<p className="card-text">{props.textEyeC}</p>
					<p className="card-text">{props.textHairC}</p>
					<Link to="singleProPer">
						<a href="#" className="btn btn-primary">
							Learn More!
						</a>
					</Link>
					<button type="button" className="btn btn-outline-warning">
						<i className="far fa-heart" />
					</button>
				</div>
			</div>
		</div>
	);
};

CardPersons.propTypes = {
	title: PropTypes.object,
	textGender: PropTypes.object,
	textEyeC: PropTypes.object,
	textHairC: PropTypes.object,
	img: PropTypes.string
};
