import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";

import { CardPersons } from "../component/cardPersons.js";
import { CardPlanets } from "../component/cardPlanets.js";

export const Home = () => (
	<div className="container">
		<div className="align-items-center text-center mt-5">
			<h1 className="text-white">
				<strong>Characters</strong>
			</h1>
			<CardPersons />
			<h2 className="text-white">
				<strong>Planets</strong>
			</h2>
			<CardPlanets />
		</div>
	</div>
);
