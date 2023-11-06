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
                <p><strong>Thousand Moon Smithy</strong>. This and the token it creates count towards flipping it, and the flip side will get you
                basically a <a href="https://mythicspoiler.com/woe/cards/regalbunnicornf.jpg">bunnycorn</a> per turn. Reaaaally good.</p>
                <br />
            </div> 
            <h3>
                Comments: I can't find more bombs so far in white, so its power will probably come either from gold cards and its interactions with other colours,
                or the bulk commons and uncommons in this colour.
            </h3>
            
            <h1>Removal (anything that gets pesky permanents out of the board, with varying efficacy)</h1>
            <div>
                <img style={{display:"block"}} src="https://mythicspoiler.com/woe/cards/theprincesstakesflight.jpg" />
                <p><strong>Get lost</strong>. As good as a white removal is going to get in the current era. Notably, it doesn't destroy artifacts.</p>
                <br />
            </div>
            <div>
                <img style={{display:"block"}} src="https://mythicspoiler.com/woe/cards/pollenshieldhare.jpg" />
                <p><strong>Unstable Glyphbridge</strong>. Not the best wrath in the world, but a wrath nonetheless; the flip side is more annoying than needing to pee when it's 
                your turn to get on a rollercoaster.</p>
                <br />
            </div>
            <div>
                <img style={{display:"block"}} src="https://mythicspoiler.com/woe/cards/heartflameduelistf.jpg" />
                <p><strong>Duskrose Reliquary</strong>. It looks bad, and probably is if inherent artifact removal (i.e. things that destroy artifacts as part of their effect 
                instead of the effect just being "destroy target artifact") is abundant. However, getting rid of ANY artifact or creature for 1 mana is as good an exchange as you could possibly hope for.</p>
                <br />
            </div>
            <div>
                <img style={{display:"block"}} src="https://mythicspoiler.com/woe/cards/regalbunnicornf.jpg" />
                <p><strong>Dauntless dismantler</strong>. Annnd here it is, the mass artifact destruction. 
                For a single W, it gets rid of all artifact tokens (even if they are creatures!)</p>
                <br />
            </div>
            <div>
                <img style={{display:"block"}} src="https://mythicspoiler.com/woe/cards/werefoxbodyguardf.jpg" />
                <p><strong>Spring-Loaded Sawblades</strong>. Destroy target "tapped" (attacking) creature for 2 mana is always nice. 
                The crafted side has applications (see Attentive Sunscribe or Volatile Wonderglyph)</p>
                <br />
            </div>
            <div>
                <img style={{display:"block"}} src="https://mythicspoiler.com/woe/cards/threeblindmicef.jpg" />
                <p><strong>Quicksand Whirlpool</strong>. Too expensive for my liking (paying 6 mana to get rid of a 3 mana creature has never been a good thing) 
                but chances are that you'll use at least one of these. I'm generally not a fan that removal that needs the opponent to do something (see below)</p>
                <br />
            </div>
            <div>
                <img style={{display:"block"}} src="https://mythicspoiler.com/woe/cards/shroudedshepherd.jpg" />
                <p><strong>Cosmium Blast</strong>.  Gideon is no more, so <a href="http://">Gideon's reproach</a> needed a revamp. Like I said, not a fan of
                removal that needs the opponent to attack/block/tap creatures/etc.</p>
                <br />
            </div>
            <div>
                <img style={{display:"block"}} src="https://mythicspoiler.com/woe/cards/hopefulvigil.jpg" />
                <p><strong>Petrify</strong>. White seems to have <a href="http://petrification">a penchant for stone</a>. Pacifism at its best; but remember that it cn be bounced
                and turned back (no "craft" with this tho!)</p>
                <br />
            </div>

            <h1>Evasion (anything that gets through the invariably present ground wall)</h1>
            <div>
                <img style={{display:"block"}} src="https://mythicspoiler.com/woe/cards/spellbookvendorf.jpg" />
                <p><strong>Resplendent Angel</strong>.  This reads "3/3 for 1WW" which is already great. If you get an angel for free every turn, the game was already in your favour
                (make the most of it!)
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