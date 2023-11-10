/* eslint-disable jsx-a11y/alt-text */
import { useNavigate } from 'react-router-dom'

import React from "react";
import '../App.css';
/* eslint-disable jsx-a11y/alt-text */

export default function Green() {
    const navigate = useNavigate()

    return (
        <div className="colour-page-wrapper">
            <div onClick={() => navigate('/')}><b>Home</b></div>
            <div onClick={() => navigate('/lci')}><b>Back</b></div>

            <div>This page will follow the acronym BREAD (Bombs, Removal, Evasion, Anything else, Don't play).</div>
            <div>However, due to time constraints, only the BRE part will be done.</div>

            <h1>Bombs (Cards that get away with the game if left unchecked)</h1>
            <div>
                <img className='card-wrapper' src="https://www.mythicspoiler.com/lci/cards/ojerkaslemdeepestgrowthf.jpg"/>
                <p><strong>Mythic - Ojer Kaslem</strong>. Holy mother of dinosaurs, this is GOOD! It never even really dies! Love it.</p>
                <br />
            </div> 
            <div>
                <img className='card-wrapper' src="https://www.mythicspoiler.com/lci/cards/huatlipoetofunityf.jpg"/>
                <p><strong>Mythic - Huatli</strong>. As a mythic, it really could be worse. Only pay the 5 when you know they're not gonna kill her in response.</p>
                <br />
            </div> 
            <div>
                <img className='card-wrapper' src="https://www.mythicspoiler.com/lci/cards/ghaltastampedetyrantf.jpg"/>
                <p><strong>Mythic - Ghalta</strong>. To be fair, this <strong>does</strong> get away with the game if not checked.</p>
                <br />
            </div> 
            <div>
                <img className='card-wrapper' src="https://www.mythicspoiler.com/lci/cards/theskullsporenexusf.jpg"/>
                <p><strong>Mythic - The Skullspore Nexus</strong>. Get your Abrades ready, this can't stay on the battlefield. This is best in Red/Green, as it looks like
                all the powerful creatures are going to be there. Let in an attacking 5/5? It suddenly becomes a 10/5. Scary.</p>
                <br />
            </div> 
            <h3>
                Comments: The only reason I didn't include any rares in here is because the mythics are so damn busted. Almost all rares seem, at least, good (at most, freakish).
            </h3>


            <h1>Removal (anything that gets pesky permanents out of the board, with varying efficacy)</h1>
            <div>
                <img className='card-wrapper' src="https://www.mythicspoiler.com/lci/cards/huatlisfinalstrike.jpg" />
                <p><strong>Uncommon - Huatli's Final Strike</strong>.Green is not known for its removals, and the best they have are bites like this, fights or combat tricks.</p>
                <br />
            </div>
            <div>
                <img className='card-wrapper' src="https://www.mythicspoiler.com/lci/cards/thrashingbrontodonf.jpg" />
                <p><strong>Uncommon - Thrashing Brontodon</strong>. Another old friend, this time is so much better. Over-rate power toughness and a 
                veeerry useful ability! Removal (of artifacts).</p>
                <br />
            </div>
            <div>
                <img className='card-wrapper' src="https://www.mythicspoiler.com/lci/cards/malametbattleglyph.jpg" />
                <p><strong>Uncommon - Malamet Battle Glyph</strong>. In the colour of the best creatures, this seems fair. If it cost more than G, I wouldn't want it tho.</p>
                <br />
            </div>
            <div>
                <img className='card-wrapper' src="https://www.mythicspoiler.com/lci/cards/staggeringsize.jpg" />
                <p><strong>Common - Staggering Size</strong>. CAPYBARA SMASHHHH</p>
                <br />
            </div>
            <h3>Comments: Like I said, the strength of Green comes from overpowering their enemies, not from removing them from the game. But it doesn't matter, there are three other
                colours ready for that!
            </h3>
            
            <h1>Evasion (anything that gets through the invariably present ground wall)</h1>
            <p>It seems that green doesn't have evasion; instead, it has undercosted creatures (like 4/3 for 3), so there will be a tension in deckbuilding:
                do you go for small evasive creatures that can't be blocked, or do you go for big chompers that can be double blocked?
            </p>

            <h1>Anything else (good cards in general, or archetype-defining)</h1>
            <h3>IN CONSTRUCTION</h3>
        </div>
    )
}