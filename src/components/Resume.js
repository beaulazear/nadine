import React from "react";
import { jobData } from "../data/jobs";
import { leadershipData } from "../data/leadership";
import JobCard from "./JobCard";

const header = {
    fontFamily: 'Arial, sans-serif',
    fontWeight: 'bold',
    fontSize: '24px',
    color: '#333',
    paddingTop: '15px'
}

export default function Resume() {
    return (
        <div className="resumeComponentDiv">
            <div style={header}>Resume</div>
            <p>Nadine Hoopingarner</p>
            <p>nadinefhoop@gmail.com</p>
            <p>Instagram: <a href="https://www.instagram.com/enidanpooh/?hl=en" target="_blank">edidanpooh</a></p>
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
            <footer>Lets chat! nadinefhoop@gmail.com : IG-<a href="https://www.instagram.com/enidanpooh/?hl=en" target="_blank">edidanpooh</a></footer>
        </div>
    )
}