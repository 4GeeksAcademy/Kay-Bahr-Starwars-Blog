import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/details.css";

export const StarshipDetails = () => {
    const { store, actions } = useContext(Context);
    const { id } = useParams();

    useEffect(() => {
		actions.loadSomeData();
	}, []);

    const starship = store.starships.find(starship => starship.id === id);

    if (!starship) {
        return <div>Loading...</div>;
    }

    return (
        <div className="detailsBody">
            <div className="detailsContainer">
                <img src="..." className="detailsImg" alt={starship.name} />
                <div className="detailsProfile">
                    <h2>{starship.name}</h2>
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
                    {`${starship.name}`}
                </p>
                    <br />
                <p>
                    Model
                    <br/>
                    {`${starship.model}`}
                </p>
                    <br />
                <p>
                    Hyperdrive Rating
                    <br/>
                    {`${starship.hyperdrive_rating}`}
                </p>
                    <br />
                <p>
                    Length
                    <br/>
                    {`${starship.length}`}
                </p>
                    <br />
                <p>
                    Crew
                    <br/>
                    {`${starship.crew}`}
                </p>
                    <br />
                <p>
                    Passengers
                    <br/>
                    {`${starship.passengers}`}
                </p>
            </div>
        </div>
    );    
};