import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import { StoreContext } from "../store/appContext";

export const Favorites = () => {
    const { state } = useContext(StoreContext);

    const favorites = state.items.filter(item => item.isFavorite);
  
    return (
        <div className="dropdown">
			<button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
				Favorites ({favorites.length})
			</button>
			<ul className="dropdown-menu">
  				{favorites && favorites.map(item => (
    			<li key={item.id}>
      				<Link to={`/details/${item.type}/${item.id}`} className="dropdown-item">{item.name}</Link>
      				<button className="btn btn-link" onClick={() => removeFromFavorites(title)}>
        				<i className="far fa-trash-alt"></i>
      				</button>
    			</li>
  				))}
			</ul>
		</div>
    );
};