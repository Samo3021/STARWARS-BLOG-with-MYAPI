import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const CardPersons = () => {
	const { store, actions } = useContext(Context);
	// const [searchItem, setSearch] = useState();
	console.log(store);
	return (
		<div className="d-flex flex-row p-4" style={{ maxWidth: "950px", overflow: "auto" }}>
			{store.peoples.map((people, i) => {
				return (
					<div className="card mb-2 " key={i} style={{ display: "flex", minWidth: "350px", margin: "10px" }}>
						<img
							//{props.img}
							src="https://wallpaperaccess.com/full/2428972.jpg"
							className="card-img-top"
							alt="..."
						/>
						<div className="card-body">
							<h5 className="card-title">{people.name}</h5>
							<p className="card-text">
								<strong>Gender:</strong>
								{people.gender}
							</p>
							<p className="card-text">
								<strong>Color eyes:</strong>
								{people.eye_color}
							</p>
							<p className="card-text">
								<strong>Hair color:</strong>
								{people.hair_color}
							</p>
							<Link to={"/singleProPer/" + i}>
								<span style={{ float: "left" }} className="btn btn-primary">
									Learn More!
								</span>
							</Link>

							<button
								style={{ float: "right" }}
								onClick={() => actions.addFavorite(people.name, "people")}
								type="button"
								className="btn btn-outline-danger">
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
