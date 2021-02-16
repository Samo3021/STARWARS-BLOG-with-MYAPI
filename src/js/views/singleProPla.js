import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const SingleProPla = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
		<div className="container">
			<div className="row">
				<div className="col-6" style={{ maxWidth: "800px", maxHeight: "600px" }}>
					<img src="..." alt="..." />
				</div>
				<div className="col-6">
					<h1 />
					<p />
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
	);
};

SingleProPla.propTypes = {
	match: PropTypes.object
};
