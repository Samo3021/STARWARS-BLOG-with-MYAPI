import React, { useState, useContext } from "react";
import { Redirect } from "react-router-dom";

export const Register = () => {
	const [email, setEmail] = useState("");
	const [pass, setPass] = useState("");
	const [name, setName] = useState("");
	const [lastname, setLastname] = useState("");
	const [redirect, setRedirect] = useState(false);

	const handleSubmit = e => {
		e.preventDefault();
		if (email === "" || pass === "" || name === "" || lastname === "") {
			alert("correo y contraseña son requeridos");
		}
		console.log(email, pass, name, lastname);

		// FETCH
		const data = { email: email, password: pass, name: name, lastname: lastname };

		fetch("https://3000-cyan-ptarmigan-0gz2mubx.ws-us03.gitpod.io/register", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(data)
		})
			.then(response => response.json())
			.then(data => {
				console.log("Success:", data);
				setRedirect(true);
			})
			.catch(error => {
				console.error("Error:", error);
			});

		// setRedirect(true);
	};

	return (
		<div className="text-center mt-5 d-flex justify-content-center align-items-center bg-success m-5 p-4 mb-5 w-5">
			<form style={{ width: "400px" }} onSubmit={e => handleSubmit(e)}>
				<div className="form-floating mb-3">
					<input
						type="name"
						className="form-control"
						id="floatingInput"
						placeholder="name"
						onChange={e => setName(e.target.value)}
					/>
					<label htmlFor="floatingInput">Name</label>
				</div>
				<div className="form-floating">
					<input
						type="lastname"
						className="form-control"
						id="floatingInput"
						placeholder="lastName"
						onChange={e => setLastname(e.target.value)}
					/>
					<label htmlFor="floatingInput">LastName</label>
				</div>
				<div className="form-floating mb-3">
					<input
						type="email"
						className="form-control"
						id="floatingInput"
						placeholder="name@example.com"
						onChange={e => setEmail(e.target.value)}
					/>
					<label htmlFor="floatingInput">Email address</label>
				</div>
				<div className="form-floating">
					<input
						type="password"
						className="form-control"
						id="floatingPassword"
						placeholder="Password"
						onChange={e => setPass(e.target.value)}
					/>
					<label htmlFor="floatingPassword">Password</label>
				</div>
				<input type="submit" className="btn btn-primary" value="Register" />
			</form>
			{redirect ? <Redirect to="/" /> : ""}
		</div>
	);
};
