import React from "react";
//include images into your bundle
//import rigoImage from "../../img/rigo-baby.jpg";
//create your fisrt component
const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top d-flex">
			<a className="navbar-brand text-white" href="#">
				Start Boostrap
			</a>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarNavAltMarkup"
				aria-controls="navbarNavAltMarkup"
				aria-expanded="false"
				aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
				<div className="navbar-nav ml-auto">
					<a className="nav-link active text-white " href="#">
						Home <span className="sr-only">(current)</span>
					</a>
					<a className="nav-link text-white" href="#">
						About
					</a>
					<a className="nav-link text-white" href="#">
						Services
					</a>
					<a
						className="nav-link text-white"
						href="#"
						aria-disabled="true">
						Contact
					</a>
				</div>
			</div>
		</nav>
	);
};
export default Navbar;
