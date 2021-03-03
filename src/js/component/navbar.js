import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { Context } from "../store/appContext";
import { Dropdown, DropdownButton } from "react-bootstrap";
export const Navbar = () => {
	const { store, actions } = useContext(Context);
	let location = useLocation();

	return (
		<nav className="navbar navbar-dark bg-primary mb-5">
			{location.pathname == "/" ? (
				<span className="navbar-brand ml-5 h1">
					<img
						src="https://cdn.freebiesupply.com/logos/large/2x/star-wars-logo-svg-vector.svg"
						style={{ maxHeight: "100px" }}
					/>
				</span>
			) : location.pathname == "/register" ? (
				<span className="navbar-brand ml-5 h1">
					<img
						src="https://cdn.freebiesupply.com/logos/large/2x/star-wars-logo-svg-vector.svg"
						style={{ maxHeight: "100px" }}
					/>
				</span>
			) : (
				<Link to="/home">
					<span className="navbar-brand ml-5 h1">
						<img
							src="https://cdn.freebiesupply.com/logos/large/2x/star-wars-logo-svg-vector.svg"
							style={{ maxHeight: "100px" }}
						/>
					</span>
				</Link>
			)}

			{location.pathname == "/register" ? (
				<Link to="/">
					<button className="btn btn-success">login</button>
				</Link>
			) : (
				""
			)}
			{location.pathname == "/" ? (
				<Link to="/register">
					<button className="btn btn-success">Register</button>
				</Link>
			) : (
				""
			)}
			{location.pathname == "/home" ? (
				<Link to="/">
					<button className="btn btn-danger" onClick={() => sessionStorage.clear()}>
						log out
					</button>
				</Link>
			) : (
				""
			)}

			<div className="ml-auto">
				<Link to="/">{/* <button className="btn btn-primary">Check the Context in action</button> */}</Link>
			</div>
			{location.pathname == "/home" ? (
				<DropdownButton
					id="dropdown-basic-button"
					variant="success"
					title={"Favorites " + store.favorites.length}>
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
			) : (
				""
			)}
		</nav>
	);
};

/*<Link to="/home">
    <span className="navbar-brand ml-5 h1">
        <img
            src="https://cdn.freebiesupply.com/logos/large/2x/star-wars-logo-svg-vector.svg"
            style={{ maxHeight: "100px" }}
        />
    </span>
</Link>*/
