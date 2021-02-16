import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";

import { CardPersons } from "../component/cardPersons.js";
import { CardPlanets } from "../component/cardPlanets.js";

export const Home = () => (
	<div className="container">
		<div className="align-items-center" text-center mt5>
			<div className="d-flex flex-row p-4" style={{ maxWidth: "950px", overflow: "auto" }}>
				<CardPersons />
				<CardPersons />
				<CardPersons />
				<CardPersons />
				<CardPersons />
				<CardPersons />
			</div>
			<div className="d-flex flex-row p-4" style={{ maxWidth: "950px", overflow: "auto" }}>
				<CardPlanets />
				<CardPlanets />
				<CardPlanets />
				<CardPlanets />
				<CardPlanets />
				<CardPlanets />
			</div>
		</div>
	</div>
);
