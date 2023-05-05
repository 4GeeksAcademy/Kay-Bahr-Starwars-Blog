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

    const renderDetails = () => {
        if (error) {
            return <div>Error: {error}</div>;
        } else if (data) {
            switch (category) {
                case "people":
                    return (
                        <>
                            <div className="detailsBody">
                                <img src="..." className="card-img-top" alt={data.name} />
                                <div className="detailsProfile">
                                    <h2>{data.name}</h2>
                                    <p>
                                        {`${data.description}`}
                                    </p>
                                </div>
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
                    );
                case "planets":
                    return (
                        <>
                            <div className="detailsBody">
                                <img src="..." className="card-img-top" alt={data.name} />
                                <div className="detailsProfile">
                                    <h2>{data.name}</h2>
                                    <p>
                                        {`${data.description}`}
                                    </p>
                                </div>
                            </div>
                            <div className="detailsBio">
                                <hr />
                                <p>
                                    {`Name: ${data.name}`}
                                    <br />
                                    {`Climate: ${data.climate}`}
                                    <br />
                                    {`Population: ${data.population}`}
                                    <br />
                                    {`Orbital Period: ${data.orbital_period}`}
                                    <br />
                                    {`Rotation Period: ${data.rotation_period}`}
                                    <br />
                                    {`Diameter: ${data.diameter}`}
                                </p>
                            </div>
                        </>
                    );
                case "starships":
                    return (
						<>
							<div className="detailsBody">
								<img src="..." className="card-img-top" alt="..." />
								<div className="detailsProfile">
									<h2>{store.starships.name}</h2>
									<p>
										{`${store.starships.description}`}
									</p>
								</div>
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
                );
            default:
                return null;
            }
        } else {
            return null;
        }
    };

    return <div className="detailsWrapper">{renderDetails()}</div>;
};