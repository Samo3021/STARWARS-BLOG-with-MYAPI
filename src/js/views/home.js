import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Link } from "react-router-dom";
import { CardPersons } from "../component/cardPersons.js";
import { CardPlanets } from "../component/cardPlanets.js";

export const Home = () => {
	const local = JSON.parse(sessionStorage.getItem("user_information")).favo;
	console.log("buscar id", local);
	console.log("fav");
	/* const testPrivado = () => {
		fetch("https://3000-emerald-jellyfish-qyn0ga41.ws-us03.gitpod.io/profile", {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Authorization: "Bearer " + sessionStorage.getItem("u_token")
			}
			// body: JSON.stringify(data)
		})
			.then(response => response.json())
			.then(data => {
				console.log("Success:", data);
				// sessionStorage.setItem("u_token", data.token);
				// setRedirect(true);
			})
			.catch(error => {
				console.error("Error:", error);
			});
	};*/
	return (
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
};
