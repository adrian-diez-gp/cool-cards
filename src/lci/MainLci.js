import React from "react";
import '../App.css';
import { useNavigate } from 'react-router-dom'


function App() {
  const navigate = useNavigate()


  const cards = [{
    colour:'white',
    bg: 'https://dotesports.com/wp-content/uploads/2020/09/15123003/ZNR-Full-Shepherd-of-Heroes.jpg'
  },
  {
    colour:'blue',
    bg: 'https://images.saymedia-content.com/.image/t_share/MTc5MjE4MTk2NTc0MzgxNTU2/blue-artwork-mtg.jpg'
  },
  {
    colour:'black',
    bg: 'https://media.wizards.com/2015/images/daily/cardart_ORI_UndeadServant.jpg'
  },
  {
    colour:'red',
    bg: 'https://media.wizards.com/2015/images/daily/cardart_DTK_Sarkhans-Rage.jpg'
  },
  {
    colour:'green',
    bg: 'https://media.wizards.com/2015/images/daily/cardart_VMA_Fastbond.jpg'
  },
  {
    colour:'gold',
    bg:'https://mtgazone.com/wp-content/uploads/2022/10/Wurmcoil-Engine-Art-by-Raymond-Swanland.jpg'
  },
  {
    colour:'specialsheet',
    bg:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC08VdUvbv8DbmNIWLbp-RSGdJCx92rwjoZw&usqp=CAU'
  }]

  return (
    <div className="main-lci">
      <header>
      </header>
      <main className="App-body">
        <h1>
          Cool cards and where to find them
        </h1>
        <h2>
        NEW FORMAT! Follow our BREAD catalog to check the best of the best! <span style={{fontSize:"11px"}}>(A and D might not be available for a couple of years)</span>
        </h2>
        <div className="cards-wrapper">
          {cards.map(card => 
            <div className="colour-card" onClick={() => navigate(`/lci/${card.colour}`) } >
              <img src={card.bg} height={"300px"} width={"300px"} alt=""/>
              <h2>{card.colour}</h2>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;

