import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/card.css";
import { Link } from "react-router-dom";
import { Heart } from 'react-bootstrap-icons';

export const People = () => {
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
		<h1>Characters</h1>
		<div className="card-container">
				{store.people && store.people.map(person => (
					<div className="card" key={person.url}>
						<img src="..." className="card-img-top" alt="..." />
						<div className="card-body">
							<h5 className="card-title">{person.name}</h5>
							<p className="card-text">
								Gender: {person.gender}<br />
								Hair Color: {person.hair_color}<br />
								Eye Color: {person.eye_color}
							</p>
							<Link to={`/details/people/${person.url.match(/\/(\d+)\/$/)[1]}`} className="btn btn-outline-primary">
								Learn more!
							</Link>
							<button
								className="btn btn-outline-warning me-md-2"
								onClick={() => {
									setFav([...fav, person.name]);
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