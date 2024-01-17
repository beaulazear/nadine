import React, { useRef } from 'react';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';
import emailjs from '@emailjs/browser';

const StyledContactContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 700px;
  padding-top: 10px;
`;

const StyledHeaderContainer = styled(Container)`
  text-align: center;
  padding: 20px;
  background-color: #f3f3f3;
  border-radius: 10px;
  max-width: 450px;
  margin-bottom: 10px;
  margin-right: 5px;
  margin-left: 5px;
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

const StyledForm = styled.form`
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const StyledLabel = styled.label`
  font-size: 16px;
  margin-bottom: 5px;
  display: block;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const StyledTextarea = styled.textarea`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const StyledSubmitButton = styled.input`
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 18px;

  &:hover {
    background-color: #0056b3;
  }
`;

export default function ContactUs() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_rpg01b2', 'template_6q2a69j', form.current, '11CxjbisIoTlyftVb')
            .then(
                (result) => {
                    console.log(result.text);
                    alert('Form submitted successfully!');
                    form.current.reset(); // Reset the form
                },
                (error) => {
                    console.log(error.text);
                    alert('Failed to submit the form. Please try again.');
                }
            );
    };

    return (
        <StyledContactContainer>
            <StyledHeaderContainer>
                <StyledHeader>Contact Me</StyledHeader>
                <StyledSubHeader>Fill out the form below and I will be in touch shortly!</StyledSubHeader>
            </StyledHeaderContainer>

            <StyledForm ref={form} onSubmit={sendEmail}>
                <StyledLabel>Name</StyledLabel>
                <StyledInput type="text" name="from_name" />

                <StyledLabel>Email</StyledLabel>
                <StyledInput type="email" name="from_email" />

                <StyledLabel>Message</StyledLabel>
                <StyledTextarea name="message" />

                <StyledSubmitButton type="submit" value="Send" />
            </StyledForm>
        </StyledContactContainer>
    );
}
