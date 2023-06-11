import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {

	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">Starwars</span>
			</Link>
			<div>
    			<button className="btn btn-primary me-2" type="button">Favorites</button>
  			</div>
		</nav>
	);
};
