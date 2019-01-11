import React from 'react';

function StarWarsList(props) {
    return (
        <ul>
            {props.starwarsChars.map(starwarsChar => {
                console.log(starwarsChar);
                return <li>{starwarsChar.name}</li>
            })}
        </ul>
    )
}

export default StarWarsList;