// An patient card contains a patient's name, date of birth, and age
// Contains an option to choose a medical staff to edit vaccine record
// Can be edited by a patient

import React from "react";
// import { Link } from "react-router-dom"
import styled from "styled-components";


export default function PatientCard({props}) {
  return (
    <CardContainer key = {props.id}>

      {/* <Link to={`/homepage-patient/${patient.id}`} key={patient.id} style={{ textDecoration: 'none' }}> */}
        <NameContainer>
          {props.name}
        </NameContainer>
      {/* </Link> */}
      {/* <p>Patient Date of Birth</p>
      <p>Patient Age</p> */}
    </CardContainer>
  );
}

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
  background-color: skyblue;
  border-radius: 25%;
  margin-bottom: 25px;
  filter: drop-shadow(0.1rem 0.1rem 0.25rem darkslategray);
  h3 {
      font-size: 24px;
      textDecoration: none;
  }
`;

const NameContainer = styled.div`
  text-align: center;
`;