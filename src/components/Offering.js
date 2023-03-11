import React from "react";

export default function Offering({ data }) {
    return (
        <div className="offeringDivs">
            <h3>{data.name}</h3>
            <h4>{data.time}</h4>
            <ul className="offeringDescriptions">
                {data.descriptions.map((desc) =>
                    <li className="offeringDescriptionsLi" key={desc.id}>{desc.info}</li>
                )}
            </ul>
        </div>
    )
}