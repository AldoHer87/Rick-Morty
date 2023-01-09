import axios from 'axios';
import React, { useEffect, useState } from 'react';

const CharacterCard = ({characterUrl}) => {

    const [char, setChar] = useState({})

    useEffect(() => {
        axios.get(characterUrl)
        .then(res => setChar(res.data))
    }, [])

    console.log(char)


    return (
        <div className='characters'>
            <ul>
                <li className='charCard'>
                    <img className='charPhoto' src={char.image} alt="image" />
                    <br />
                    <h3 className='charName'>{char.name}</h3>
                    <br />
                    <hr />
                    <br />
                    <h4><b>Species: </b>{char.species}</h4>
                    <br />
                    <h4><b>Status: </b>{char.status}</h4>
                    <br />
                    <h4><b>Origin: </b>{char.origin?.name}</h4>
                    <br />
                    <h4><b>Episodes where appears: </b>{char.episode?.length}</h4>

                </li>
            </ul>
        </div>
    );
};

export default CharacterCard;