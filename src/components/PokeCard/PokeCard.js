import React from 'react';
import './PokeCard.css';

const padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3): number);

const PokeCard = (props) => {
    const { name, id, type, exp  } = props;
    const pokeApi = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';
    const sprite = `${pokeApi}${padToThree(id)}.png`;
    return (
        <div className="poke-card">
            <div className="poke-card__image">
                <img 
                    className="poke-card__sprite" 
                    src={sprite}
                    alt={name}
                />
            </div>
            <h3 className="poke-card__name">{name}</h3>
            <p className="poke-card__text">Type: <span className={type}>{type}</span></p> 
            <p className="poke-card__text">Experience: {exp}</p>
        </div>
    );
}

export default PokeCard;