import React from "react";

export const Footer = () => {
	return (
		<div className="card-footer text-muted bg-dark py-3 row mt-5">
			<div className="col-4" />
			<div className="col-4">
				<div className="row">
					<div className="col-6">
						<a className="nav-link disabled text-white" href="#" tabIndex="-1" aria-disabled="true">
							<b>Desarrollador: Samuel Campos Cruz</b>
						</a>
					</div>
					<div className="col-3">
						<a className="nav-link" href="samuelcampos15009@gmail.com">
							<i className="fas fa-envelope" /> Email
						</a>
					</div>
					<div className="col-3">
						<a
							className="nav-link"
							href="https://github.com/Samo3021"
							target={"_blank"}
							tabIndex="-1"
							aria-disabled="false">
							<i className="fab fa-github" /> GitHub
						</a>
					</div>
				</div>
			</div>
			<div className="col-4" />
		</div>
	);
};
