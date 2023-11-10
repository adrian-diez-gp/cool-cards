/* eslint-disable jsx-a11y/alt-text */
import { useNavigate } from 'react-router-dom'

import React from "react";
import '../App.css';

export default function Gold() {
    const navigate = useNavigate()

    return (
        <div className="colour-page-wrapper">
            <div onClick={() => navigate('/')}><b>Home</b></div>
            <div onClick={() => navigate('/lci')}><b>Back</b></div>
            
            <h3>
                For multicolor cards, refer to <a href="https://www.mythicspoiler.com">Mythicspoiler</a>, as they're all great!
            </h3>

            <div style={{color:"blue"}} onClick={() => navigate('/lci')}><b>Back to colour selection</b></div>

        </div>
    )
}