import React from "react";
import Slideshow from "./Slideshow";
import { offeringsData } from "../data/offerings";
import Offering from "./Offering";

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

export default function Intraconnect() {

    return (
        <div style={styles.aboutmeDiv}>
            <div style={styles.header}>Intraconnect</div>
            <p style={styles.aboutMeBio}>Did I mention I am a jack of all trades? I am a palmist, in addition to a Human Design reader. The inner connections we have with ourselves, and how it resonates out into reality fascinates me. I have given many palm readings which show the roadmap of people's lives. I have come to understand the misrepresentation of its “future-telling” origins. While it can highlight potential unknowns…palm readings reveal our character, relationships, past hardships, and so much more. In fact, as we evolve in our lives the lines on our palm can change! This reinforces the notion that you are in fact in control of your destiny.</p>
            {offeringsData.map((offer) => (
                <Offering key={offer.id} data={offer} />
            ))}
            <div style={styles.header}>Testimonials</div>
            <Slideshow />
        </div>
    )
}