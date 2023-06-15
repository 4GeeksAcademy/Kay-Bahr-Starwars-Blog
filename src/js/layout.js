import React, {useState} from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Details } from "./views/details.js";
import { PlanetDetails } from "./views/planet-details.js";
import { StarshipDetails } from "./views/starship-details.js";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

import { stateContext } from "./store/appContext";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	const [fav, setFav] = useState([]);

	const handleRemove = (item) => {
		const updatedFavorites = fav.filter((favItem) => favItem !== item);
		setFav(updatedFavorites); // Assuming you have a function called handleSetFavorites to update the favorites list
	};
	  

	return (
		<div>
			<stateContext.Provider value={{ fav, setFav }}>
				<BrowserRouter basename={basename}>
					<ScrollToTop>
						<Navbar fav={fav} handleRemove={handleRemove}/>
						<Routes>
							<Route path="/" element={<Home fav={fav} setFav={setFav} handleRemove={handleRemove} />} />
							<Route path="/details/:id" element={<Details />} />
							<Route path="/planet_details/:id" element={<PlanetDetails />} />
							<Route path="/starship_details/:id" element={<StarshipDetails />} />
							<Route path="*" element={<h1>Not found!</h1>} />
						</Routes>
						<Footer />
					</ScrollToTop>
				</BrowserRouter>
			</stateContext.Provider>
		</div>
	);
};

export default injectContext(Layout);
