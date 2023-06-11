import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Card } from "./card.jsx";

export const People = () => {
	const { store } = useContext(Context);
	return (
	  <div className="categories">
		<h1>Characters</h1>
		<div className="card-container">
		  {store.people && store.people.map(person => (
			<Card
			  key={person.url}
			  title={person.name}
			  description={`Gender: ${person.gender}, Hair Color: ${person.hair_color}, Eye Color: ${person.eye_color}`}
			/>
		  ))}
		</div>
	  </div>
	);
};  