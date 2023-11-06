/* eslint-disable jsx-a11y/alt-text */
import { useNavigate } from 'react-router-dom'
import React from "react";
import '../App.css';

export default function White() {
    const navigate = useNavigate()


    return (
        <div className="colour-page-wrapper">
            <div onClick={() => navigate('/')}><b>Home</b></div>
            <div>This page will follow the acronym BREAD (Bombs, Removal, Evasion, Anything else, Don't play).</div>
            <div>However, due to time constraints, only the BRE part will be done.</div>

            <h1>Bombs (Cards that get away with the game if left unchecked)</h1>
            <div>
                <img style={{display:"block"}} src="https://mythicspoiler.com/woe/cards/ashiokwickedmanipulator.jpg"/>
                <p><strong>Ojer Taq</strong>. Gorgeous card for token decks, but a recursive 6/6 is more than enough to win by itself.</p>
                <br />
            </div> 
            <div>
                <img style={{display:"block"}} src="https://mythicspoiler.com/woe/cards/virtueofpersistencef.jpg"/>
                <p><strong>Thousand Moon Smithy</strong>. THis and the token it creates count towards flipping it, and the flip side will get you
                basically a <a href="https://mythicspoiler.com/woe/cards/regalbunnicornf.jpg">bunnycorn</a> per turn. Reaaaally good.</p>
                <br />
            </div> 
            
            <h1>B (Be looking for these!)</h1>
            <div>
                <img style={{display:"block"}} src="https://mythicspoiler.com/woe/cards/theprincesstakesflight.jpg" />
                <p><strong>Rating: B+</strong>. Chapter 1 gets rid of an enemy creature; chapter 2 gives you a good attack. If you BARGAIN this before chapter 3, the creature doesn't come back!</p>
                <br />
            </div>
            <div>
                <img style={{display:"block"}} src="https://mythicspoiler.com/woe/cards/pollenshieldhare.jpg" />
                <p><strong>Rating: B-</strong>. A good bonus for tokens, it's a 2/2 if you have nothing better to do in turn 2. Obviously better if you can play the green part!</p>
                <br />
            </div>
            <div>
                <img style={{display:"block"}} src="https://mythicspoiler.com/woe/cards/heartflameduelistf.jpg" />
                <p><strong>Rating: B-</strong>.  A tricky one here. Pick it ONLY if you're already in red (not necessarily white), as that is the good side of this card.</p>
                <br />
            </div>
            <div>
                <img style={{display:"block"}} src="https://mythicspoiler.com/woe/cards/regalbunnicornf.jpg" />
                <p><strong>Rating: B-</strong>.  Can it die? Yes. Will you play it in turn 2? Probably. Can this get huge quickly with the help of food tokens etc? Absolutely!</p>
                <br />
            </div>
            <div>
                <img style={{display:"block"}} src="https://mythicspoiler.com/woe/cards/werefoxbodyguardf.jpg" />
                <p><strong>Rating: B-</strong>.  A FLASHY rare that more often than not will get rid of a big guy for a few turns before it dies.</p>
                <br />
            </div>
            <div>
                <img style={{display:"block"}} src="https://mythicspoiler.com/woe/cards/threeblindmicef.jpg" />
                <p><strong>Rating: B-</strong>.  A payoff for all those token cards! It's rare so you probably won't see it though.</p>
                <br />
            </div>
            <div>
                <img style={{display:"block"}} src="https://mythicspoiler.com/woe/cards/shroudedshepherd.jpg" />
                <p><strong>Rating: B</strong>.  Pick it in a nonblack deck, you get a niiice attack. Pick it in a black deck, and you can debilitate your opponent's creatures before an attack. Play it against a Rat deck and, well... you might like that game. :)</p>
                <br />
            </div>
            <div>
                <img style={{display:"block"}} src="https://mythicspoiler.com/woe/cards/hopefulvigil.jpg" />
                <p><strong>Rating: B</strong>.  Normally you don't want multiples of your cards in your deck. But if your 2 mana slot is filled with 3 or 4 of these, I'd call that a good deck. Reaaaally good for bargaining, or for those token bonuses!</p>
                <br />
            </div>
            <div>
                <img style={{display:"block"}} src="https://mythicspoiler.com/woe/cards/spellbookvendorf.jpg" />
                <p><strong>Rating: B-</strong>.  Much better if you start combining it with "enchantment dies"
                 cards (see <a href="https://mythicspoiler.com/woe/cards/knightofdoves.html" alt=".">Knight of doves</a>) as you can
                 put two roles on the same creature, causing the first to fall and die. Also good with tokens (see a pattern  here?)
                 </p>
                 <br />
            </div>
            <div>
                <img style={{display:"block"}} src="https://mythicspoiler.com/woe/cards/coopedup.jpg" />
                <p><strong>Personal Rating: B-</strong>. If you get two or three good white cards, it's time to pick at least two of these. 5 mana to exile a creature, 
                two mana to make a small critter useless until you need to bargain the enchantment away (and by that time, what's a measly 2/2 gonna do against your wisely chosen bombs?)
                 </p>
                 <br />
            </div>
            <div>
                <img style={{display:"block"}} src="https://mythicspoiler.com/woe/cards/strokeofmidnightf.jpg" />
                <p><strong>HONORABLE MENTION</strong>.  Great removal, but it leaves a 1/1 behind. Good in singles.</p>
                <br />
            </div>

            <h1>C (Cards that will make the cut, or that need support from other cards)</h1>
            <div>
                <img style={{display:"block"}} src="https://mythicspoiler.com/woe/cards/woodlandacolyte.jpg" />
                <p><strong>Rating: C/C+</strong>.  Generally, cantrips (cards that draw a card, so they replace themselves in your hand)
                are good, so I wouldn't mind taking one or two of these. If you can play the green part (and you often will), this gets that much better.</p>
                <br />
            </div>
            <div>
                <img style={{display:"block"}} src="https://mythicspoiler.com/woe/cards/saviorofthesleeping.jpg" />
                <p><strong>Rating: C-</strong>. This is one of those cards that needs work. Paired with lots of roles/bargains, it becomes a house (not literally tho)</p>
                <br />
            </div>
            <div>
                <img style={{display:"block"}} src="https://mythicspoiler.com/woe/cards/solitarysanctuary.jpg" />
                <p><strong>Rating: C-</strong>. Another needy card. Blue has a lot of tappers, so it's best in that archetype. Needs 3 taps to start being good.</p>
                <br />
            </div>
            <div>
                <img style={{display:"block"}} src="https://mythicspoiler.com/woe/cards/plungeintowinter.jpg" />
                <p><strong>Rating: C-</strong>. This covers everything we've wanted up to now: taps and replaces itself. Wouldn't mind one copy in the deck.
                Make sure you don't play it on turn 2 unless you reaaally need to!</p>
                <br />
            </div>
            <div>
                <img style={{display:"block"}} src="https://mythicspoiler.com/woe/cards/knightofdovesf.jpg" />
                <p><strong>Rating: C</strong>. The floor on this is a 1/3 for 3. The ceiling is you get a couple of doves, which is good enough as a pack 3 pick for me</p>
                <br />
            </div>
            <div>
                <img style={{display:"block"}} src="https://mythicspoiler.com/woe/cards/slumberingkeepguard.jpg" />
                <p><strong>Rating: C-/C+</strong>. Pick this AFTER you have picked your roles and your  
                <a href="https://mythicspoiler.com/woe/cards/hopefulvigil.jpg">two mana</a> /
                <a href="https://mythicspoiler.com/woe/cards/coopedup.jpg">enchantments</a>. Terrible on its own, amazing in a dedicated enchants deck. You can activate the ability 
                more than once in the same turn.
                </p>
                <br />
            </div>

            <h1>OTHERS</h1>
            <p><b>CREATURES WITH FLYING</b>: Remember the acronym BREAD: <br/>
            <b>B</b>ombs <br/>
            <b>R</b>emoval <br />
            <b>E</b>vasion (here are flyers, "skulk", trample...) <br />
            <b>A</b>nything else <br />
            <b>D</b>on't play this
            </p>

        </div>
    )
}