import React from "react";
import Header from "./Header";
import NavLinks from "./NavLinks";
import { jobData } from "../data/jobs";
import { leadershipData } from "../data/leadership";
import JobCard from "./JobCard";
import Footer from "./Footer";

export default function Resume() {
    const resumeTitle="Resume"

    return (
        <div className="resumeComponentDiv">
            <Header title={resumeTitle} />
            <h2>Education:</h2>
            <p>Bachelor of Arts in Cultural Anthropology,</p>
            <p>Fall 2017 Kent State University, Kent, Ohio</p>
            <h2>Professional Experience:</h2>
            <ul className="jobUl">
                {jobData.map((job) => {
                    return <JobCard key={job.id} job={job} />
                })}
            </ul>
            <h2>Leadership Experience:</h2>
            <ul className="jobUl">
                {leadershipData.map((job) => {
                    return <JobCard key={job.id} job={job} />
                })}
            </ul>
            <Footer />
        </div>
    )
}