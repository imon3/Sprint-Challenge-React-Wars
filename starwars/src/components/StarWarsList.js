import React from 'react';

function StarWarsList(props) {
    return (
        <ul>
            {props.starwarsChars.map((starwarsChar, index) => {
                return <li key={index}>{starwarsChar.name}</li>
            })}
        </ul>
    )
}

export default StarWarsList;