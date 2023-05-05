import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Card } from "./card.jsx";

export const People = () => {
	const { store, actions } = useContext(Context);
	const { favorites, addToFavorites, removeFromFavorites } = actions;
	return (
	  <div className="categories">
		<h1>Characters</h1>
		<div className="card-container">
		  {store.people && store.people.map(person => (
			<Card
			  key={person.url}
			  title={person.name}
			  description={`Gender: ${person.gender}, Hair Color: ${person.hair_color}, Eye Color: ${person.eye_color}`}
			  onAddToFavorites={() => addToFavorites(person.name)}
			  onRemoveFromFavorites={() => removeFromFavorites(person.name)}
			  isFavorite={favorites && favorites.includes(person.name)}
			/>
		  ))}
		</div>
	  </div>
	);
};  

export const Planets = () => {
	const { store, actions } = useContext(Context);
	const { favorites, addToFavorites, removeFromFavorites } = actions;
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
						onAddToFavorites={() => addToFavorites(planet.name)}
			  			onRemoveFromFavorites={() => removeFromFavorites(planet.name)}
			  			isFavorite={favorites.includes(planet.name)}
					/>
				))}
			</div>
		</div>
	);
};

export const Starships = () => {
	const { store, actions } = useContext(Context);
	const { favorites, addToFavorites, removeFromFavorites } = actions;
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
						onAddToFavorites={() => addToFavorites(starship.name)}
			  			onRemoveFromFavorites={() => removeFromFavorites(starship.name)}
			  			isFavorite={favorites.includes(starship.name)}
					/>
				))}
			</div>
		</div>
	);
};

export const Home = () => (
	<div className="mt-5">
		<People />
		<Planets />
		<Starships />
	</div>
);
