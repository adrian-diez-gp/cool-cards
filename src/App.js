import React from "react";
import './App.css';
import { useNavigate } from 'react-router-dom'


function App() {

  const navigate = useNavigate()


  const collections = [
    {
    name:'Wilds of Eldraine',
    link:"woe",
    bg: 'https://dotesports.com/wp-content/uploads/2020/09/15123003/ZNR-Full-Shepherd-of-Heroes.jpg'
  },
  {
    name:'Lost Caverns of Ixalan',
    link: "lci",
    bg: 'https://dotesports.com/wp-content/uploads/2020/09/15123003/ZNR-Full-Shepherd-of-Heroes.jpg'
  }
]

  return (
    <div className="App">
      <header>
      </header>
      <main className="App-body">
        <h1>
          Cool cards and where to find them
        </h1>
        <div className="cards-wrapper">
          {collections.map(clt => 
            <div className="colour-card" onClick={() => navigate(`/${clt.link}`) } >
              <img src={clt.bg} height={"300px"} width={"300px"} alt=""/>
              <h2>{clt.name}</h2>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;

