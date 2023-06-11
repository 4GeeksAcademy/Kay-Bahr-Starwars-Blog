const getState = () => {
	return {
	  store: {
		people: [],
		starships: [],
		planets: [],
	  },
	  actions: {
		exampleFunction: () => {
		  this.changeColor(0, "green");
		},
		loadSomeData: () => {
		  Promise.all([
			fetch("https://swapi.dev/api/people/").then((res) => res.json()),
			fetch("https://swapi.dev/api/starships/").then((res) => res.json()),
			fetch("https://swapi.dev/api/planets/").then((res) => res.json()),
		  ])
			.then(([people, starships, planets]) => {
			  const peopleWithIds = people.results.map((person) => ({
				...person,
				id: person.url.match(/\/(\d+)\/$/)[1],
			  }));
			  const starshipsWithIds = starships.results.map((ship) => ({
				...ship,
				id: ship.url.match(/\/(\d+)\/$/)[1],
			  }));
			  const planetsWithIds = planets.results.map((planet) => ({
				...planet,
				id: planet.url.match(/\/(\d+)\/$/)[1],
			  }));
			  this.setStore({
				people: peopleWithIds,
				starships: starshipsWithIds,
				planets: planetsWithIds,
			  });
			})
			.catch((error) => console.error("Error fetching data", error));
		},
	  },
	};
  };
  
  export default getState;
  