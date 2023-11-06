/* eslint-disable jsx-a11y/alt-text */
import { useNavigate } from 'react-router-dom'

import React from "react";
import '../App.css';

export default function Blue() {
    const navigate = useNavigate()

    return (
        <div className="colour-page-wrapper">
            <div onClick={() => navigate('/')}><b>Home</b></div>

            <h1>A (Always get them)</h1>
            <div>
                <img style={{display:"block"}} src="https://mythicspoiler.com/woe/cards/ingeniousprodigyf.jpg"/>
                <p><strong>Rating: A-</strong>. Drawing two cards per turn is powerful. Who would've known... Start playing this card for X=3 unless you really nee dit in turn 3 (not before!).</p>
                <br />
            </div>  
            <div>
                <img style={{display:"block"}} src="https://mythicspoiler.com/woe/cards/hornedlochwhalef.jpg"/>
                <p><strong>Rating: A</strong>. Strong in the early game (adventure), strong in the late game. Classic bomb!</p>
                <br />
            </div>    
            <div>
                <img style={{display:"block"}} src="https://mythicspoiler.com/woe/cards/talionsmessengerf.jpg"/>
                <p><strong>Rating: A-</strong>. If you saw blue cards going late, pick this. No sinergies needed for it: Attack, discard, grow, win :D</p>
                <br />
            </div>    
            <div>
                <img style={{display:"block"}} src="https://mythicspoiler.com/woe/cards/twiningtwinsf.jpg"/>
                <p><strong>Rating: A-</strong>. You don't need white for this card to be ridiculous. If you do, all the more power for you.</p>
                <br />
            </div>    
            <div>
                <img style={{display:"block"}} src="https://mythicspoiler.com/woe/cards/sleepcursedfaerief.jpg"/>
                <p><strong>Rating: A</strong>. Just crazy in blue decks. Don't pick this pack 3. Remember that both the ability AND the normal untap step remove stun counters from this.</p>
                <br />
            </div> 


            <h1>B (Be looking for these!)</h1>
            <div>
                <img style={{display:"block"}} src="https://mythicspoiler.com/woe/cards/extraordinaryjourneyf.jpg"/>
                <p><strong>Rating: B-</strong>. Sideboard card for big creatures. Triggers on adventures, so put this in if you see a lot!</p>
                <br />
            </div>    
            <div>
                <img style={{display:"block"}} src="https://mythicspoiler.com/woe/cards/archivedragon.jpg"/>
                <p><strong>Rating: B</strong>. Never shy away from a strong bomb. Start picking more tempo cards (stun counters, regular counters, etc) if you pick this</p>
                <br />
            </div> 
            <div>
                <img style={{display:"block"}} src="https://mythicspoiler.com/woe/cards/bitterchillf.jpg"/>
                <p><strong>Rating: B-</strong>. In the tapper archetype, this is STRONK. If they get rid of it (or if you bargain it away), you get to draw a card.
                WHAT ELSE DO YOU WANT???</p>
                <br />
            </div>   
            <div>
                <img style={{display:"block"}} src="https://mythicspoiler.com/woe/cards/gadwicksfirstduelf.jpg"/>
                <p><strong>Rating: B-</strong>. Pick it after you get some cheap spells 
                (like <a href="https://mythicspoiler.com/woe/cards/succumbtothecold.jpg">this</a> or <a href="https://mythicspoiler.com/woe/cards/quickstudy.jpg">this</a>!)</p>
                <br />
            </div> 
            <div>
                <img style={{display:"block"}} src="https://https://mythicspoiler.com/woe/cards/frolickingfamiliarf.jpg"/>
                <p><strong>Rating: B-</strong>. 2/2 with semi-prowess (+1/+1 until EoT when you cast a noncreature spell) is never bad. 
                 This one comes with a pinch at instant speed. Preferably in the red/blue spells deck.
                 </p>
                <br />
            </div> 
            <div>
                <img style={{display:"block"}} src="https://mythicspoiler.com/woe/cards/threadbindcliquef.jpg"/>
                <p><strong>Rating: B-</strong>. Barely makes the cut in a blue/X deck. With white, this gains a lot of appeal. Still a good evasive beater though.</p>
                <br />
            </div>   
            <div>
                <img style={{display:"block"}} src="https://mythicspoiler.com/woe/cards/succumbtothecold.jpg"/>
                <p><strong>Rating: B+</strong>. In a tappers deck (blue/white), this is an A. Cast it just before attackers so that they can't attack OR block
                for two whole turns.</p>
                <br />
            </div>   
            <div>
                <img style={{display:"block"}} src="https://mythicspoiler.com/woe/cards/icewroughtsentryf.jpg"/>
                <p><strong>Rating: B-</strong>. Another card that increases in value exponentially if you have tapping payoffs. Still does ERRYTHING by itself!</p>
                <br />
            </div>   

            <h1>C (Cards that will make the cut, or that need support from other cards)</h1>

            <div>
                <img style={{display:"block"}} src="https://mythicspoiler.com/woe/cards/tenacioustomeseeker.jpg"/>
                <p><strong>Rating: C-</strong>. As it happens with the Saga, you need sorceries and instants in your deck before picking this.
                Getting spells AND bargain fodder can be difficult, though.</p>
                <br />
            </div>        
            <div>
                <img style={{display:"block"}} src="https://mythicspoiler.com/woe/cards/obyrasattendants.jpg"/>
                <p><strong>Rating: C-</strong>. There are a lot of blue/green cards that care about 5 cost spells. This increses greatly in value there.</p>
                <br />
            </div>   
            <div>
                <img style={{display:"block"}} src="https://mythicspoiler.com/woe/cards/splashyspellcaster.jpg"/>
                <p><strong>Rating: C-</strong>. As it happened with Tenacious Tomeseeker, you'll need spells AND creatures before this gets good.
                 Choose purely good ones before eyeing this.</p>
                <br />
            </div>   
            <div>
                <img style={{display:"block"}} src="https://mythicspoiler.com/woe/cards/galvanicgiant.jpg"/>
                <p><strong>Rating: C</strong>. Remember the 5 cost speel matters theme? This is a great intro to them, or a 7 cost spell if you don't draw it on time.
                Nice stats too, but don't get confused -this is NOT a sign to go into the tapper deck! You'll need big spells for it to work.
                </p>
                <br />
            </div>   
            <div>
                <img style={{display:"block"}} src="https://mythicspoiler.com/woe/cards/quickstudy.jpg"/>
                <p><strong>Rating: C</strong>. Play one card to get TWO CARDS? At instant speed? YESSS (not more than 2 tho! This still costs mana!)</p>
                <br />
            </div>   
            <div>
                <img style={{display:"block"}} src="https://mythicspoiler.com/woe/cards/snaremasterspritef.jpg"/>
                <p><strong>Rating: C</strong>An archetype you haven't seen yet: blue black faeries (tempo). Play these small creatures, counter everything, win! A favourite of mine.</p>
                <br />
            </div>   
            <div>
                <img style={{display:"block"}} src="https://mythicspoiler.com/woe/cards/spellstutterf.jpg"/>
                <p><strong>Rating: C+</strong>Another for the archetype. Base line is already good, add one or two faeries on the board and this is DIAMONDS.</p>
                <br />
            </div>   
        </div>
    )
}