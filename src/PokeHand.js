import React from 'react';
import PokeCard from './PokeCard';

function PokeHand(props) {
  console.log(props);
  return (
    <div className="poke-hand">
      {props.win ? <h3>Winner!</h3> : <h3>Loser</h3>}
      {
        props.hand.map(p =>
          <PokeCard
            id={p.id}
            name={p.name}
            type={p.type}
            exp={p.base_experience}
          />
        )
      }
    </div>
  )
}

export default PokeHand;