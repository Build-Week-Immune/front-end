// Home page for patient
// Nav bar of this page includes a text 'Immune' at top left, and sandwich icon at top right, which includes a log out button
// When logging out, user is redirected to home page

// Contains a patient card, which contains summary for the patient; can be edited
// Contains a see family button, which brings up a family list of family members; can select and turn into patient card; can edit
// Under the patient card will be a immunization record search query and that patient's immunization list
import React from 'react';
import styled from "styled-components";

import PageNav from '../../Bars/PageNav';
import Footer from '../../Bars/Footer';

export default function PatientHomePage() {
    return (
        <div>
            <PageNav />
            <TextContainer className='bgrnd' >
                <p>FYA ... is for Friendly Yelling</p>
                <p>Placeholding page for now.</p>
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