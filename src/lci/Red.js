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
                <img className='card-wrapper' src="https://www.mythicspoiler.com/lci/cards/intiseneschalofthesun.jpg"/>
                <p><strong>Mythic - Inti, Senechal of the Sun</strong>. ASDfhasflhasfkjh.</p>
                <br />
            </div> 
            <div>
                <img className='card-wrapper' src="https://www.mythicspoiler.com/lci/cards/bonehoarddracosaurf.jpg"/>
                <p><strong>Mythic - Bonehoard Dragosaur</strong>. AÑKSDFJHAKLJFHADKLH</p>
                <br />
            </div> 
            <div>
                <img className='card-wrapper' src="https://www.mythicspoiler.com/lci/cards/brassstunnelgrinder.jpg"/>
                <p><strong>Rare - Brass's Tunnel-Grinder</strong>. Let's grind some people's tunnels. Card selection into (eventually) free discovers
                every turn is what I call a sure victory! All the while enabling Descend. The red rare bomb!</p>
                <br />
            </div> 
            <div>
                <img className='card-wrapper' src="https://www.mythicspoiler.com/lci/cards/direflail.jpg"/>
                <p><strong>Rare - Dire Flail</strong>. Equipments were good the first time they appeared, like many other mechanics in this 
                game. Then they became bad, like many other mechanics in this game. Then they gave us <em>this</em>. Put 
                this on a 1/1 and sacrifice a treasure/map token to kill a 4 toughness creature <em>every turn</em>. What the flail.</p>
                <br />
            </div> 
            <div>
                <img className='card-wrapper' src="https://www.mythicspoiler.com/lci/cards/breecheseagerpillagerf.jpg"/>
                <p><strong>Rare - Breeches</strong>. Ramping, controlling blocks and card advantage, all in an undercosted card. Yas please.</p>
                <br />
            </div> 
            <h3>
                Comments: Holy fuck, is every rare in red playable?
            </h3>  

            <h1>Removal (anything that gets pesky permanents out of the board, with varying efficacy)</h1>
            <div>
                <img className='card-wrapper' src="https://www.mythicspoiler.com/lci/cards/magmaticgalleonf.jpg"/>
                <p><strong>Rare - Magmatic Galleon</strong>. 
                    More often than not, a one-time removal, but a removal that leaves a body behind is good. This is only half a body,
                    but makes your small creatures useful again to crew it.
                </p>
                <br />
            </div> 
            <div>
                <img className='card-wrapper' src="https://www.mythicspoiler.com/lci/cards/dreadmawsiref.jpg"/>
                <p><strong>Uncommon - Dreadmaw's Ire</strong>. 
                    I'm almost looking more at the "destroy target artifact" than at the +2/+2. Getting in with a few cretures, then use it on the one that will get damage through
                    to destroy a crafted artifact where they invested 10 mana for a single red sounds delicious to me!
                </p>
                <br />
            </div>  
            <div>
                <img className='card-wrapper' src="https://www.mythicspoiler.com/lci/cards/calamitouscaveinf.jpg"/>
                <p><strong>Uncommon - Calamitous Cave-In</strong>. And here is our third wrath of the collection? If I didn't know better, I'd swear 
                the guys that make the game don't like small creatures.</p>
                <br />
            </div>  
            <div>
                <img className='card-wrapper' src="https://www.mythicspoiler.com/lci/cards/triumphantchompf.jpg"/>
                <p><strong>Uncommon - Triumphant Chomp</strong>. Much better in a dino deck, but I've never complained about a <a href="https://mythicspoiler.com/m14/cards/shock.jpg">shock</a>.</p>
                <br />
            </div>   
            <div>
                <img className='card-wrapper' src="https://www.mythicspoiler.com/lci/cards/zoyowasjusticef.jpg"/>
                <p><strong>Uncommon - Zoyowa's Justice</strong>. Good to reset cards? I don't like that this doesn't give you a card back.</p>
                <br />
            </div>  
            <div>
                <img className='card-wrapper' src="https://www.mythicspoiler.com/lci/cards/tectonichazard.jpg"/>
                <p><strong>Common - Tectonic Hazard</strong>. Ping EVERYTHING from your opponents. How good will this be? We'll know in the next episode!</p>
                <br />
            </div>
            <div>
                <img className='card-wrapper' src="https://www.mythicspoiler.com/lci/cards/sunfiretorch.jpg"/>
                <p><strong>Common - Sunfire Torch</strong>. This is in the appropriate colour because it is such a slow burn. Still good, I guess.</p>
                <br />
            </div>
            <div>
                <img className='card-wrapper' src="https://www.mythicspoiler.com/lci/cards/rumblingrockslide.jpg"/>
                <p><strong>Common - Rumbling Rockslide</strong>. A classic. Never too good, never too bad to ditch it if you don't have anything better.</p>
                <br />
            </div>
            <div>
                <img className='card-wrapper' src="https://www.mythicspoiler.com/lci/cards/abradef.jpg"/>
                <p><strong>Common - Abrade</strong>. Guess who's back! THis will allllways find a target. Really good!</p>
                <br />
            </div>   
            <div>
                <img className='card-wrapper' src="https://www.mythicspoiler.com/lci/cards/abradef.jpg"/>
                <p><strong>Common - Idol of the Deep King</strong>. Solid card; kill something, use it for your artifact synergies and get a nice bonus after!</p>
                <br />
            </div>    
            <div>
                <img className='card-wrapper' src="https://www.mythicspoiler.com/lci/cards/sunshotmilitia.jpg"/>
                <img className='card-wrapper' src="https://www.mythicspoiler.com/lci/cards/panickedaltisaur.jpg"/>
                <p>These are removal... <em>of people >:)</em></p>
                <br />
            </div>       
            <h3>Comments: It feels like everything in red kills! We'll have to be very careful about which spells we pick.</h3>

            <h1>Evasion (anything that gets through the invariably present ground wall)</h1>
            <p>It seems that red doesn't have evasion; instead, it has undercosted creatures (like 4/3 for 3), so there will be a tension in deckbuilding:
                do you go for small evasive creatures that can't be blocked, or do you go for big chompers that can be double blocked?
            </p>

            <h1>Anything else (good cards in general, or archetype-defining)</h1>
            <h3>IN CONSTRUCTION</h3>
        </div>
    )
}