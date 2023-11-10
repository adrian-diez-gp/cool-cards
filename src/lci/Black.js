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

            <div>This page will follow the acronym BREAD (Bombs, Removal, Evasion, Anything else, Don't play). </div>
            <div>However, due to time constraints, only the BRE part will be done.</div>

            <h1>Bombs (Cards that get away with the game if left unchecked)</h1>
            <div>
                <img className='card-wrapper' src="https://mythicspoiler.com/lci/cards/aclazotzdeepestbetrayalf.jpg"/>
                <p><strong>Aclazotz</strong>. Every time "each opponent" appears, consider the power of that card to go up by 1.5x.
                That's how strong this is!</p>
                <br />
            </div> 
            <div>
                <img className='card-wrapper' src="https://mythicspoiler.com/lci/cards/starvingrevenant.jpg"/>
                <p><strong>Starving Revenant</strong>. High risk, high reward card. The fact that it needs 8 PERMANENT cards makes me play almost no spells in that deck.
                Even if the support isn't there normally (i.e. there are no permanents that have the effect of a spell attached (see <a>Murder</a> being attached to
                <a>Ravenous Chupacabra</a>)), the fact that in a 2v2 we can split all spells in one deck and all permanents in another is a nice upside.</p>
                <br />
            </div> 
            <div>
                <img className='card-wrapper' src="https://mythicspoiler.com/lci/cards/stalactitestalkerf.jpg"/>
                <p><strong>Stalactite Stalker</strong>. Not Literally a bomb, but does everything. Gets in the first few turns, gets big passively and can kill something later on.
                23 of these, 17 lands and you're set.</p>
                <br />
            </div> 
            <div>
                <img className='card-wrapper' src="https://mythicspoiler.com/lci/cards/terrortidef.jpg"/>
                <p><strong>Terror Tide</strong>. The reset button of the set. Always keep it in your deck. Play this before your creatures.</p>
                <br />
            </div> 
            <h3>
                Comments: Not a lot of bombs in black, but a ton of good cards (see below). I anticipate Black to be very stable.
            </h3>

            <h1>Removal (anything that gets pesky permanents out of the board, with varying efficacy)</h1>

            <div>
                <img className='card-wrapper' src="https://mythicspoiler.com/lci/cards/maliciouseclipse.jpg"/>
                <p><strong>Uncommon - Malicious Eclipse</strong>. 
                    Not as strong as the rare one, but still good to have. It's enough if you get equal on board presence after this, as you'll be the one playing things first.
                </p>
                <br />
            </div> 
            <div>
                <img className='card-wrapper' src="https://mythicspoiler.com/lci/cards/bittertriumph.jpg"/>
                <p><strong>Uncommon - Bitter Triumph</strong>. 
                    Premium removal; in 2v2, you start at 30 life, so you've got plenty to spare.
                </p>
                <br />
            </div> 
            <div>
                <img className='card-wrapper' src="https://mythicspoiler.com/lci/cards/abyssalgorestalker.jpg"/>
                <p><strong>Uncommon - Abyssal Gorestalker</strong>. 
                    In the right deck, this is a wrath. Nuff said.
                </p>
                <br />
            </div> 
            <div>
                <img className='card-wrapper' src="https://mythicspoiler.com/lci/cards/tithingblade.jpg"/>
                <p><strong>Common - Tithing Blade</strong>
                    With the incredible amount of experience in this format that I have, I'll go ahead and say that this is good in 2v2. How many tokens will nullify this ability is yet
                    to be seen. Now the flip side? In 2v2? And in multiples? Wow.
                </p>
                <br />
            </div> 
            <div>
                <img className='card-wrapper' src="https://mythicspoiler.com/lci/cards/rayofruin.jpg"/>
                <p><strong>Common - Ray of Ruin</strong>. 
                    This is the removal to play when you don't have removal. Terribly overcosted, without a proper payoff.
                </p>
                <br />
            </div> 
            <div>
                <img className='card-wrapper' src="https://mythicspoiler.com/lci/cards/jointhedead.jpg"/>
                <p><strong>Common - Join the Dead</strong>. 
                    Sooo many creatures are going to die to this, especially at common.  Use all you can (bearing in mind that these are not permanent cards for Descend!)
                </p>
                <br />
            </div> 
            <div>
                <img className='card-wrapper' src="https://mythicspoiler.com/lci/cards/deadweight.jpg"/>
                <p><strong>Common - Dead Weight</strong>. 
                    This IS a permanent that kills, but only small creatures. One is probably okay.
                </p>
                <br />
            </div> 
            <div>
                <img className='card-wrapper' src="https://mythicspoiler.com/lci/cards/chupacabraechof.jpg"/>
                <p><strong>Common - Chupacabra Echo</strong>. 
                    This will realistically be a -2/-2 spell attached to a creature most of the time, but it might be enough in this metagame.
                </p>
                <br />
            </div> 
            <h3>
                Comments: it seems that everything kills in black, so the real challenge will be how to choose the right proportions of spells if you 
                have Descend cards
            </h3>
            

            <h1>Evasion (anything that gets through the invariably present ground wall)</h1>
            <div>
                <img className='card-wrapper' src="https://mythicspoiler.com/lci/cards/bloodletterofaclazotzf.jpg"/>
                <p><strong>Mythic - Bloodletter of Aclazotz</strong>. 
                Deceptively bad, as you probably won't have three black mana to play this on curve. But still good! Just not amazing ):
                </p>
                <br />
            </div> 
            <div>
                <img className='card-wrapper' src="https://mythicspoiler.com/lci/cards/bringerofthelastgiftf.jpg"/>
                <p><strong>Rare - Bringer of the Last Gift</strong>. 
                I don't know how to evaluate this, except that is more expensive than a night with the Kardashians. I guess it's better if you've been behind all game?</p>
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