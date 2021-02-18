import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";

export const SingleProPer = props => {
	const { store, actions } = useContext(Context);
	const { id } = useParams();
	const intId = parseInt(id);
	const history = useHistory();

	const goBack = () => {
		history.goBack();
	};

	return (
		<div className="container">
			{store.peoples.map((propiedad, i) => {
				if (i == intId)
					return (
						<div className="bg-white p-5">
							<div className="row">
								<div className="col-6" style={{ maxWidth: "800px", maxHeight: "600px" }}>
									<img
										style={{ width: "380px", height: "auto", marginBottom: "30px" }}
										src="https://wallpaperaccess.com/full/2428972.jpg"
										alt="..."
									/>
								</div>
								<div className="col-6">
									<h1>{propiedad.name}</h1>
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
										<strong>Gender:</strong>
									</p>
									{propiedad.gender}
								</div>
								<div className="col-2">
									<p>
										<strong>Gender:</strong>
									</p>
									{propiedad.eye_color}
								</div>
								<div className="col-2">
									<p>
										<strong>Hair color:</strong>
									</p>
									{propiedad.hair_color}
								</div>
								<div className="col-2">
									<p>
										<strong>Skin color:</strong>
									</p>
									{propiedad.skin_color}
								</div>
								<div className="col-2">
									<p>
										<strong>Height:</strong>
									</p>
									{propiedad.height}
								</div>
								<div className="col-2">
									<p>
										<strong>Birth year:</strong>
									</p>
									{propiedad.birth_year}
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

SingleProPer.propTypes = {
	data: PropTypes.any
};
