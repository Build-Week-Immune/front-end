import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PageNav from "../../Bars/PageNav";
import Footer from "../../Bars/Footer.js";
import MedicalCard from "./MedicalCard";
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

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
            <MedicalCard medical={medical} />
            <Link to="/medical_home/jonathan"><Button>Go Back</Button></Link>
            <Footer />
        </div>
    );
}
