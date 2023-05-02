import React, { useState, useEffect } from "react";
import getState from "./flux.js";

// Don't change, here is where we initialize our context, by default it's just going to be null.
export const Context = React.createContext(null);

// This function injects the global store to any view/component where you want to use it, we will inject the context to layout.js, you can see it here:
// https://github.com/4GeeksAcademy/react-hello-webapp/blob/master/src/js/layout.js#L35
const injectContext = PassedComponent => {
	const StoreWrapper = props => {
		//this will be passed as the contenxt value
		const [state, setState] = useState(
			getState({
				getStore: () => state.store,
				getActions: () => state.actions,
				setStore: updatedStore =>
					setState({
						store: Object.assign(state.store, updatedStore),
						actions: { ...state.actions }
					})
			})
		);

		useEffect(() => {
			/**
			 * EDIT THIS!
			 * This function is the equivalent to "window.onLoad", it only runs once on the entire application lifetime
			 * you should do your ajax requests or fetch api requests here. Do not use setState() to save data in the
			 * store, instead use actions, like this:
			 *
			 * state.actions.loadSomeData(); <---- calling this function from the flux.js actions
			 *
			 **/
			const getPeopleIdFromUrl = (url) => {
				const matches = url.match(/\/(\d+)\/$/);
				if (matches) {
				  return matches[1];
				}
				return null;
			};

			const getStarshipsIdFromUrl = (url) => {
				const matches = url.match(/\/(\d+)\/$/);
				if (matches) {
				  return matches[1];
				}
				return null;
			};
			  
			const getPlanetsIdFromUrl = (url) => {
				const matches = url.match(/\/(\d+)\/$/);
				if (matches) {
				  return matches[1];
				}
				return null;
			};
			  

			const fetchPeople = async () => {
				try {
					const response = await fetch('https://swapi.dev/api/people/');
					const data = await response.json();
					const peopleWithIds = data.results.map(person => ({
						...person,
						id: getPeopleIdFromUrl(person.url)
					}));
					setState(prevState => ({
						...prevState,
						store: {
							...prevState.store,
							people: peopleWithIds
						}
					}));
				} catch (error) {
					console.error('Error fetching people', error);
				}
			};
			
            
            const fetchStarships = async () => {
				try {
					const response = await fetch('https://swapi.dev/api/starships/');
					const data = await response.json();
					const starshipsWithIds = data.results.map(ship => ({
						...ship,
						id: getStarshipsIdFromUrl(ship.url)
					}));
					setState(prevState => ({
						...prevState,
						store: {
							...prevState.store,
							ship: starshipsWithIds
						}
					}));
				} catch (error) {
					console.error('Error fetching starships', error);
				}
			};
			
            
			const fetchPlanets = async () => {
				try {
					const response = await fetch('https://swapi.dev/api/planets/');
					const data = await response.json();
					const planetsWithIds = data.results.map(planet => ({
						...planet,
						id: getPlanetsIdFromUrl(planet.url)
					}));
					setState(prevState => ({
						...prevState,
						store: {
							...prevState.store,
							planet: planetsWithIds
						}
					}));
				} catch (error) {
					console.error('Error fetching planets', error);
				}
			};
			
            fetchPeople();
            fetchStarships();
            fetchPlanets();
		}, []);

		// The initial value for the context is not null anymore, but the current state of this component,
		// the context will now have a getStore, getActions and setStore functions available, because they were declared
		// on the state of this component
		return (
			<Context.Provider value={state}>
				<PassedComponent {...props} />
			</Context.Provider>
		);
	};
	return StoreWrapper;
};

export default injectContext;
