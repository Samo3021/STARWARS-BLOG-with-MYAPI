import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";

export const SingleProPla = props => {
	const { store, actions } = useContext(Context);
	const { theid } = useParams();

	const history = useHistory();

	const goBack = () => {
		history.goBack();
	};

	return (
		<div className="container">
			<div>
				{store.planets[theid]}
				{console.log(store.planets[0])}
				<div className="row">
					<div className="col-6" style={{ maxWidth: "800px", maxHeight: "600px" }}>
						<img
							src="https://phantom-elmundo.unidadeditorial.es/df93f8e8824414f3eb155aa5f167fdd8/crop/18x29/690x375/resize/746/f/jpg/assets/multimedia/imagenes/2020/07/17/15949955446655.jpg"
							alt="..."
						/>
					</div>
					<div className="col-6">
						<h1>{}</h1>

						<p>
							Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has
							been the industrys standard dummy text ever since the 1500s when an unknown printer took a
							galley of type and scrambled it to make a type specimen book It has survived not only five
							centuries but also the leap into electronic typesetting remaining essentially unchanged
						</p>
					</div>
				</div>
				<div className="row">
					<div className="col-2" />
					<div className="col-2" />
					<div className="col-2" />
					<div className="col-2" />
					<div className="col-2" />
					<div className="col-2" />
				</div>
				<Link to="/">
					<span className="btn btn-primary btn-lg" href="#" role="button">
						Back home
					</span>
				</Link>
			</div>
		</div>
	);
};

// SingleProPla.propTypes = {
// 	match: PropTypes.object
// };
//buscar como selecionar algo de mi array
