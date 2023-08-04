import React from 'react';

const styles = {
    offeringDivs: {
        backgroundColor: '#f3f3f3',
        borderRadius: '10px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        padding: '20px',
        marginBottom: '20px',
        width: '90%', // Set the width to 90% for larger screens
        maxWidth: '400px', // Set the maximum width to 400px for smaller screens
        margin: '0 auto', // Center the component horizontally
    },
    heading: {
        fontFamily: 'Arial, sans-serif',
        fontSize: '24px',
        color: '#333',
        marginBottom: '10px',
    },
    subheading: {
        fontFamily: 'Arial, sans-serif',
        fontSize: '18px',
        color: '#777',
        marginBottom: '10px',
    },
    description: {
        fontFamily: 'Arial, sans-serif',
        fontSize: '16px',
        color: '#444',
    },
};

const Offering = ({ data }) => {
    return (
        <div style={styles.offeringDivs}>
            <h3 style={styles.heading}>{data.name}</h3>
            <h4 style={styles.subheading}>{data.time}</h4>
            <ul className="offeringDescriptions">
                {data.descriptions.map((desc) => (
                    <li style={styles.description} className="offeringDescriptionsLi" key={desc.id}>
                        {desc.info}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Offering;
