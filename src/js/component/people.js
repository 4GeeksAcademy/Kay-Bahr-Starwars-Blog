import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/card.css";
import { Link } from "react-router-dom";

export const People = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.loadSomeData();
	}, []);

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
							<Link to={`/details/${person.url}`} className="btn btn-outline-primary">
								Learn more!
							</Link>
						</div>
					</div>
				))}
			</div>
	  </div>
	);
};  