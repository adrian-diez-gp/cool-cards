/* eslint-disable jsx-a11y/alt-text */
import { useNavigate } from 'react-router-dom'

import React from "react";
import './App.css';

export default function SpecialSheet() {
    const navigate = useNavigate()

    return (
        <div className="colour-page-wrapper">
            <div onClick={() => navigate('/')}><b>Home</b></div>

            <h1>A (Always get them: expensive or amazing)</h1>
            <div>
                <img style={{display:"block"}} src="https://mythicspoiler.com/woe/cards/bitterblossomf.jpg"/>
                <p><strong>Rating: A+</strong>. What's better than a faerie? A faerie a turn! This wins.</p>
                <br />
            </div>  
            <div>
                <img style={{display:"block"}} src="https://mythicspoiler.com/woe/cards/defenseoftheheartf.jpg"/>
                <p><strong>Rating: A</strong>. Play a normal game, drop this, and go find your two best Tocinos. Sure win!</p>
                <br />
            </div>    
            <div>
                <img style={{display:"block"}} src="https://mythicspoiler.com/woe/cards/rhysticstudyf.jpg"/>
                <p><strong>Rating: A-</strong>. This will pay for the draft. So, let's win something!</p>
                <br />
            </div>    
            <div>
                <img style={{display:"block"}} src="https://mythicspoiler.com/woe/cards/doublingseasonf.jpg"/>
                <p><strong>Rating: A-</strong>. This will pay for the draft. So, let's win something!</p>
                <br />
            </div>    
            <div>
                <img style={{display:"block"}} src="https://mythicspoiler.com/woe/cards/smotheringtithef.jpg"/>
                <p><strong>Rating: A-</strong>. This will pay for the draft. So, let's win something!</p>
                <br />
            </div>    
            <div>
                <img style={{display:"block"}} src="https://mythicspoiler.com/woe/cards/blindobedience.jpg"/>
                <p><strong>Rating: A</strong>. Another favourite of mine. This will create a swing of 8-10 lives across a game.</p>
                <br />
            </div> 


            <h1>B (Be looking for these!)</h1>
            <div>
                <img style={{display:"block"}} src="https://mythicspoiler.com/woe/cards/hatchingplans.jpg"/>
                <p><strong>Rating: B-</strong>. Good for bargaining!</p>
                <br />
            </div>    
            

            <h1>C (Cards that will make the cut, or that need support from other cards)</h1>

            <div>
                <img style={{display:"block"}} src="https://mythicspoiler.com/woe/cards/utopiasprawlf.jpg"/>
                <p><strong>Rating: C</strong>. Deceivingly good. Onlyplayable on a forest tho!</p>
                <br />
            </div>        
           
        </div>
    )
}