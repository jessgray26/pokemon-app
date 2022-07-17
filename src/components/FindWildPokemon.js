import React from 'react';

export default function FindWildPokemon(pokemon){
    return(
    <div>
        <h4>You encountered a {pokemon.name}!</h4>
        <p>It's ID is #{pokemon.id}</p>
        <img src={pokemon.sprites} />
        
  </div>

    )
    };
