import React from "react";
import "../../styles/home.css";
import { People } from "/workspaces/Kay-Bahr-Starwars-Blog/src/js/component/people.js";
import { Planets } from "/workspaces/Kay-Bahr-Starwars-Blog/src/js/component/planets.js";
import { Starships } from "/workspaces/Kay-Bahr-Starwars-Blog/src/js/component/starships.js";

export const Home = ({ fav, setFav, handleRemove }) => (
	<div className="mt-5">
		<People fav={fav} setFav={setFav} handleRemove={handleRemove} />
		<Planets fav={fav} setFav={setFav} handleRemove={handleRemove} />
		<Starships fav={fav} setFav={setFav} handleRemove={handleRemove} />
	</div>
);
