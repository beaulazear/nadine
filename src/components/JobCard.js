import React from "react";

export default function JobCard({ job }) {
    return (
        <div className="jobCardDiv">
            <h3>{job.jobTitle}</h3>
            <h4>{job.companyName}, ({job.datesWorked})</h4>
            <ul className="jobDescriptionUl">
                {job.jobDescriptions.map((roll) => {
                    return <li className="jobDescriptionLis" key={roll.id}>{roll.roll}</li>
                })}
            </ul>
        </div>
    )
}