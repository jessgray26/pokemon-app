import React from 'react';

function Pokemon(pokemon){
    return(
    <div>
        <p>It's ID is #{pokemon.id}</p>
        <img src={pokemon.sprites} />
    </div>

    )
    };

  export default Pokemon;