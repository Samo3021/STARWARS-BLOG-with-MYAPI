import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const CardPlanets = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="d-flex flex-row p-4" style={{ maxWidth: "950px", overflow: "auto" }}>
			{store.planets.map((planet, i) => {
				return (
					<div className="card mb-2" key={i} style={{ display: "flex", minWidth: "350px", margin: "10px" }}>
						<img
							//{props.img}
							src="https://phantom-elmundo.unidadeditorial.es/df93f8e8824414f3eb155aa5f167fdd8/crop/18x29/690x375/resize/746/f/jpg/assets/multimedia/imagenes/2020/07/17/15949955446655.jpg"
							className="card-img-top"
							alt="..."
						/>
						<div className="card-body">
							<h5 className="card-title">{planet.name}</h5>
							<p className="card-text">
								Population:
								{planet.population}
							</p>
							<p className="card-text">
								Climate:
								{planet.climate}
							</p>
							<p className="card-text">
								Terrain:
								{planet.terrain}
							</p>
							<Link to={"/singleProPla/" + i}>
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

// CardPlanets.propTypes = {
// 	title: PropTypes.object,
// 	textGender: PropTypes.object,
// 	textEyeC: PropTypes.object,
// 	textHairC: PropTypes.object,
// 	img: PropTypes.string
// };
