import React from "react";

export default function JobCard({ job }) {
    return (
        <div className="jobCardDiv">
            <h2>{job.jobTitle}</h2>
            <h3>{job.companyName}</h3>
            <ul className="jobDescriptionUl">
                {job.jobDescriptions.map((roll) => {
                    return <li className="jobDescriptionLis" key={roll.id}>{roll.roll}</li>
                })}
            </ul>
        </div>
    )
}