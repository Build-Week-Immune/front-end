import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import PageNav from "../../Bars/PageNav";
import Footer from "../../Bars/Footer.js";

export default function Medical(props) {
    const [medical, setMedical] = useState([]);
    useEffect(() => {
        console.log('dsfsa', props.match.params.id)
        axios.get(`https://rickandmortyapi.com/api/location/${props.match.params.id}`)
        .then(response => {
            setMedical(response.data);
            console.log("Response", response);
        })
        .catch(error => {
            //console.log(error.message);
        });
    }, [props.match.params.id]);

    return (
        <div>
            <PageNav />
            <CardContainer>
                <h3>Medical Provider: {medical.name}</h3>
                <p>This location is a: {medical.type}</p>
                <p>Trusted medical professional who protects your health.</p>
            </CardContainer>
            <Footer />
        </div>
    );
}

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 25px;
    background-color: skyblue;
`