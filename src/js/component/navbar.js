import React, {useState} from "react";
import { Link } from "react-router-dom";
import { CaretDownFill, Trash } from 'react-bootstrap-icons';

export const Navbar = ({ fav, handleRemove }) => {
	const [hoveredIndex, setHoveredIndex] = useState(-1);

	const handleMouseEnter = (index) => {
	  setHoveredIndex(index);
	};
  
	const handleMouseLeave = () => {
	  setHoveredIndex(-1);
	};

	return (
		<nav className="navbar navbar-light bg-light mb-3">
		  <Link to="/">
			<span className="navbar-brand mb-0 h1">Starwars</span>
		  </Link>
		  <div className="dropdown">
			<button className="btn btn-primary me-2" type="button">
			  Favorites {fav.length} <CaretDownFill />
			</button>
			<ul className="list dropdown-menu">
			  {fav.map((favItem, index) => (
				<li
				  key={index}
				  onMouseEnter={() => handleMouseEnter(index)}
				  onMouseLeave={handleMouseLeave}
				>
				  {favItem}
				  {hoveredIndex === index && (
					<button
					  className="closer dropdown-item"
					  onClick={() => handleRemove(favItem)}
					>
					  <Trash />
					</button>
				  )}
				</li>
			  ))}
			</ul>
		  </div>
		</nav>
	);
};
