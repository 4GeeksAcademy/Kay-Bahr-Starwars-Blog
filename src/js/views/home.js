import React from "react";
import "../../styles/home.css";
import { Card } from "./card.jsx";

export const Home = () => (
  <div className="mt-5">
    <div className="categories">
		<h1>Characters</h1>
		<div className="card-container">
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
		</div>
    </div>

    <div className="categories">
		<h1>Planets</h1>
		<div className="card-container">
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
		</div>
    </div>

	<div className="categories">
		<h1>Starships</h1>
		<div className="card-container">
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
		</div>
		</div>
	</div>
);
