import React, { useState, useEffect } from 'react';
import '../styles/Character.scss'
import Card from './Card';

function Character() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then((resp) => resp.json())
      .then((data) => setCharacters(data.results));
  }, []);

  return (
    <div className="Character">
      {characters.map((character) => (
        <Card key={character.id} character={character} />
      ))}
    </div>
  );
}

export default Character;
