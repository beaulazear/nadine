import React from "react";
import { Container, Image } from 'react-bootstrap';
import styled from 'styled-components';
import nadine from "../images/nadine.jpeg";

const StyledAboutmeContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 700px;
  padding-top: 20px;
`;

const StyledHeaderContainer = styled(Container)`
  text-align: center;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 10px;
  max-width: 600px;
  margin-bottom: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const StyledHeader = styled.h1`
  font-family: 'Arial, sans-serif';
  font-size: 28px;
  margin-bottom: 10px;
  color: #333;
`;

const StyledSubHeader = styled.h2`
  font-family: 'Arial, sans-serif';
  font-size: 18px;
  color: #3498db;
  margin-bottom: 20px;
`;

const StyledAboutMeImages = styled(Image)`
  width: 100%;
  max-width: 600px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  margin: 20px 0; /* Added margin-top and margin-bottom for space */

  @media (max-width: 550px) {
    max-width: 350px; /* Set a slightly larger max width for the image when the width is 450px or below */
    border-radius: 50%; /* Make it circular */
  }
`;

const StyledAboutMeBio = styled.div`
  font-family: 'Arial, sans-serif';
  color: #333;
  font-size: 16px;
  line-height: 1.6;
  text-align: center;
`;

const StyledParagraph = styled.p`
  margin-bottom: 20px;
  text-align: left;
`;

export default function Aboutme() {
  return (
    <StyledAboutmeContainer>
      <StyledHeaderContainer>
        <StyledHeader>Nadine Hoopingarner</StyledHeader>
        <StyledSubHeader>Modern day Anthropologist</StyledSubHeader>
      </StyledHeaderContainer>

      <StyledAboutMeImages src={nadine} alt="Nadine" fluid />

      <StyledAboutMeBio>
        <StyledParagraph>
          I am a wanderlust soul. Soaking in knowledge of culture, music, food, spirituality, and other areas of life. What excites me is witnessing the unfoldings of human nature and the symbiosis. As a former student of Anthropology, I have an inclination to study the world through this lens more objectively. I believe in existing within the middle space of social media. Navigating probably the largest and most diverse culture there has ever been. It is easy to feel overwhelmed and the extreme sides of such platforms. From an anthropological view, I understand how people congregate in their social circles online, create traditions, and culture with one another.
        </StyledParagraph>
        <StyledParagraph>
          I am here for your consulting needs as well. Let's dig into your target audience, your purpose, and goals. I can offer advice and tactics to strengthen the bonds between you and your community.
        </StyledParagraph>
      </StyledAboutMeBio>
    </StyledAboutmeContainer>
  );
}
