import React from "react";
import { Container, Image } from 'react-bootstrap';
import styled from 'styled-components';
import nadine from "../images/nadine.jpeg";

const StyledAboutmeContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 700px;
`;

const StyledHeaderContainer = styled(Container)`
  text-align: center;
  padding: 20px;
  background-color: #f3f3f3;
  border-radius: 10px;
  max-width: 450px; /* Adjusted max-width */
  margin: 20px auto 0; /* Added margin-top to create space */
`;

const StyledHeader = styled.h1`
  font-family: 'Arial, sans-serif';
  font-size: 36px;
  margin-bottom: 10px;
`;

const StyledSubHeader = styled.h2`
  font-family: 'Arial, sans-serif';
  font-size: 24px;
  color: #3498db;
`;

const StyledAboutMeImages = styled(Image)`
  height: auto;
  max-width: 100%;
  border-radius: 10px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  max-width: 400px; /* Set a max width for the image */
  margin: 20px 0; /* Added margin-top and margin-bottom for space */
`;

const StyledAboutMeBio = styled.div`
  font-family: 'Arial, sans-serif';
  color: #333;
  font-size: 18px;
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
        <StyledSubHeader>Anthropologist & Consultant</StyledSubHeader>
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
