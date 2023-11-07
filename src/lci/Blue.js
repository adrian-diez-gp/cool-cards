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
            <img className='card-wrapper' src="https://mythicspoiler.com/lci/cards/ojertaqdeepestfoundationf.jpg"/>
            <p><strong>Mythic - Ojer Pakpatik</strong>. An on-rate flyer is always reason good enough to play a card; this 4/3 for 4 is hard to get rid of,
            and will sometimes get you a nice bonus</p>
            <br />
        </div> 
        <div>
            <img className='card-wrapper' src="https://mythicspoiler.com/lci/cards/thousandmoonssmithyf.jpg"/>
            <p><strong>Rare - Akal Pakal</strong>. Stealing the show from the mythics come this Mayan diva. "Each player's turn" means 
            this triggers on your and your opponent turn. And if you didn't know, drawing two cards out of the top four every turn cycle is <em>good</em>.</p>
            <br />
        </div> 
        <div>
            <img className='card-wrapper' src="https://mythicspoiler.com/lci/cards/thousandmoonssmithyf.jpg"/>
            <p><strong>Rare - Subterranean Schooner</strong>. The boat needs to attack to get the trigger, but it is a 3/4 for 2, and the pilot gets bigger! (sometimes).</p>
            <br />
        </div> 
        <div>
            <img className='card-wrapper' src="https://mythicspoiler.com/lci/cards/thousandmoonssmithyf.jpg"/>
            <p><strong>Rare - Kitesail Larcenist</strong>. Inutilize the strongest creature from the rivals, or turn your useless 1/1 into mana.
             All is possible for this little guy.</p>
            <br />
        </div> 
        <h3>
            Comments: Almost all the rares and mythics are good for blue! Let's see if we have the bulk to support it...
        </h3>
        
        <h1>Removal (anything that gets pesky permanents out of the board, with varying efficacy)</h1>
        <div>
            <img className='card-wrapper' src="https://mythicspoiler.com/lci/cards/getlostf.jpg" />
            <p><strong>Uncommon - Hurl into History</strong>. </p>
            <br />
        </div>
        <div>
            <img className='card-wrapper' src="https://mythicspoiler.com/lci/cards/sandswirlwanderglyph.jpg" />
            <p><strong>Rare - Unstable Glyphbridge</strong>. Not the best wrath in the world, but a wrath nonetheless; the flip side is more annoying than needing to pee when it's 
            your turn to get on a rollercoaster.</p>
            <br />
        </div>
        <div>
            <img className='card-wrapper' src="https://mythicspoiler.com/lci/cards/duskrosereliquaryf.jpg" />
            <p><strong>Uncommon - Duskrose Reliquary</strong>. It looks bad, and probably is if inherent artifact removal (i.e. things that destroy artifacts as part of their effect 
            instead of the effect just being "destroy target artifact") is abundant. However, getting rid of ANY artifact or creature for 1 mana is as good an exchange as you could possibly hope for.</p>
            <br />
        </div>
        <div>
            <img className='card-wrapper' src="https://mythicspoiler.com/lci/cards/dauntlessdismantler1.jpg" />
            <p><strong>Uncommon - Dauntless dismantler</strong>. Annnd here it is, the mass artifact destruction. 
            For a single W, it gets rid of all artifact tokens (even if they are creatures!)</p>
            <br />
        </div>
        <div>
            <img className='card-wrapper' src="https://mythicspoiler.com/lci/cards/springloadedsawbladesf.jpg" />
            <p><strong>Uncommon - Spring-Loaded Sawblades</strong>. Destroy target "tapped" (attacking) creature for 2 mana is always nice. 
            The crafted side has applications (see Attentive Sunscribe or Volatile Wonderglyph)</p>
            <br />
        </div>
        <div>
            <img className='card-wrapper' src="https://mythicspoiler.com/lci/cards/quicksandwhirlpool.jpg" />
            <p><strong>Common - Quicksand Whirlpool</strong>. Too expensive for my liking (paying 6 mana to get rid of a 3 mana creature has never been a good thing) 
            but chances are that you'll use at least one of these. I'm generally not a fan that removal that needs the opponent to do something (see below)</p>
            <br />
        </div>
        <div>
            <img className='card-wrapper' src="https://mythicspoiler.com/lci/cards/cosmiumblast.jpg" />
            <p><strong>Cosmium Blast</strong>.  Gideon is no more, so <a href="https://www.mythicspoiler.com/bfz/cards/gideonsreproach.jpg">Gideon's reproach</a> needed a revamp. Like I said, not a fan of
            removal that needs the opponent to attack/block/tap creatures/etc.</p>
            <br />
        </div>
        <div>
            <img className='card-wrapper' src="https://mythicspoiler.com/lci/cards/petrifyf.jpg" />
            <p><strong>Petrify</strong>. Pacifism at its best; but remember that it can be bounced and turned back ("craft" abilities get disabled with this though!)</p>
            <br />
        </div>
        <h3>Comments: Lots of different removal in white but we'll more commonly see only the common (heh) ones.</h3>
        <br />


        <h1>Evasion (anything that gets through the invariably present ground wall)</h1>
        <div>
            <img className='card-wrapper' src="https://mythicspoiler.com/lci/cards/resplendentangelf.jpg" />
            <p><strong>Mythic - Resplendent Angel</strong>.  This reads "3/3 for 1WW" which is already great. If you get an angel for free every turn, the game was already in your favour
            (make the most of it!)
             </p>
             <br />
        </div>
        <div>
            <img className='card-wrapper' src="https://mythicspoiler.com/lci/cards/wardenoftheinnersky.jpg" />
            <p><strong>Rare - Warden of the Inner Sky</strong>. How fast can we fill the board with more pieces of cardboard? That's how good this card is.
             </p>
             <br />
        </div>
        <div>
            <img className='card-wrapper' src="https://mythicspoiler.com/lci/cards/sanguineevangelistf.jpg" />
            <p><strong>Rare - Sanguine Evangelist</strong>.  It is rare not because each of its parts is good, but because of the sum of its parts. Battle Cry
            can add a lot to the battle. Even if it doesn't connect, the flyers will; and when it dies, it leaves a bat behind.</p>
            <br />
        </div>
        <div>
            <img className='card-wrapper' src="https://mythicspoiler.com/lci/cards/olteccloudguardf.jpg" />
            <p><strong>Common - Oltec Cloudguard</strong>.  Fine flyer, comes with an artifact AND creature. Good in several archetypes -but only <em>good</em>.</p>
            <br />
        </div>
        <div>
            <img className='card-wrapper' src="https://mythicspoiler.com/lci/cards/soaringsandwing.jpg" />
            <p><strong>Common - Soaring Sandwing</strong>.  Don't be afraid of cycling it early, this is really only good as a topdeck.</p>
            <br />
        </div>
        <h3>Comments: I expected more from white in terms of flyers. There are a couple of 1/1 for 1 that fly but generally they are not worth it.</h3>
        <br />

        <h1>Anything else (good cards in general, or archetype-defining)</h1>
            <div>
            <img className='card-wrapper' src="https://mythicspoiler.com/lci/cards/marketgnomef.jpg" />
            <p><strong>Uncommon - Market Gnome</strong>. The all-star of both sacrifice and craft archetypes.Also an early wall against aggro decks. Good to have in mind!
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