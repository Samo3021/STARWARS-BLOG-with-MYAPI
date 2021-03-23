import React, { useState, useContext } from "react";
import { Redirect } from "react-router-dom";

export const Login = () => {
	const [email, setEmail] = useState("");
	const [pass, setPass] = useState("");
	const [redirect, setRedirect] = useState(false);

	const handleSubmit = e => {
		e.preventDefault();
		if (email === "" || pass === "") {
			alert("correo y contraseña son requeridos");
		}
		console.log(email, pass);

		// FETCH
		const data = { email: email, password: pass };

		fetch("https://3000-pink-lemming-ndir8koy.ws-us03.gitpod.io/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(data)
		})
			.then(response => response.json())
			.then(data => {
				let session_info = {
					token: data,
					userinfo: data.user.userid,
					favo: data.user.favChild
				};
				console.log("session_info", session_info);
				sessionStorage.setItem("user_information", JSON.stringify(session_info));
				console.log("Success:", data);
				sessionStorage.setItem("u_token", data.token);
				// console.log(sessionStorage);
				setRedirect(data.activo);
			})
			.catch(error => {
				console.error("Error:", error);
			});

		// setRedirect(true);
	};

	return (
		<div className="text-center mt-5 d-flex justify-content-center align-items-center  m-5 p-4 mb-2">
			<form style={{ width: "400px" }} onSubmit={e => handleSubmit(e)}>
				<div className="container h-5 bg-white m-5 p-4 mb-2" style={{ width: "23rem" }}>
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
					<input type="submit" className="btn btn-primary" value="Login" />
				</div>
			</form>
			{redirect ? <Redirect to="/home" /> : ""}
		</div>
	);
};
