import React from "react";
import Offering from "./Offering";
import { marketingOfferingsData } from "../data/marketingOfferings";

const styles = {
    aboutmeDiv: {
        display: 'flex',
        flexDirection: 'column', // Change to column to stack the image above the text
        alignItems: 'center',
        gap: '20px', // Reduce the gap between the image and text
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    },
    aboutMeImages: {
        height: '400px',
        width: '300px',
        borderRadius: '10px',
        boxShadow: '0 0 5px rgba(0, 0, 0, 0.3)',
    },
    aboutMeBio: {
        fontFamily: 'Arial, sans-serif',
        color: '#333',
        fontSize: '18px',
        lineHeight: 1.6,
        textAlign: 'left', // Center the text
    },
    paragraph: {
        marginBottom: '20px',
        textAlign: 'left'
    },
    header: {
        fontFamily: 'Arial, sans-serif',
        fontWeight: 'bold',
        fontSize: '24px',
        color: '#333',
    },
    listItem: {
        listStyleType: 'disc',
        marginBottom: '5px',
    },
    testimonial: {
        fontFamily: 'Arial, sans-serif',
        fontSize: '18px',
        color: '#333',
        backgroundColor: '#f9f9f9',
        borderRadius: '10px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        padding: '20px',
        marginBottom: '20px',
    },
};

export default function Interconnect() {

    return (
        <div style={styles.aboutmeDiv}>
            <div style={styles.header}>Interconnect</div>
            <p style={styles.aboutMeBio}>It is my passion to bridge the space between marketing and your audience. To build campaigns that focus on organic growth, feel more authentic to your values, and release the pressure off you, by me creating/setting up your accounts, making content, scheduling, and engaging with your audience.</p>
            {marketingOfferingsData.map((offer) => (
                <Offering key={offer.id} data={offer} />
            ))}
            <div style={styles.header}>Testimonials</div>
            <div style={styles.testimonial}>
                <h3>Lacey Pettibone, <u>Pocket Blonde Fitness LLC</u></h3>
                <p style={styles.paragraph}>Nadine has been an asset to the team since we hired her. She is highly self motivated and always looking to grow and learn more. Nadine constantly asks what more she can be doing and is eager for new training. Nadine is innovative and has taken many high level projects into her own hands without being asked to do so. These include building a sales page and managing lead funnels in Kartra as well as setting up and managing Meta for 6 separate accounts. Nadine is constantly bringing new ideas to the table to both improve the business as well as the client experience. She is an invaluable asset to the team, and we would be lost without her.</p>
                <p style={styles.paragraph}>Aside from constantly taking on new projects her weekly duties include, but aren't limited to:</p>
                <ul>
                    <li style={styles.listItem}>Managing our content calendar including scheduling weekly content to fit the aesthetics of our page and looking through old content to find opportunities to repurpose.</li>
                    <li style={styles.listItem}>Created and manages our content carousel including post links content buckets, and repurposing
                    </li>
                    <li style={styles.listItem}>Researches our competitors to come up with new content ideas </li>
                    <li style={styles.listItem}>Manages our Facebook page including welcoming new members, finding leads, and creating some of the content </li>
                    <li style={styles.listItem}>Reads through all client check in forms to create story wins and testimonials via Canva
                    </li>
                    <li style={styles.listItem}>Creates story polls and collects the data to find potential leads</li>
                    <li style={styles.listItem}>Nadine is skilled in canva and has taken it upon herself to create canva posts and write copy for our Instagram page on a weekly basis.</li>
                </ul>
            </div>
        </div>
    )
}