/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import '../App.css';
import { useNavigate } from 'react-router-dom'


export default function Black() {
    const navigate = useNavigate()

    return (
        <div className="colour-page-wrapper">
            <div onClick={() => navigate('/')}><b>Home</b></div>
            <div onClick={() => navigate('/lci')}><b>Back</b></div>

            <div>This page will follow the acronym BREAD (Bombs, Removal, Evasion, Anything else, Don't play).</div>
            <div>However, due to time constraints, only the BRE part will be done.</div>

            <h1>Bombs (Cards that get away with the game if left unchecked)</h1>
            <div>
                <img className='card-wrapper' src="https://mythicspoiler.com/woe/cards/ashiokwickedmanipulator.jpg"/>
                <p><strong>Aclazotz</strong>. Every time "each opponent" appears, consider the power of that card to go up by 1.5x.
                That's how strong this is!</p>
                <br />
            </div> 
            <div>
                <img className='card-wrapper' src="https://mythicspoiler.com/woe/cards/virtueofpersistencef.jpg"/>
                <p><strong>Starving Revenant</strong>. High risk, high reward card. The fact that it needs 8 PERMANENT cards makes me play almost no spells in that deck.
                Even if the support isn't there normally (i.e. there are no permanents that have the effect of a spell attached (see <a>Murder</a> being attached to
                <a>Ravenous Chupacabra</a>)), the fact that in a 2v2 we can split all spells in one deck and all permanents in another is a nice upside.</p>
                <br />
            </div> 
            <div>
                <img className='card-wrapper' src="https://mythicspoiler.com/woe/cards/beseechthemirrorf.jpg"/>
                <p><strong>Stalactite Stalker</strong>. Not Literally a bomb, but does everything. Gets in the first few turns, gets big passively and can kill something later on.
                23 of these, 17 lands and you're set.</p>
                <br />
            </div> 
            <div>
                <img className='card-wrapper' src="https://mythicspoiler.com/woe/cards/devouringsugarmawf.jpg"/>
                <p><strong>Terror Tide</strong>. The reset button of the set. Always keep it in your deck. Play this before your creatures.</p>
                <br />
            </div> 
            <h3>
                Comments: Not a lot of bombs in black, but a ton of good cards (see below). I anticipate Black to be very stable.
            </h3>

            <h1>Removal (anything that gets pesky permanents out of the board, with varying efficacy)</h1>

            <div>
                <img className='card-wrapper' src="https://mythicspoiler.com/woe/cards/specterofmortalityf.jpg"/>
                <p><strong>Malicious Eclipse</strong>. 
                    Not as strong as the rare one, but still good to have. It's enough if you get equal on board presence after this, as you'll be the one playing things first.
                </p>
                <br />
            </div> 
            <div>
                <img className='card-wrapper' src="https://mythicspoiler.com/woe/cards/cruelsomnophage.jpg"/>
                <p><strong>Bitter Triumph</strong>. 
                    Premium removal; in 2v2, you start at 30 life, so you've got plenty to spare.
                </p>
                <br />
            </div> 
            <div>
                <img className='card-wrapper' src="https://mythicspoiler.com/woe/cards/lordskittersewerkingf.jpg"/>
                <p><strong>Abyssal Gorestalker</strong>. 
                    In the right deck, this is a wrath.
                </p>
                <br />
            </div> 
            <div>
                <img className='card-wrapper' src="https://mythicspoiler.com/woe/cards/lordskittersblessingf.jpg"/>
                <p><strong>Rating: B+</strong>. For the low low price of already having a creature on the battlefield, this draws and extra card per turn.
                You know what that means.</p>
                <br />
            </div> 
            <div>
                <img className='card-wrapper' src="https://mythicspoiler.com/woe/cards/backforsecondsf.jpg"/>
                <p><strong>Rating: B</strong>. You choose a creature with an etb (enter the battlefield) effect, you get it right away. A creature
                wit ha relevant adventure? To my hand, love!! The swings this card creates are ones for the legends.</p>
                <br />
            </div> 
            <div>
                <img className='card-wrapper' src="https://mythicspoiler.com/woe/cards/ashioksreaperf.jpg"/>
                <p><strong>Rating: B-</strong>. Roles all day long, baby!! Usually you want them on different creatures because each can have only one role on 
                at any given time, but if they net you cards, go for it.</p>
                <br />
            </div> 
            <h2>HONORABLE MENTIONS: BLUE/BLACK</h2>
            <h4>If you're set into faeries (or you wanna!) pick these much much higher than the rest. You'll thank me later.</h4>
            <div>
                <img className='card-wrapper' src="https://mythicspoiler.com/woe/cards/faeriefencingf.jpg"/>
                <p><strong>Rating: C+/A with faeries</strong>. You won't understand the power that killing a 3 mana creature for one mana, and 
                making a play in the same turn, has until you experience it yourself!.</p>
                <br />
            </div> 
            <div>
                <img className='card-wrapper' src="https://mythicspoiler.com/woe/cards/egodrainf.jpg"/>
                <p><strong>Rating: C-/A with faeries</strong>. ONLY good if this is the last card in your hand, or if you control a faerie AS THIS RESOLVES (if
                they kill it in response, you'll have to exile a card from your hand, and we don't want that!).</p>
                <br />
            </div>

            <h1>C (Cards that will make the cut, or that need support from other cards)</h1>
            <div>
                <img className='card-wrapper' src="https://mythicspoiler.com/woe/cards/highfaenegotiator.jpg"/>
                <p><strong>Rating: C-</strong>. Strong swing, but only take it if you don't have a good way to finish the game.</p>
                <br />
            </div> 
            <div>
                <img className='card-wrapper' src="https://mythicspoiler.com/woe/cards/hopelessnightmaref.jpg"/>
                <p><strong>Rating: C+</strong>. Black is the colour of bargain, and bargain it does well. This is a lot of small good things for one mana, which means
                little investment and good returns. :)</p>
                <br />
            </div>
            <div>
                <img className='card-wrapper' src="https://mythicspoiler.com/woe/cards/takenbynightmares.jpg"/>
                <p><strong>Rating: C</strong>. Removal. Inconditional. Take one of that type and move on. Too many rats to spend 4 mana for each creature you kill.</p>
                <br />
            </div>
            <div>
                <img className='card-wrapper' src="https://mythicspoiler.com/woe/cards/feedthecauldron.jpg"/>
                <p><strong>Rating: C-</strong>. Cheaper removal, but gives you bargain fodder. Not too bad!.</p>
                <br />
            </div>
            <div>
                <img className='card-wrapper' src="https://mythicspoiler.com/woe/cards/candygrapple.jpg"/>
                <p><strong>Rating: C+</strong>. See? Much better! Bargain this, and you have the potential to kill 90-something percent of the creatures in the set!
                Wouldn't mind a couple in my deck.</p>
                <br />
            </div>
            <div>
                <img className='card-wrapper' src="https://mythicspoiler.com/woe/cards/lordskittersbutcherf.jpg"/>
                <p><strong>Rating: C+</strong>. I'm all for creatures that are good at any moment of the game.</p>
                <br />
            </div>
            <div>
                <img className='card-wrapper' src="https://mythicspoiler.com/woe/cards/voraciousvermin.jpg"/>
                <p><strong>Rating: C</strong>. At its base, it's 3/2 worth of power that will go on a single creature when you eventually bargain the rat away.
                The ceiling is that you have all the rats in the world, and this becomes a 7/6 for 3 mana. Not too shabby!</p>
                <br />
            </div>
            <div>
                <img className='card-wrapper' src="https://mythicspoiler.com/woe/cards/warehousetabbyf.jpg"/>
                <p><strong>Rating: C-</strong>. And speaking of shabby, let's talk about the tabby! The more roles you have in your deck, the better this becomes.
                A wall if you have the two mana per turn to support it (the threat to activate it is stronger than the activation itself), a trade-up in the late game no matter what.
                </p>
                <br />
            </div>
            <div>
                <img className='card-wrapper' src="https://mythicspoiler.com/woe/cards/twistedsewerwitch.jpg"/>
                <p><strong>Rating: C-/C+</strong>. Good-ish by itself, but play it with a few rats on the battlefield and suddenly your board is unstoppable.
                Even better if played when your opponent is already low in life to gain inevitability from your roles.</p>
                <br />
            </div>
        </div>
    )
}