import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/card.css";
import { Link } from "react-router-dom";
import { Heart } from 'react-bootstrap-icons';

export const Planets = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.loadSomeData();
	}, []);

	const [favValue, setFavValue] = useState("");
	const [fav, setFav] = useState([]);

	const handleKeyDown = (e) => {
		if (e.key === "Enter") {
			setFav([...fav, favValue]);
			setFavValue("");
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
							<Link to={`/details/planets/${planet.url.match(/\/(\d+)\/$/)[1]}`} className="btn btn-outline-primary">
								Learn more!
							</Link>
							<button
								className="btn btn-outline-warning me-md-2"
								onClick={() => {
									setFav([...fav, planet.name]);
								}}
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