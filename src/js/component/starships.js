import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/card.css";
import { Link } from "react-router-dom";


export const Starships = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.loadSomeData();
	}, []);

	return (
		<div className="categories">
			<h1>Starships</h1>
			<div className="card-container">
				{store.starships && store.starships.map(starship => (
					<div className="card" key={starship.url}>
						<img src="..." className="card-img-top" alt="..." />
						<div className="card-body">
							<h5 className="card-title">{starship.name}</h5>
							<p className="card-text">
								Model: {starship.model}<br />
								Hyperdrive Rating: {starship.hyperdrive_rating}
							</p>
							<Link to={`/details/${starship.url}`} className="btn btn-outline-primary">
								Learn more!
							</Link>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};