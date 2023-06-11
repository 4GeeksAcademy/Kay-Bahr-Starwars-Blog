import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Card } from "./card.jsx";

export const Starships = () => {
	const { store } = useContext(Context);
	return (
		<div className="categories">
			<h1>Starships</h1>
			<div className="card-container">
				{store.starships && store.starships.map(starship => (
					<Card
						key={starship.url}
						title={starship.name}
						description=
						{`Model: ${starship.model}, 
						Hyperdrive Rating: ${starship.hyperdrive_rating}`}
					/>
				))}
			</div>
		</div>
	);
};