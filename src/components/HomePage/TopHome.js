import React from 'react';
import styled from "styled-components";

import '../../App.css'

export default function TopHome() {
    return (
        <div>
            <TextContainer className='bgrnd' >
                <p>A convinent way to</p>
                <p>track and retrieve</p>
                <p>your immunization</p>
                <p>records</p>
                <ButtonContainer>
                Create Account
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