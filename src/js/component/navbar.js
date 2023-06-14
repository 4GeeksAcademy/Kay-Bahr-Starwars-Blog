import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Trash } from 'react-bootstrap-icons';

export const Navbar = ({ fav, handleRemove }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleMouseEnter = () => {
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setDropdownOpen(false);
  };

  return (
    <nav className="navbar navbar-light bg-light mb-3">
      <Link to="/">
        <span className="navbar-brand mb-0 h1">Starwars</span>
      </Link>
	  <div className="dropdown" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
		<button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" onClick={handleDropdownToggle}>
			Favorites {fav.length}
		</button>
		<ul className="list dropdown-menu">
			{Array.isArray(fav) && fav.map((favItem, index) => (
				<li key={index}>
					<a className="dropdown-item" href="#">
						{favItem}
					</a>
					<button
					className="closer dropdown-item"
					onClick={() => handleRemove(favItem)}
					>
						<Trash />
					</button>
				</li>
			))}
		</ul>
	  </div>
    </nav>
  );
};
