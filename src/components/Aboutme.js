import React from "react";
import nadine from "../images/nadine.jpg"

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
        textAlign: 'center', // Center the text
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
};

export default function Aboutme() {
    return (
        <div style={styles.aboutmeDiv}>
            <div style={styles.header}>Nadine Hoopingarner</div>
            <img style={styles.aboutMeImages} src={nadine} height="400px" width="300px" />
            <div style={styles.aboutMeBio}>
                <p style={styles.paragraph}>I am a wanderlust soul. Soaking in knowledge of culture, music, food, spirituality, and other areas of life. What excites me is witnessing the unfoldings of human nature and the symbiosis. As a former student of Anthropology, I have an inclination to study the world through this lens more objectively. I believe in existing within the middle space of social media. Navigating probably the largest and most diverse culture there has ever been. It is easy to feel overwhelmed and the extreme sides of such platforms. From an anthropological view I understand how people congregate in their social circles online, create traditions, and culture with one another.</p>
                <p style={styles.paragraph}>I am here for your consulting needs as well. Let's dig into your target audience, your purpose, and goals. I can offer advice and tactics to strengthen the bonds between you and your community.</p>
            </div>
        </div>
    )
}