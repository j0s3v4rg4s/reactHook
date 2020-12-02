import React from 'react';
import '../styles/card.scss';

function Card({ character }) {
  return (
    <div className="Card">
      <img src={character.image} className="Card-img" alt="logo" />
      <div className="Card-content">
        <p className="Card-content__title">{character.name}</p>
        <p className="Card-content__section">
          Species: <span className="value">{character.species}</span>
        </p>
        <p className="Card-content__section">
          Type: <span className="value">{character.type}</span>
        </p>
      </div>
    </div>
  );
}

export default Card;
