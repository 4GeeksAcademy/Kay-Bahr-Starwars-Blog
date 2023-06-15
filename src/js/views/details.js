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
            <div className="detailsContainer">
                <img src="..." className="detailsImg" alt={person.name} />
                <div className="detailsProfile">
                    <h2>{person.name}</h2>
                    <p>
                        Suspendisse potenti. Proin nisl orci, tincidunt sit amet efficitur non, mattis ut odio. 
                        Ut vitae placerat turpis, sit amet sodales est. 
                        Sed consectetur leo et eros dictum, eget mattis nisi pretium. 
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
                    {`${person.name}`}
                </p>
                    <br />
                <p>
                    Birth Year
                    <br/>
                    {`${person.birth_year}`}
                </p>
                    <br />
                <p>
                    Gender
                    <br/>
                    {`${person.gender}`}
                </p>
                    <br />
                <p>
                    Height
                    <br/>
                    {`${person.height}`}
                </p>
                    <br />
                <p>
                    Skin Color
                    <br/>
                    {`${person.skin_color}`}
                </p>
                    <br />
                <p>
                    Eye Color
                    <br/>
                    {`${person.eye_color}`}
                </p>
            </div>
        </div>
    );    
};