/* eslint-disable jsx-a11y/alt-text */
import { useNavigate } from 'react-router-dom'

import React from "react";
import '../App.css';

export default function Blue() {
    const navigate = useNavigate()

    return (
        <div className="colour-page-wrapper">
        <div onClick={() => navigate('/')}><b>Home</b></div>
        <div onClick={() => navigate('/lci')}><b>Back</b></div>

        <div>This page will follow the acronym BREAD (Bombs, Removal, Evasion, Anything else, Don't play).</div>
        <div>However, due to time constraints, only the BRE part will be done.</div>

        <h1>Bombs (Cards that get away with the game if left unchecked)</h1>
        <div>
            <img className='card-wrapper' src="https://mythicspoiler.com/lci/cards/ojerpakpatiqdeepestepochf.jpg"/>
            <p><strong>Mythic - Ojer Pakpatik</strong>. An on-rate flyer is always reason good enough to play a card; this 4/3 for 4 is hard to get rid of,
            and will sometimes get you a nice bonus</p>
            <br />
        </div> 
        <div>
            <img className='card-wrapper' src="https://mythicspoiler.com/lci/cards/akalpakalfirstamongequalsf.jpg"/>
            <p><strong>Rare - Akal Pakal</strong>. Stealing the show from the mythics come this Mayan diva. "Each player's turn" means 
            this triggers on your and your opponent turn. And if you didn't know, drawing two cards out of the top four every turn cycle is <em>good</em>.</p>
            <br />
        </div> 
        <div>
            <img className='card-wrapper' src="https://mythicspoiler.com/lci/cards/subterraneanschoonerf.jpg"/>
            <p><strong>Rare - Subterranean Schooner</strong>. The boat needs to attack to get the trigger, but it is a 3/4 for 2, and the pilot gets bigger! (sometimes).</p>
            <br />
        </div> 
        <div>
            <img className='card-wrapper' src="https://mythicspoiler.com/lci/cards/kitesaillarcenistf.jpg"/>
            <p><strong>Rare - Kitesail Larcenist</strong>. Inutilize the strongest creature from the rivals, or turn your useless 1/1 into mana.
             All is possible for this little guy.</p>
            <br />
        </div> 
        <h3>
            Comments: Almost all the rares and mythics are good for blue! Let's see if we have the bulk to support it...
        </h3>
        
        <h1>Removal (anything that gets pesky permanents out of the board, with varying efficacy)</h1>
        <h4>Honorable mention: Kitesail Larcenist. This can remove TWO creatures in 2v2 games!</h4>
        <div>
            <img className='card-wrapper' src="https://mythicspoiler.com/lci/cards/hurlintohistoryf.jpg" />
            <p><strong>Uncommon - Hurl into History</strong>. I like counterspells as much as I hate expensive counterspells. The main reason for playing counters is
            the mana advantage you get when you pay 3 mana to counter a 5cmc spell, and expensive ones lose that edge. However, I'm willing to play this if it gives me 
            an X-cost for free (the appropriately costed "counter+draw" would be 2UU, or 3U).</p>
            <br />
        </div>
        <div>
            <img className='card-wrapper' src="https://mythicspoiler.com/lci/cards/confoundingriddlef.jpg" />
            <p><strong>Uncommon - Confounding Riddle</strong>. What costs 3 mana and is helpful in 3 scenarios? This is helpful for milling, for answering a big dude or 
            for finding an answer/a better card when your opponent can pay the counter cost.</p>
            <br />
        </div>
        <div>
            <img className='card-wrapper' src="https://mythicspoiler.com/lci/cards/outofair.jpg" />
            <p><strong>Common - Out of Air</strong>. And speaking of expensive counters... The cost reduction won't usually matter as having UU stretches your mana 
            too much on the first turns.</p>
            <br />
        </div>
        <div>
            <img className='card-wrapper' src="https://mythicspoiler.com/lci/cards/brackishblunder.jpg" />
            <p><strong>Common - Brackish Blunder</strong>. Temporary removal is still removal, but remember this is not a 1 for 1; they get to keep the card.</p>
            <br />
       </div>

        <h3>Comments: No surprises here, blue has never been the colour of removal. In 2v2, coutners get more valuable, as there will be twice as many things to counter;
            but pair them with flash/ instants, to not lose the mana if they plan nothing worth countering.
        </h3>
        <br />


        <h1>Evasion (anything that gets through the invariably present ground wall)</h1>
        <h4>Honorable mention: Kitesail Larcenist. Removal and flyer in one, what can we say?</h4>

        <div>
            <img className='card-wrapper' src="https://mythicspoiler.com/lci/cards/malcolmalluringscoundrelf.jpg" />
            <p><strong>Rare - Malcolm, Alluring Scoundrel</strong>.  Aggressive flyer that will improve your hand (hopefully). In 2v2, you can't choose to attack the player 
            with no flyers, which is a shame. We attak and block as a team.
             </p>
             <br />
        </div>
        <div>
            <img className='card-wrapper' src="https://mythicspoiler.com/lci/cards/councilofechoesf.jpg" />
            <p><strong>Uncommon - Council of Echoes</strong>. Big flyer that more often than not will bounce something. Too expensive, but good in combination with other flyers
             </p>
             <br />
        </div>
        <div>
            <img className='card-wrapper' src="https://mythicspoiler.com/lci/cards/merfolkcavediver.jpg" />
            <p><strong>Uncommon - Merfolk Cave-Diver</strong>.  The Pirate/Artifact deck looks like a thing, and this, despite being a fish, fits nicely into the aggressive/
            evasive narrative.</p>
            <br />
        </div>
        <div>
            <img className='card-wrapper' src="https://mythicspoiler.com/lci/cards/waterloggedhulk.jpg" />
            <p><strong>Uncommon - Waterlogged Hulk</strong>. Yes, it looks like a lot of work, but you know what can attack freely in this world of opression?
             <a style={{color: "blue"}} href="https://mythicspoiler.com/lci/cards/watertightgondola.jpg">The back side of this card</a>.</p>
            <br />
        </div>
        <div>
            <img className='card-wrapper' src="https://mythicspoiler.com/lci/cards/didactechof.jpg" />
            <p><strong>Common - Didact Echo</strong>.  -Me: I want <a style={{color: "blue"}} href="https://mythicspoiler.com/mdm/cards/mulldrifter.jpg">Mulldrifter</a>. Mom: We have Mulldrifter at home. <br /> The Mulldrifter at home:
            <br /> (Still good enough, not gonna lie).
            </p>
            <br />
        </div>
        <div>
            <img className='card-wrapper' src="https://mythicspoiler.com/lci/cards/waterwindscoutf.jpg" />
            <p><strong>Common - Waterwind Scout</strong>.  The versatility of a <a style={{color: "blue"}} href="https://mythicspoiler.com/kld/cards/winddrake.jpg">Wind Drake</a> 
             that can become a <a style={{color: "blue"}} href="https://cards.scryfall.io/large/front/b/5/b5cddd47-8c2b-47de-bf82-e810d4cf4df4.jpg?1562853413">Phantom Monster</a> or allow another creature to get big. Yum!
            </p>
            <br />
        </div>
        <h3>Comments: Tons of flyers around, so we'll have to save our removal spells for those.</h3>
        <br />

        <h1>Anything else (good cards in general, or archetype-defining)</h1>
            <div>
            <img className='card-wrapper' src="https://mythicspoiler.com/lci/cards/spyglasssirenf.jpg" />
            <p><strong>Uncommon - Spyglass Siren</strong>. We've talked about the Pirate/Evasive/Artifact/Aggressive deck before, right? (PEAA for short). This looks like the 
            flagship of this archetype, being a pirate, a flyer, a 2/2 for 1(+1), and an artifact. Usually I say don't play 1-drops, but this is definitely worth it!
            </p>
            <br />
        </div>
        <div>
            <img className='card-wrapper' src="https://mythicspoiler.com/lci/cards/malametwarscribef.jpg" />
            <p><strong>Uncommon - Malamet War Scribe</strong>. Much better in 1-to-1 matches than 2 vs 2 due to the effect only happening to half the board. Token finisher.
            </p>
            <br />
        </div>
        <div>
            <img className='card-wrapper' src="https://mythicspoiler.com/lci/cards/kinjallisdawnrunnerf.jpg" />
            <p><strong>Uncommon - Kinjalli's Dawnrunner</strong>. If voltron is an archetype, this guy is its harbinger. That means it is the ideal guy
            to put auras/equipments on it. A high-risk, high-reward strategy, better in individual than in 2HG (two-headed giant).</p>
            <p>
                <em>Edit</em>: It seems that there are <a href="https://mythicspoiler.com/lci/cards/mightoftheancestors.jpg">many</a>,
                 <a href="https://mythicspoiler.com/lci/cards/ironpawaspirant.jpg">many</a>, <a href="https://mythicspoiler.com/lci/cards/glorifierofsuffering.jpg"><em>many</em></a>
                 cards that play with creatures' power, so this can be a good asset in the right deck. <a href="https://mythicspoiler.com/lci/cards/familyreunion.jpg">This card</a>
                 can be used for protection from the feared removal.
            </p>
            <br />
        </div>
        <div>
            <img className='card-wrapper' src="https://mythicspoiler.com/lci/cards/ruinlurkerbat.jpg" />
            <p><strong>Uncommon - Ruin-Lurker Bat</strong>. At common, this would have been nice; this is a disgrace. Even so, good for the life matters decks, if there are any.</p>
            <br />
        </div>
        <div>
            <img className='card-wrapper' src="https://mythicspoiler.com/lci/cards/tinkerstote.jpg" />
            <p><strong>Common - Tinker's Tote</strong>. This is three artifacts and two creatures packed in one card. Even my tote bag doesn't have that many,
            and I paid no mana for it!</p>
            <br />
        </div>  <div>
            <img className='card-wrapper' src="https://mythicspoiler.com/lci/cards/envoyofokinecahau.jpg" />
            <p><strong>Common - Envoy of Okinec Ahau</strong>. Don't be fooled by his whiskers and his card type, this cat is a beast! A 3/3 for 3 is never bad,
            and if you happen to have more mana than things to do with it... magic happens</p>
            <br />
        </div>

        <h3>Comments: At first glance, it seems that the artifact theme in white is much stronger than the creature one. In 1 vs 1, the token archetype might 
            prove too fast or too wide for some decks to play against, but in 2v2 the fact that both opponents can play one creature each dilutes the aggressive
            power of the tokens. It has some of the strongest removals in the set.
        </h3>

        <div style={{color:"blue"}} onClick={() => navigate('/lci')}><b>Back to colour selection</b></div>

    </div>
    )
}