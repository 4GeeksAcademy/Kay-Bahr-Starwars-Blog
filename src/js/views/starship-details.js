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
            <img src="..." className="card-img-top" alt={starship.name} />
            <div className="detailsProfile">
                <h2>{starship.name}</h2>
                <p>Suspendisse potenti. Proin nisl orci, tincidunt sit amet efficitur non, mattis ut odio. Ut vitae placerat turpis, sit amet sodales est. Sed consectetur leo et eros dictum, eget mattis nisi pretium. Aenean condimentum arcu nisl, vitae ornare eros vehicula nec. Nunc lacinia luctus porta. Cras sit amet odio non lacus posuere feugiat sed id lorem. Suspendisse gravida accumsan libero a laoreet. Vestibulum egestas egestas purus, vitae dictum neque feugiat iaculis. Nullam mattis rhoncus ipsum, mattis blandit lectus interdum non. Fusce bibendum mauris in lorem finibus volutpat. Integer ornare accumsan aliquam. Maecenas viverra nulla in diam maximus pellentesque. Mauris eu ex ac magna pulvinar tristique sit amet in ex. Mauris iaculis aliquam mi, eu ultrices lacus vulputate eu.</p>
            </div>
            <div className="detailsBio">
                <hr />
                <p>
                    {`Name: ${starship.name}`}
                    <br />
                    {`Model: ${starship.model}`}
                    <br />
                    {`Hyperdrive Rating: ${starship.hyperdrive_rating}`}
                    <br />
                    {`Length: ${starship.length}`}
                    <br />
                    {`Crew: ${starship.crew}`}
                    <br />
                    {`Passengers: ${starship.passengers}`}
                </p>
            </div>
        </div>
    );    
};