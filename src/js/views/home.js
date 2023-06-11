import React from "react";
import "../../styles/home.css";
import { People } from "../../component/people.js";
import { Planets } from "../../component/planets.js";
import { Starships } from "../../component/starships.js";

export const Home = () => (
	<div className="mt-5">
		<People />
		<Planets />
		<Starships />
	</div>
);
