/* eslint-disable jsx-a11y/alt-text */
import { useNavigate } from 'react-router-dom'

import React from "react";
import './App.css';

export default function Green() {
    const navigate = useNavigate()

    return (
        <div className="colour-page-wrapper">
            <div onClick={() => navigate('/')}><b>Home</b></div>

            <h1>A (Always get them)</h1>    
            <div>
                <img style={{display:"block"}} src="https://mythicspoiler.com/woe/cards/elvisharchivistf.jpg"/>
                <p><strong>Rating: A</strong>. This needs some setup to be goo-HAHAHA! Look at how many cards in this set
                put artifacts and/or enchantments into play, and you'll realise that this is a BEAST. Drop a color if you see one,
                you're now green/X.</p>
                <br />
            </div> 
            <div>
                <img style={{display:"block"}} src="https://mythicspoiler.com/woe/cards/elvisharchivistf.jpg"/>
                <p><strong>Rating: A+</strong>. Literally the only time I wouldn't pick this is pack 3. This is 3 3/3, that
                become two 6/6, that becomes a 12/12, all with trample. WHAT?! Imagine if you could recur it from the graveyard... e.e</p>
                <br />
            </div> 
            <div>
                <img style={{display:"block"}} src="https://mythicspoiler.com/woe/cards/mosswooddreadknightf.jpg"/>
                <p><strong>Rating: A-</strong>. Slow, but can become a wall if you need it. This blocks X/3, trades, then gets you a card and comes back (if you get a way to
                get black mana).</p>
                <br />
            </div> 
            <div>
                <img style={{display:"block"}} src="https://mythicspoiler.com/woe/cards/gingerbreadhunterf.jpg"/>
                <p><strong>Rating: A-</strong>. A reason to look for black mana. Two real cards in one? And it's a cost 5 to boot! All the sinergies are there!</p>
                <br />
            </div> 

            <h1>B (Be looking for these!)</h1>
            <div>
                <img style={{display:"block"}} src="https://mythicspoiler.com/woe/cards/sentineloflostloref.jpg"/>
                <p><strong>Rating: B</strong>. The power/toughness/mana ratio is there for the taking, but only if you're already green. Generally, the more 
                powerful cards you get, the better (surprise surprise!)</p>
                <br />
            </div> 
            <div>
                <img style={{display:"block"}} src="https://mythicspoiler.com/woe/cards/agathaschampionf.jpg"/>
                <p><strong>Rating: B-</strong>.What is this? A 5 mana card? This one is also a removal spell if you can bargain something away!</p>
                <br />
            </div> 
            <div>
                <img style={{display:"block"}} src="https://mythicspoiler.com/woe/cards/gracefultakedownf.jpg"/>
                <p><strong>Rating: B+</strong>.If you don't have bargain fodder but you have creatures (and being in green, you should), this is your alternative.
                You'll almost always trade up in mana</p>
                <br />
            </div> 
            <div>
                <img style={{display:"block"}} src="https://mythicspoiler.com/woe/cards/welcometosweettoothf.jpg"/>
                <p><strong>Rating: B</strong>.If you need bargain fodder, this is your card. Literally an enchantment, an artifact, and a token in one card.
                Do you think they did it on purpose?</p>
                <br />
            </div>
            <div>
                <img style={{display:"block"}} src="https://mythicspoiler.com/woe/cards/upthebeanstalkf.jpg"/>
                <p><strong>Rating: B+</strong>. For 2 mana, it replaces itself, so you only need one or two 5 mana cards to start paying off. And LOOOTS of 
                5 mana cards have a cheaper adventure you can play earlier. Combo, anyone?</p>
                <br />
            </div>  
            <div>
                <img style={{display:"block"}} src="https://mythicspoiler.com/woe/cards/toughcookief.jpg"/>
                <p><strong>Rating: B+</strong>. Gingerbread man is angry that you played with his buttons. This can hit for 6 in turn 3, and further
                 foods can make him that much stronger. </p>
                <br />
            </div> 
            <div>
                <img style={{display:"block"}} src="https://mythicspoiler.com/woe/cards/stormkeldvanguardf.jpg"/>
                <p><strong>Rating: B-</strong>. Imagine you want a card that destroys artifacts and enchantments. But that card is not always good, so you leave it in the sideboard. 
                But then you reaaaally need it in your game 1. THIS is your solution to that problem. If you draw it late, no problem -just play a huge dumdum that can't
                be chumpblocked!</p>
                <br />
            </div>
            <div>
                <img style={{display:"block"}} src="https://mythicspoiler.com/woe/cards/howlinggalefangf.jpg"/>
                <p><strong>Rating: B-</strong>. There are few things better to do in limited than play on curve. If you play a 3/3 on turn 3, followed by a 4/4 in turn 4/4,
                chances are that you're ahead in the game. If you played an adventure, this is *chef's kiss*.
                </p>
                <br />
            </div>
            <div>
                <img style={{display:"block"}} src="https://mythicspoiler.com/woe/cards/tanglespanlookoutf.jpg"/>
                <p><strong>Rating: B+</strong>. One draw, and this card has paid for itself. From the second draw on, this is paying dividends. </p>
                <br />
            </div> 
            
            
            <h1>C (Cards that will make the cut, or that need support from other cards)</h1>
            <div>
                <img style={{display:"block"}} src="https://mythicspoiler.com/woe/cards/hamletgluttonf.jpg"/>
                <p><strong>Rating: C++</strong>. Oh My God do I love this card. Cheeky 6/6 trample for 5 mana, that also gains you life!
                Only reason I don't put this as a B is because of the Cursed Roles. But goddd I can see the 
                <a href="https://mythicspoiler.com/woe/cards/hollowscavengerf.jpg">turn 1 food</a>, 
                <a href="https://mythicspoiler.com/woe/cards/tempesthart.jpg">turn 2 adventure</a>,
                <a href="https://mythicspoiler.com/woe/cards/hollowscavengerf.jpg">turn 3 creature </a>, 
                <a href="https://mythicspoiler.com/woe/cards/howlinggalefangf.jpg">turn 4 creature</a>, turn 5 sac the food get this UwU</p>
                <br />
            </div> 
            <div>
                <img style={{display:"block"}} src="https://mythicspoiler.com/woe/cards/curseofthewerefoxf.jpg"/>
                <p><strong>Rating: C-</strong>. Expensive removal that leaves a role behind. Not bad, but it requires for you to have a creature to fight with.
                </p>
                <br />
            </div>
            <div>
                <img style={{display:"block"}} src="https://mythicspoiler.com/woe/cards/hollowscavengerf.jpg"/>
                <p><strong>Rating: C-</strong>. Personal favourite of mine. Drop a food for bargain, play it on turn 3, threaten a 5/4 (!!) every turn from there on.
                </p>
                <br />
            </div>
            <div>
                <img style={{display:"block"}} src="https://mythicspoiler.com/woe/cards/tempesthart.jpg"/>
                <p><strong>Rating: C</strong>. This is the signpost for the 5 mana archetype. Able to do something early, and getting bigger the later it goes. Nice 
                one overall.</p>
                <br />
            </div> 
            <div>
                <img style={{display:"block"}} src="https://mythicspoiler.com/woe/cards/bramblefamiliarf.jpg"/>
                <p><strong>Rating: C</strong>. Almost all green rares are good, except if they cost 8 mana.
                 This one can find you a good creature, or ramp you into the bigger stuff if you get it early.</p>
                <br />
            </div>
            <div>
                <img style={{display:"block"}} src="https://mythicspoiler.com/woe/cards/returnfromthewildsf.jpg"/>
                <p><strong>Rating: C-</strong>. The versatility in this is why I would want one in my deck.
                It can be mana ramp/fixing, a token to block with, or two tokens for bargain purposes if I don't want more mana.
                Good only if you're base green with many colors of splash, or as the 20-23rd card in your deck.</p>
                <br />
            </div>
            <div>
                <img style={{display:"block"}} src="https://mythicspoiler.com/woe/cards/thehuntsmansredemptionf.jpg"/>
                <p><strong>Rating: C</strong>. Remember when I said a 3/3 for 3 is good? This is that, with upside. Doesn't matter if you don't get to use chapter 2 or 3,
                chapter 1 is good enough!</p>
                <br />
            </div> 
            <div>
                <img style={{display:"block"}} src="https://mythicspoiler.com/woe/cards/feralencounterf.jpg"/>
                <p><strong>Rating: C</strong>. Find a creature in the top 5, you can play it this turn, then "bite" something. The bite part is good enough to be included, but look 
                for <a href="https://mythicspoiler.com/woe/cards/gracefultakedownf.jpg">Graceful Takedown</a> instead.
                </p>
                <br />
            </div>
        </div>
    )
}