import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-dark bg-primary mb-3">
			<Link to="/">
				<span className="navbar-brand ml-5 h1">
					<img
						src="https://cdn.freebiesupply.com/logos/large/2x/star-wars-logo-svg-vector.svg"
						style={{ maxHeight: "100px" }}
					/>
				</span>
			</Link>
			<div className="ml-auto">
				<Link to="/">{/* <button className="btn btn-primary">Check the Context in action</button> */}</Link>
			</div>
			<div className="dropdown mr-5 ">
				<button
					className="btn btn-success dropdown-toggle   "
					type="button"
					id="dropdownMenuButton"
					data-toggle="dropdown"
					aria-haspopup="true"
					aria-expanded="false">
					Favorites
				</button>
				<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
					<a className="dropdown-item" href="#">
						Action
					</a>
					<a className="dropdown-item" href="#">
						Another action
					</a>
					<a className="dropdown-item" href="#">
						Something else here
					</a>
				</div>
			</div>
		</nav>
	);
};
