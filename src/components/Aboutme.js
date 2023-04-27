import React from "react";
import nadine from "../images/nadine.jpg"

export default function Aboutme() {
    return (
        <div className="aboutmeDiv">
            <img className="aboutMeImages" src={nadine} height="400px" width="300px" />
            <div className="aboutMeBio">
            <p>I am a wanderlust soul. Soaking in knowledge of culture, music, food, spirituality, and other areas of life. What excites me is witnessing the unfoldings of human nature and the symbiosis. As a former student of Anthropology, I have an inclination to study the world through this lens more objectively. I believe in existing within the middle space of social media. Navigating probably the largest and most diverse culture there has ever been. It is easy to feel overwhelmed and the extreme sides of such platforms. From an anthropological view I understand how people congregate in their social circles online, create traditions, and culture with one another.</p>
            <p>I am here for your consulting needs as well. Let's dig into your target audience, your purpose, and goals. I can offer advice and tactics to strengthen the bonds between you and your community.</p>
            <p>Did I mention I am a jack of all trades? I am a palmist, in addition to a Human Design reader. The inner connections we have with ourselves, and how it resonates out into reality fascinates me. I have given many palm readings which show the roadmap of people's lives. I have come to understand the misrepresentation of its “future-telling” origins. While it can highlight potential unknowns…palm readings reveal our character, relationships, past hardships, and so much more. In fact, as we evolve in our lives the lines on our palm can change! This reinforces the notion that you are in fact in control of your destiny.</p>
            </div>
        </div>
    )
}