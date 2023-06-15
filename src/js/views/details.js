import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/details.css";

export const Details = () => {
    const { store, actions } = useContext(Context);
    const { id } = useParams();

    useEffect(() => {
		actions.loadSomeData();
	}, []);

    const person = store.people.find(person => person.id === id);

    if (!person) {
        return <div>Loading...</div>;
    }

    return (
        <div className="detailsBody">
            <img src="..." className="card-img-top" alt={person.name} />
            <div className="detailsProfile">
                <h2>{person.name}</h2>
                <p>Suspendisse potenti. Proin nisl orci, tincidunt sit amet efficitur non, mattis ut odio. Ut vitae placerat turpis, sit amet sodales est. Sed consectetur leo et eros dictum, eget mattis nisi pretium. Aenean condimentum arcu nisl, vitae ornare eros vehicula nec. Nunc lacinia luctus porta. Cras sit amet odio non lacus posuere feugiat sed id lorem. Suspendisse gravida accumsan libero a laoreet. Vestibulum egestas egestas purus, vitae dictum neque feugiat iaculis. Nullam mattis rhoncus ipsum, mattis blandit lectus interdum non. Fusce bibendum mauris in lorem finibus volutpat. Integer ornare accumsan aliquam. Maecenas viverra nulla in diam maximus pellentesque. Mauris eu ex ac magna pulvinar tristique sit amet in ex. Mauris iaculis aliquam mi, eu ultrices lacus vulputate eu.</p>
            </div>
            <div className="detailsBio">
                <hr />
                <p>
                    {`Name: ${person.name}`}
                    <br />
                    {`Birth Year: ${person.birth_year}`}
                    <br />
                    {`Gender: ${person.gender}`}
                    <br />
                    {`Height: ${person.height}`}
                    <br />
                    {`Skin Color: ${person.skin_color}`}
                    <br />
                    {`Eye Color: ${person.eye_color}`}
                </p>
            </div>
        </div>
    );    
};