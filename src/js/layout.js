import React, {useState} from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Details } from "./views/details.jsx";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	const [favorites, setFavorites] = useState([]);

  	const removeFromFavorites = (title) => {
    setFavorites(favorites.filter((t) => t !== title));
  	};

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar favorites={favorites} removeFromFavorites={removeFromFavorites}/>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/details" element={<Details />} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
