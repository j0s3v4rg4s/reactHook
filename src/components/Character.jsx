import React, {useState, useEffect, useReducer} from 'react';
import '../styles/Character.scss'
import Card from './Card';

const initialState = {
    favorites: []
}

const favoriteReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_FAVORITE':
            return {...state, favorites: [...state.favorites, action.payload]}
        case 'REMOVE_TO_FAVORITE':
            return {...state, favorites: state.favorites.filter(el => el.id !== action.payload.id)}
        default:
            return state
    }
}

function Character() {
    const [characters, setCharacters] = useState([]);
    const [favorites, dispatch] = useReducer(favoriteReducer, initialState)

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character')
            .then((resp) => resp.json())
            .then((data) => setCharacters(data.results));
    }, []);

    const handleClick = (favorite, state) => {
        if (state) {
            dispatch({type: 'ADD_TO_FAVORITE', payload: favorite})
        } else {
            dispatch({type: 'REMOVE_TO_FAVORITE', payload: favorite})
        }
    }

    return (
        <>
            {favorites.favorites.length > 0 ? <h2>Favorites</h2> : ''}
            {favorites.favorites.map(el =>
                <li key={el.id}>
                    {el.name}
                </li>)
            }

            <div className="Character">
                {characters.map((character) => (
                    <Card key={character.id} character={character} onClick={(state) => handleClick(character, state)}/>
                ))}
            </div>
        </>
    );
}

export default Character;
