import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Dropdown, DropdownButton } from "react-bootstrap";
export const Navbar = () => {
	const { store, actions } = useContext(Context);

	return (
		<nav className="navbar navbar-dark bg-primary mb-5">
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
			<DropdownButton id="dropdown-basic-button" variant="success" title={"Favorites " + store.favorites.length}>
				{store.favorites.length == 0 ? (
					<Dropdown.Item>Empty</Dropdown.Item>
				) : (
					store.favorites.map((favorite, i) => {
						return (
							<Dropdown.Item eventKey={i} key={i} onClick={() => actions.deleteFavorite(i)}>
								{favorite.type == "people" ? (
									<div>
										{favorite.name}
										<i className="fas fa-trash-alt" />
									</div>
								) : (
									<div>
										{favorite.name}
										<i className="fas fa-trash-alt" />
									</div>
								)}
							</Dropdown.Item>
						);
					})
				)}
			</DropdownButton>
		</nav>
	);
};
