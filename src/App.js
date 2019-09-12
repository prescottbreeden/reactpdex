import React from 'react';
import PokeHand from './components/PokeHand/PokeHand';

const buildHand = (num) => {
  function handHelper(hand = []) {
    let idx = Math.floor(Math.random() * pokemon.length);
    let randomPokemon = pokemon[idx];
    if (hand.length >= num) return hand;
    return handHelper([...hand, randomPokemon])
  }
  return handHelper();
}
const totalExp = (hand) => hand.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);
const winner = (current, opponent) => current > opponent;

const pokemon = [
  { id: 4, img: '004', name: 'Charmander', type: 'fire', base_experience: 62 },
  { id: 7, img: '007', name: 'Squirtle', type: 'water', base_experience: 63 },
  { id: 11, img: '011', name: 'Metapod', type: 'bug', base_experience: 72 },
  { id: 12, img: '012', name: 'Butterfree', type: 'flying', base_experience: 178 },
  { id: 25, img: '025', name: 'Pikachu', type: 'electric', base_experience: 112 },
  { id: 39, img: '039', name: 'Jigglypuff', type: 'normal', base_experience: 95 },
  { id: 94, img: '094', name: 'Gengar', type: 'poison', base_experience: 225 },
  { id: 133, img: '133', name: 'Eevee', type: 'normal', base_experience: 65 },
];

const hand1 = buildHand(4);
const hand2 = buildHand(4);
const player1 = {
  cards: hand1,
  exp: totalExp(hand1),
  win: winner(totalExp(hand1), totalExp(hand2))
};

const player2 = {
  cards: hand2,
  exp: totalExp(hand2),
  win: winner(totalExp(hand2), totalExp(hand1))
};

const App = () => {
  return (
    <div className="app">
      <header className="app__header">
        <h1 className="app__title">Pokedex Battle Royale with Cheese</h1>
      </header>
      <PokeHand 
        hand={player1.cards} 
        exp={player1.exp}
        win={player1.win} />
      <PokeHand 
        hand={player2.cards} 
        exp={player2.exp}
        win={player2.win}/>
    </div>
  );
}

export default App;
