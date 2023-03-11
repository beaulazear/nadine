import React from "react";

export default function Offering({ data }) {
    return (
        <div className="offeringDivs">
            <h3>{data.name}, {data.time}</h3>
            <ul className="offeringDescriptions">
                {data.descriptions.map((desc) =>
                    <li className="offeringDescriptionsLi" key={desc.id}>{desc.info}</li>
                )}
            </ul>
        </div>
    )
}