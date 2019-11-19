// This is the home page of our app
// This page contains a nav bar (including a sign in link), a footer bar, and a main component
// Nav bar of this page includes a text 'Immune' at top left, and link to sign in page top right
// The main component includes link to Create Account page
// The footer contains a link to marketing page

// Connects to: './components/Auth/Login.js' || './components/Register/HomeRegister.js' || Marketing Page

import React from 'react';
import styled from "styled-components";
import { Link } from 'react-router-dom';
import Navbar from '../Bars/Navbar';
import Footer from '../Bars/Footer';
import '../../App.css'

export default function SplashPage() {
    return (
        <div>
            <Navbar />
            <TextContainer className='bgrnd' >
                <p>A convinent way to</p>
                <p>track and retrieve</p>
                <p>your immunization</p>
                <p>records</p>
                <ButtonContainer>
                    <Link to="/register">
                        Create Account
                    </Link>
                </ButtonContainer>
            </TextContainer>
            <CardsContainer>
                <p>Whether you are a patient or medical staff, we have you covered.</p>
                <TextCardContainer>
                    <h3>Immediate access to records</h3>
                    <p>After your medical office inputs your records, they will be available for immediate download. No more wait times to retrieve immunization records.</p>
                </TextCardContainer>
                <TextCardContainer>
                    <h3>Keeps you healthy</h3>
                    <p>Never miss an immunization with Immune. We will keep you updated on missing vaccines all year round.</p>
                </TextCardContainer>
                <TextCardContainer style={{marginBottom:'200px'}}>
                    <h3>Efficient for medical staff</h3>
                    <p>Immune is the fastest way to input medical data. It decreases the time medical staff spends in front of the computer and gets them back with what matters most, the patients.</p>
                </TextCardContainer>
            </CardsContainer>
            <Footer />
        </div>
    );
}

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: white;
  font-size: 1.8em;
  font-weight: bold;
  line-height: 1pt;
  padding: 40px 0 0 20px;
`;

const ButtonContainer = styled.button`
    margin-top: 20px;
    padding: 10px 40px;
    border-radius: 5px;
    color: blue;
`
const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  word-wrap: break-word;
  margin: 0 20px;
  p {
      font-size: 1.4em;
      font-weight: bold;
      line-height: 1;
  }
`;

const TextCardContainer = styled.div`
    background-color: #FEF4F1;
    margin: 20px;
    border: 1px solid black;
`