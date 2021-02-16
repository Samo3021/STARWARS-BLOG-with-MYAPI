import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";

import { CardPersons } from "../component/cardPersons.js";

export const Home = () => (
	<div>
		<div className="container ">
			<ul className="row">
				<CardPersons />
				<CardPersons />
				<CardPersons />
				<CardPersons />
				<CardPersons />
				<CardPersons />
				<CardPersons />
				<CardPersons />
				<CardPersons />
			</ul>
		</div>
	</div>
);
