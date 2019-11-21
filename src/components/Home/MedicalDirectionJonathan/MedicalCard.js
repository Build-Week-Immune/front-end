import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function MedicalCard({medical}) {
    return (
        <CardContainer>
            <Link to={`/medical_Home/jonathan/${medical.id} key={medical.id}`}>
                <h3>Medical Provider: {medical.name}</h3>
            </Link>
            <p>Specialist for: {medical.species}</p>
            <p>Trusted medical professional who protects your health.</p>
        </CardContainer>
    );
}

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 25px;
    background-color: skyblue;
`