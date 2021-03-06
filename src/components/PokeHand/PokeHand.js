import React from 'react';
import PokeCard from '../PokeCard/PokeCard';
import './PokeHand.css';

function PokeHand(props) {
  const { win, exp, hand, name } = props;
  return (
    <div className="poke-hand">
      <div className="poke-hand__player-bar">
          {
            win 
            ? <h3 className="poke-hand__win">Winning Hand</h3> 
            : <h3 className="poke-hand__lose">Losing Hand</h3>
          }
          <h4>Total Exp: {exp}</h4>
      </div>
      <div className="poke-hand__row">
      {
        hand.map(p =>
          <PokeCard
            id={p.id}
            name={p.name}
            type={p.type}
            exp={p.base_experience}
          />
        )
      }
      </div>
    </div>
  )
}

export default PokeHand;