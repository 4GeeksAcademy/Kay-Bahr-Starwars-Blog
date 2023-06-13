import React, {useState} from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Details } from "./views/details.js";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

import { stateContext } from "./store/appContext";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	const [favorites, setFavorites] = useState([]);

	const handleRemoveFavorite = (index) => {
		const newFavorites = [...favorites];
		newFavorites.splice(index, 1);
		setFavorites(newFavorites);
	};

	return (
		<div>
			<stateContext.Provider >
				<BrowserRouter basename={basename}>
					<ScrollToTop>
						<Navbar fav={favorites} />
						<Routes>
							<Route path="/" element={<Home/>} />
							<Route path="/details/*" element={<Details />} />
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
