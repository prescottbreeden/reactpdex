import React from 'react';

const padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3): number);

const PokeCard = (props) => {
    const { name, id, type, exp  } = props;
    const pokeApi = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';
    const sprite = `${pokeApi}${padToThree(id)}.png`;
    return (
        <div className="poke-card">
            <img className="poke-card__sprite" 
                src={sprite}
                alt={name}
            />
            <h3 className="poke-card__name">{name}</h3>
            <p className="poke-card__text">Type: {type}</p> 
            <p className="poke-card__text">EXP: {exp}</p>
        </div>
    );
}

export default PokeCard;