// Home page for medical staff
// Nav bar of this page includes a text 'Immune' at top left, and sandwich icon at top right, which includes a log out button
// When logging out, user is redirected to home page

// Should contain a patient search query and a patient list of patients
// Can select each individual patient from the patient list; will bring up a patient card
// Under the patient card will be a immunization record search query and that patient's immunization list
// Each element in the immunization list will bring medical staff to a immunization card which can be edited
// Alternatively, medical staff may edit the immunization list directly

import React from 'react';
import styled from "styled-components";
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

import PageNav from '../Bars/PageNav';
import Footer from '../Bars/Footer';

export default function MedicalHomePage() {
    return (
        <div>
            <PageNav />
            <TextContainer className='bgrnd' >
                <p>FYA ... is for Friendly Yelling</p>
                <p>Placeholding page for now.</p>
                <Link to=""><Button>Add Family Member</Button></Link>
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