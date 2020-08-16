import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Pokedex from './pokedex.js'
// import pokecard from './pokecard.js'

function App() {
  return (
    <React.Fragment>
      <h1 className="header">Pokedex:</h1>
      <div className='pokemon'>
      <Pokedex/>

      </div>
    </React.Fragment>
  );
}

// ReactDOM.render(<App />,
//   document.getElementById("root"));

export default App;
