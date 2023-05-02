import React from "react";
import "../../styles/details.css";

export const Details = () => (
	<div className="detailsFull">
        <div className="detailsBody">
            <img src="..." className="card-img-top" alt="..." />
            <div className="detailsProfile">
                <h2>Name</h2>
                <p>
                    This is the details.
                </p>
            </div>
        </div>
        <div className="detailsBio">
            <hr></hr>
            <p>
                Bio info
            </p>
        </div>
    </div>
);