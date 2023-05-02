import React from "react";
import "../../styles/card.css";
import { People, Planets, Starships } from "./home.js";

export const Card = ({ title, description }) => (
	<div className="card">
  		<img src="..." className="card-img-top" alt="..." />
  		<div className="card-body">
    		<h5 className="card-title">{title}</h5>
    		<p className="card-text">{description}</p>
    		<a href="/details" className="btn btn-outline-primary">Learn more!</a>
			<a href="/" className="btn btn-outline-warning">Heart</a>
  		</div>
	</div>
);