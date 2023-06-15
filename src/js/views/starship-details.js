import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/details.css";

export const StarshipDetails = () => {
    const { store } = useContext(Context);
    const { id, category } = useParams();
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`https://swapi.dev/api/${category}/${id}/`)
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => setError(error.message));
    }, [id, category]);

    return (
        <div className="detailsBody">
            {data && (
                <>
                    <img src="..." className="card-img-top" alt={data.name} />
                    <div className="detailsProfile">
                        <h2>{store.starships.name}</h2>
                        <p>
                            {`${store.starships.description}`}
                        </p>
                    </div>
                    <div className="detailsBio">
                        <hr />
                        <p>
                        {`Name: ${store.starships.name}`}
                        <br />
                        {`Model: ${store.starships.model}`}
                        <br />
                        {`Hyperdrive Rating: ${store.starships.hyperdrive_rating}`}
                        <br />
                        {`Length: ${store.starships.length}`}
                        <br />
                        {`Crew: ${store.starships.crew}`}
                        <br />
                        {`Passengers: ${store.starships.passengers}`}
                        </p>
                    </div>
                </>
            )}
        </div>
    );     
};