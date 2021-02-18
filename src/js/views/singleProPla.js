import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";

export const SingleProPla = props => {
	const { store, actions } = useContext(Context);
	const { id } = useParams();
	const intId = parseInt(id);
	const history = useHistory();

	const goBack = () => {
		history.goBack();
	};

	return (
		<div className="container">
			{store.planets.map((propiedad, i) => {
				if (i == intId)
					return (
						<div className="bg-white p-5">
							<div className="row">
								<div className="col-4" style={{ maxWidth: "800px", maxHeight: "600px" }}>
									<img
										style={{ width: "290px", height: "350px", marginBottom: "30px" }}
										src="https://www.wallpapertip.com/wmimgs/0-4377_star-wars-the-mandalorian.jpg"
										alt="..."
									/>
								</div>
								<div className="col-8" style={{ float: "right" }}>
									<h1>
										Name:
										{propiedad.name}
									</h1>

									<p>
										Star Wars (conocida también en español como La guerra de las galaxias)5​6​7​ es
										una franquicia compuesta primordialmente de una serie de películas concebidas
										por el cineasta estadounidense George Lucas en la década de 1970, y producidas y
										distribuidas por The Walt Disney Company a partir de 2012. Su trama describe las
										vivencias de un grupo de personajes que habitan en una galaxia ficticia e
										interactúan con elementos como «la Fuerza», un campo de energía metafísico y
										omnipresente8​ que posee un «lado luminoso» impulsado por la sabiduría, la
										nobleza y la justicia y utilizado por Jedi, y un lado oscuro usado por los Sith
										y provocado por la ira, el miedo y el odio.
									</p>
								</div>
							</div>
							<br />
							<div className="row">
								<div className="col-2">
									<p>
										<strong>Population:</strong>
									</p>
									{propiedad.population}
								</div>
								<div className="col-2">
									<p>
										<strong>Climate:</strong>
									</p>
									{propiedad.climate}
								</div>
								<div className="col-2">
									<p>
										<strong>Terrain:</strong>
									</p>
									{propiedad.terrain}
								</div>
								<div className="col-2">
									<p>
										<strong>Rotation period:</strong>
									</p>
									{propiedad.rotation_period}
								</div>
								<div className="col-2">
									<p>
										<strong>Orbital period:</strong>
									</p>
									{propiedad.orbital_period}
								</div>
								<div className="col-2">
									<p>
										<strong>Diameter:</strong>
									</p>
									{propiedad.diameter}
								</div>
							</div>
							<br />
							<Link to="/">
								<span className="btn btn-primary btn-lg" href="#" role="button">
									Back home
								</span>
							</Link>
						</div>
					);
			})}
		</div>
	);
};

SingleProPla.propTypes = {
	data: PropTypes.any
};
//buscar como selecionar algo de mi array
// {store.planets[theid]}
// 				{console.log(store.planets[theid])}
