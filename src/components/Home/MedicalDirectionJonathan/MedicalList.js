import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { Link } from "react-router-dom";
import PageNav from "../../Bars/PageNav";
import Footer from "../../Bars/Footer.js";
import MedicalCard from './MedicalCard';

export default function MedicalList() {
    const [medicals, setMedicals] = useState([]);

    useEffect(() => {
        const getMedicals = () => {
            axios.get('https://rickandmortyapi.com/api/character/')
            .then(response => {
                console.log(response.data.results);
                setMedicals(response.data.results);
            })
            .catch(error => {
                console.error('Server Error', error);
            })
        }
        getMedicals();
    }, []);

    return (
        <div>
            <PageNav />
            {
                (medicals.map(medical =>
                    <MedicalCard key={medical.id} medical={medical} />    
                ))
            }
            <Footer />
        </div>
    )
}