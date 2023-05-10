import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/card.css";

export const Card = ({ title, description, url }) => {
  const { actions } = useContext(Context);

  const handleAddToFavorites = () => {
    actions.addToFavorites(character);
  };

  const handleRemoveFromFavorites = () => {
    actions.removeFromFavorites(character);
  };

  const isFavorite = () => {
    return actions.store.favorites.includes(character);
  };

(
  <div className="card">
    <img src="..." className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{description}</p>
      <Link to={`/details/${url}`} className="btn btn-outline-primary">
        Learn more!
      </Link>
      {isFavorite ? (
        <button className="btn btn-outline-danger" onClick={handleRemoveFromFavorites}>
          <i className="fas fa-heart" />
        </button>
      ) : (
        <button className="btn btn-outline-warning" onClick={handleAddToFavorites}>
          <i className="far fa-heart" />
        </button>
      )}
    </div>
  </div>
);
};