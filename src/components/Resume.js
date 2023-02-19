import React from "react";
import Header from "./Header";
import NavLinks from "./NavLinks";
import { jobData } from "../data/jobs";
import { leadershipData } from "../data/leadership";
import JobCard from "./JobCard";

export default function Resume() {
    const resumeTitle="Resume"

    return (
        <div className="resumeComponentDiv">
            <NavLinks />
            <Header title={resumeTitle} />
            <h1>Professional Experience</h1>
            <ul className="jobUl">
                {jobData.map((job) => {
                    return <JobCard key={job.id} job={job} />
                })}
            </ul>
            <h1>Leadership Experience</h1>
            <ul className="jobUl">
                {leadershipData.map((job) => {
                    return <JobCard key={job.id} job={job} />
                })}
            </ul>
        </div>
    )
}