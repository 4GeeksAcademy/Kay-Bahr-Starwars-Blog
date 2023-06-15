import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/card.css";
import { Link } from "react-router-dom";
import { Heart } from 'react-bootstrap-icons';

export const Planets = ({ fav, setFav, handleRemove }) => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.loadSomeData();
	}, []);

	const handleFavorite = (planet) => {
		if (fav.includes(planet.name)) {
			handleRemove(planet.name);
		} else {
			setFav([...fav, planet.name]);
		}
	}; 

	return (
		<div className="categories">
			<h1>Planets</h1>
			<div className="card-container">
				{store.planets && store.planets.map(planet => (
					<div className="card" key={planet.url}>
						<img src="..." className="card-img-top" alt="..." />
						<div className="card-body">
							<h5 className="card-title">{planet.name}</h5>
							<p className="card-text">
								Population: {planet.population}<br />
								Terrain: {planet.terrain}
							</p>
							<Link to={`/planet_details/${planet.url.match(/\/(\d+)\/$/)[1]}`} className="btn btn-outline-primary">
								Learn more!
							</Link>
							<button
								className="btn btn-outline-warning me-md-2"
								onClick={() => handleFavorite(planet)}						
							>
								<Heart />
							</button>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};