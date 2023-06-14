import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/card.css";
import { Link } from "react-router-dom";
import { Heart } from 'react-bootstrap-icons';


export const Starships = () => {
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
			<h1>Starships</h1>
			<div className="card-container">
				{store.starships && store.starships.map(starship => (
					<div className="card" key={starship.url}>
						<img src="..." className="card-img-top" alt="..." />
						<div className="card-body">
							<h5 className="card-title">{starship.name}</h5>
							<p className="card-text">
								Model: {starship.model}<br />
								Hyperdrive Rating: {starship.hyperdrive_rating}
							</p>
							<Link to={`/details/starships/${starship.url.match(/\/(\d+)\/$/)[1]}`} className="btn btn-outline-primary">
								Learn more!
							</Link>
							<button
								className="btn btn-outline-warning me-md-2"
								onClick={() => {
									if (fav.includes(starship.name)) {
										setFav(fav.filter((item) => item !== starship.name));
									} else {
										setFav([...fav, starship.name]);
									}
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