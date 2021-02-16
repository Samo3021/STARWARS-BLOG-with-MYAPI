import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
export const CardPlanets = props => {
	return (
		<div className="col-md-3" style={{ width: "18rem", float: "left" }}>
			<div className="card mb-2">
				<img
					//{props.img}
					src="https://phantom-elmundo.unidadeditorial.es/df93f8e8824414f3eb155aa5f167fdd8/crop/18x29/690x375/resize/746/f/jpg/assets/multimedia/imagenes/2020/07/17/15949955446655.jpg"
					className="card-img-top"
					alt="..."
				/>
				<div className="card-body">
					<h5 className="card-title">{props.title}</h5>
					<p className="card-text">{props.textGender}</p>
					<p className="card-text">{props.textEyeC}</p>
					<p className="card-text">{props.textHairC}</p>
					<Link to="singleProPla">
						<a href="#" className="btn btn-primary">
							Learn More!
						</a>
					</Link>
					<button type="button" className="btn btn-outline-warning" style={{ float: "right" }}>
						<i className="far fa-heart" />
					</button>
				</div>
			</div>
		</div>
	);
};

CardPlanets.propTypes = {
	title: PropTypes.object,
	textGender: PropTypes.object,
	textEyeC: PropTypes.object,
	textHairC: PropTypes.object,
	img: PropTypes.string
};
