import React from 'react';
import '../styles/card.scss';
import LikeButton from './LikeButton';

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
            <div>
                <LikeButton color="red" />
            </div>
        </div>
    );
}

export default Card;
