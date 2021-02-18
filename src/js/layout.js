import React, { useState, useEffect, useContext } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

//aqui va el appContext y flux
import injectContext from "./store/appContext";
import { Context } from "./store/appContext";
//aqui va los views(posicion de vista)
import { Home } from "./views/home";
import { SingleProPer } from "./views/singleProPer.js";
import { SingleProPla } from "./views/singleProPla.js";
// import { Demo } from "./views/demo";
// import { Single } from "./views/single";

//aqui van los componentes
import { Navbar } from "./component/navbar";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";
	const { store, actions } = useContext(Context);
	const [loading, setLoading] = useState(true);

	return (
		<div className="d-flex flex-column">
			<BrowserRouter basename={basename}>
				<Navbar />
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					{/* <Route exact path="/demo">
						<Demo />
					</Route>
					<Route exact path="/single/:theid">
						<Single />
					</Route> */}
					<Route exact path="/singleProPer/:id">
						<SingleProPer />
					</Route>
					<Route exact path="/singleProPla/:id">
						<SingleProPla />
					</Route>
					<Route>
						<h1>Not found!</h1>
					</Route>
				</Switch>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
