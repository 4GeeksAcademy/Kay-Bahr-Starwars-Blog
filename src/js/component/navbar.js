import React from "react";
import { Link } from "react-router-dom";

export const Navbar = ({ favorites, removeFromFavorites }) => {

	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">Starwars</span>
			</Link>
			<div className="ml-auto">
				<div className="dropdown">
					<button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
						Favorites
					</button>
					<ul className="dropdown-menu">
  						{favorites && favorites.map((title) => (
    					<li key={title}>
      						<span className="dropdown-item">{title}</span>
      						<button className="btn btn-link" onClick={() => removeFromFavorites(title)}>
        						<i className="far fa-trash-alt"></i>
      						</button>
    					</li>
  						))}
					</ul>
				</div>
			</div>
		</nav>
	);
};
