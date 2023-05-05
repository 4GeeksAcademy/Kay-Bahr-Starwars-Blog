import React from "react";
import { Link } from "react-router-dom";
import "../../styles/card.css";

export const Card = ({ title, description, url, onAddToFavorites, onRemoveFromFavorites, isFavorite }) => (
  <div className="card">
    <img src="..." className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{description}</p>
      <Link to={`/details/${url}`} className="btn btn-outline-primary">
        Learn more!
      </Link>
      {isFavorite ? (
        <button className="btn btn-outline-danger" onClick={onRemoveFromFavorites}>
          <i className="fas fa-heart" />
        </button>
      ) : (
        <button className="btn btn-outline-warning" onClick={onAddToFavorites}>
          <i className="far fa-heart" />
        </button>
      )}
    </div>
  </div>
);