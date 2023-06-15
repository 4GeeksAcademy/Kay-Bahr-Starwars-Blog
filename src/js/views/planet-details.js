import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/details.css";

export const PlanetDetails = () => {
    const { store, actions } = useContext(Context);
    const { id } = useParams();

    useEffect(() => {
		actions.loadSomeData();
	}, []);

    const planet = store.planets.find(planet => planet.id === id);

    if (!planet) {
        return <div>Loading...</div>;
    }

    return (
        <div className="detailsBody">
            <div className="detailsContainer">
                <img src="..." className="detailsImg" alt={planet.name} />
                <div className="detailsProfile">
                    <h2>{planet.name}</h2>
                    <p>
                        Suspendisse potenti. Proin nisl orci, tincidunt sit amet efficitur non, mattis ut odio. 
                        Ut vitae placerat turpis, sit amet sodales est. Sed consectetur leo et eros dictum, eget mattis nisi pretium. 
                        Aenean condimentum arcu nisl, vitae ornare eros vehicula nec. Nunc lacinia luctus porta. 
                        Cras sit amet odio non lacus posuere feugiat sed id lorem.
                        Ut vitae placerat turpis, sit amet sodales est. Sed consectetur leo et eros dictum, eget mattis nisi pretium. 
                        Aenean condimentum arcu nisl, vitae ornare eros vehicula nec. Nunc lacinia luctus porta. 
                    </p>
                </div>
            </div>
            <div className="detailsBio">
                <hr className="hrLine" />
                <p>
                    Name
                    <br/>
                    {`${planet.name}`}
                </p>
                    <br />
                <p>
                    Climate
                    <br/>
                    {`${planet.climate}`}
                </p>
                    <br />
                <p>
                    Population
                    <br/>
                    {`${planet.population}`}
                </p>
                    <br />
                <p>
                    Orbital Period
                    <br/>
                    {`${planet.orbital_period}`}
                </p>
                    <br />
                <p>
                    Rotation Period
                    <br/>
                    {`${planet.rotation_period}`}
                </p>
                    <br />
                <p>
                    Diameter
                    <br/>
                    {`${planet.diameter}`}
                </p>
            </div>
        </div>
    );    
};