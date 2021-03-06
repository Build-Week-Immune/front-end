// This page provides links to both the MedicalRegister and Patient Register
// This page is the "home-page" for registration

// Connects to: './MedicalRegister.js' || './PatientRegister.js'

import React from 'react';
import styled from "styled-components";
import { Link } from 'react-router-dom';

import Navbar from '../../Bars/Navbar';
import Footer from '../../Bars/Footer';

export default function HomeRegister() {
    return (
        <div>
            <Navbar />
            <TextContainer className='bgrnd' >
                <p>Thanks for choosing Immune! </p>
                <p>Choose your role to register.</p>
                <Link to="/register/patient">
                    <Button>Patient</Button>
                </Link>
                <Link to="/register/medical">
                    <Button>Medical Professional</Button>
                </Link>
            </TextContainer>
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

const Button = styled.button`
    margin-top: 20px;
    padding: 10px 40px;
    border-radius: 5px;
    color: blue;
`;