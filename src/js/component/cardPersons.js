import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const CardPersons = () => {
	const { store, actions } = useContext(Context);
	// const [searchItem, setSearch] = useState();

	return (
		<div className="d-flex flex-row p-4" style={{ maxWidth: "950px", overflow: "auto" }}>
			{store.peoples.map((people, i) => {
				return (
					<div className="card mb-2 " key={i} style={{ display: "flex", minWidth: "350px", margin: "10px" }}>
						<img
							//{props.img}
							src="https://estaticos.muyinteresante.es/media/cache/1140x_thumb/uploads/images/gallery/59c4f5655bafe82c692a7052/gato-marron_0.jpg"
							className="card-img-top"
							alt="..."
						/>
						<div className="card-body">
							<h5 className="card-title">{people.name}</h5>
							<p className="card-text">
								Gender:
								{people.gender}
							</p>
							<p className="card-text">
								Color eyes:
								{people.eye_color}
							</p>
							<p className="card-text">
								Hair color:
								{people.hair_color}
							</p>
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
				);
			})}
		</div>
	);
};

// CardPersons.propTypes = {
// 	data: PropTypes.any
// };
