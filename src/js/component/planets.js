import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Card } from "/workspaces/Kay-Bahr-Starwars-Blog/src/js/views/card.jsx";

export const Planets = () => {
	const { store } = useContext(Context);
	return (
		<div className="categories">
			<h1>Planets</h1>
			<div className="card-container">
				{store.planets && store.planets.map(planet => (
					<Card
						key={planet.url}
						title={planet.name}
						description=
						{`Population: ${planet.population}, 
						Terrain: ${planet.terrain}`}
					/>
				))}
			</div>
		</div>
	);
};