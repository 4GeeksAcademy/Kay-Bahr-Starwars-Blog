import React from "react";
import "../../styles/home.css";
import { People } from "./people.jsx";
import { Planets } from "./planets.jsx";
import { Starships } from "./starships.jsx";

export const Home = () => (
	<div className="mt-5">
		<People />
		<Planets />
		<Starships />
	</div>
);
