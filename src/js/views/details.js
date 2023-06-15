import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/details.css";

export const Details = () => {
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
                        <h2>{data.name}</h2>
                        <p>{`${data.description}`}</p>
                    </div>
                    <div className="detailsBio">
                        <hr />
                        <p>
                            {`Name: ${data.name}`}
                            <br />
                            {`Birth Year: ${data.birth_year}`}
                            <br />
                            {`Gender: ${data.gender}`}
                            <br />
                            {`Height: ${data.height}`}
                            <br />
                            {`Skin Color: ${data.skin_color}`}
                            <br />
                            {`Eye Color: ${data.eye_color}`}
                        </p>
                    </div>
                </>
            )}
        </div>
    );    
};