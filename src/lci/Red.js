/* eslint-disable jsx-a11y/alt-text */
import { useNavigate } from 'react-router-dom'

import React from "react";
import '../App.css';

export default function Red() {
    const navigate = useNavigate()

    return (
        <div className="colour-page-wrapper">
            <div onClick={() => navigate('/')}><b>Home</b></div>

            <h1>Bombs (Cards that get away with the game if left unchecked)</h1>
            <div>
                <img className='card-wrapper' src="https://mythicspoiler.com/lci/cards/aclazotzdeepestbetrayalf.jpg"/>
                <p><strong>Mythic - Inti, Senechal of the Sun</strong>. ASDfhasflhasfkjh.</p>
                <br />
            </div> 
            <div>
                <img className='card-wrapper' src="https://mythicspoiler.com/lci/cards/starvingrevenant.jpg"/>
                <p><strong>Mythic - Bonehoard Dragosaur</strong>. AÑKSDFJHAKLJFHADKLH</p>
                <br />
            </div> 
            <div>
                <img className='card-wrapper' src="https://mythicspoiler.com/lci/cards/stalactitestalkerf.jpg"/>
                <p><strong>Rare - Brass's Tunnel-Grinder</strong>. Let's grind some people's tunnels. Card selection into (eventually) free discovers
                every turn is what I call a sure victory! All the while enabling Descend. The red rare bomb!</p>
                <br />
            </div> 
            <div>
                <img className='card-wrapper' src="https://mythicspoiler.com/lci/cards/terrortidef.jpg"/>
                <p><strong>Rare - Dire Flail</strong>. Equipments were good the first time they appeared, like many other mechanics in this 
                game. Then they became bad, like many other mechanics in this game. Then they gave us <em>this</em>. Put 
                this on a 1/1 and sacrifice a treasure/map token to kill a 4 toughness creature <em>every turn</em>. What the flail.</p>
                <br />
            </div> 
            <div>
                <img className='card-wrapper' src="https://mythicspoiler.com/lci/cards/terrortidef.jpg"/>
                <p><strong>Rare - Breeches</strong>. Ramping, controlling blocks and card advantage, all in an undercosted card. Yas please.</p>
                <br />
            </div> 
            <h3>
                Comments: Holy fuck, is every rare in red playable?
            </h3>  

            <h1>Removal (anything that gets pesky permanents out of the board, with varying efficacy)</h1>
            <div>
                <img className='card-wrapper' src="https://mythicspoiler.com/woe/cards/charmingscoundrelf.jpg"/>
                <p><strong>Rare - Magmatic Galleon</strong>. 
                    More often than not, a one-time removal, but a removal that leaves a body behind is good. This is only half a body,
                    but makes your small creatures useful again to crew it.
                </p>
                <br />
            </div> 
            <div>
                <img className='card-wrapper' src="https://mythicspoiler.com/woe/cards/witchstalkerfrenzy.jpg"/>
                <p><strong>Uncommon - Dreadmaw's Ire</strong>. 
                    I'm almost looking more at the "destroy target artifact" than at the +2/+2. Getting in with a few cretures, then use it on the one that will get damage through
                    to destroy a crafted artifact where they invested 10 mana for a single red sounds delicious to me!
                </p>
                <br />
            </div>  
            <div>
                <img className='card-wrapper' src="https://mythicspoiler.com/woe/cards/torchthetowerf.jpg"/>
                <p><strong>Uncommon - Calamitous Cave-In</strong>. And here is our third wrath of the collection? If I didn't know better, I'd swear 
                the guys that make the game don't like small creatures.</p>
                <br />
            </div>  
            <div>
                <img className='card-wrapper' src="https://mythicspoiler.com/woe/cards/imodanesrecruiter.jpg"/>
                <p><strong>Uncommon - Triumphant Chomp</strong>. Much better in a dino deck, but I've never complained about a <a href="https://mythicspoiler.com/m14/cards/shock.jpg">shock</a>.</p>
                <br />
            </div>   
            <div>
                <img className='card-wrapper' src="https://mythicspoiler.com/woe/cards/kellanthefaeblooded.jpg"/>
                <p><strong>Uncommon - Zoyova's Justice</strong>. Good to reset cards? I don't like that this doesn't give you a card back.</p>
                <br />
            </div>  
            <div>
                <img className='card-wrapper' src="https://mythicspoiler.com/woe/cards/kellanthefaeblooded.jpg"/>
                <p><strong>Common - Tectonic Hazard</strong>. Ping EVERYTHING from your opponents. How good will this be? We'll know in the next episode!</p>
                <br />
            </div>
            <div>
                <img className='card-wrapper' src="https://mythicspoiler.com/woe/cards/kellanthefaeblooded.jpg"/>
                <p><strong>Common - Sunfire Torch</strong>. This is in the appropriate colour because it is such a slow burn. Still good, I guess.</p>
                <br />
            </div>
            <div>
                <img className='card-wrapper' src="https://mythicspoiler.com/woe/cards/kellanthefaeblooded.jpg"/>
                <p><strong>Common - Rumbling Rockslide</strong>. A classic. Never too good, never too bad to ditch it if you don't have anything better.</p>
                <br />
            </div>    
            <div>
                <img className='card-wrapper' src="https://mythicspoiler.com/woe/cards/kellanthefaeblooded.jpg"/>
                <p>These are removal... <em>of people >:)</em></p>
                <br />
            </div>       


            <h1>C (Cards that will make the cut, or that need support from other cards)</h1>
            <div>
                <img className='card-wrapper' src="https://mythicspoiler.com/woe/cards/picnicruinerf.jpg"/>
                <p><strong>Rating: C-</strong>. Once you've found <a href="https://mythicspoiler.com/woe/cards/flickacoin.jpg">ways to get any color of mana</a>, start picking these more highly. Cards that do 
                two things are usually better than cards that do one thing!</p>
                <br />
            </div> 
            <div>
                <img className='card-wrapper' src="https://mythicspoiler.com/woe/cards/tatteredratter.jpg"/>
                <p><strong>Rating: C-</strong>. The rat payoff. They will either let you get in for 2, 3 each turn, or they'll have to trade their real creatures with mere tokens.</p>
                <br />
            </div> 
            <div>
                <img className='card-wrapper' src="https://mythicspoiler.com/woe/cards/bellowingbruiser.jpg"/>
                <p><strong>Rating: C-</strong>. And if they have big blockers, this'll beat a path for them. Only one turn, but a later 4/4 sounds big enough for me!</p>
                <br />
            </div> 
            <div>
                <img className='card-wrapper' src="https://mythicspoiler.com/woe/cards/ratcatchertraineef.jpg"/>
                <p><strong>Rating: C+</strong>. Good for 2, good for 3. <a href="https://mythicspoiler.com/woe/cards/grandballguest.jpg">There are</a> lots of 
                <a href="https://mythicspoiler.com/woe/cards/tatteredratter.jpg">two mana creatures</a>, and at <a href="https://mythicspoiler.com/woe/cards/charmingscoundrelf.jpg">all rarities</a> as well, so you won't
                 have problem playing the two sides of this
                </p>
                <br />
            </div> 
            <div>
                <img className='card-wrapper' src="https://mythicspoiler.com/woe/cards/kellanthefaeblooded.jpg"/>
                <p><strong>Rating: B+</strong>. Double strike is DEVASTATING in a set with so many roles. +1/+0 is also very nice. Rat deck much?</p>
                <br />
            </div> 
        </div>
    )
}