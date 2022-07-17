import { useState } from 'react'
import axios from 'axios'
import FindWildPokemon from './FindWildPokemon'

export default function Wild(){
    const [wildPokemon, setWildPokemon] = useState({});
    const [random, setRandom] = useState(true);

    const pokeId = () => {
        const min = Math.ceil(1)
        const max = Math.floor(980)
        return Math.floor(Math.random() * (max - min + 1)) + min
    }

    function encounterWildPokemon() {
        setRandom(true);
        
        axios('https://pokeapi.co/api/v2/pokemon/' + pokeId())
            .then(response => {
                console.log(response.data);
                setWildPokemon(response.data);
                setRandom(false);
            })
    }

    return(
        <div className="Random">
            <button className="randomize" onClick={() => encounterWildPokemon()}>Randomize</button>
            {
          (random == true) ? (
            <div>
                <p></p>
            </div>
          ) : (
              <div>
                <p>
                    <FindWildPokemon name={wildPokemon.name} id={wildPokemon.id} sprites={wildPokemon.sprites.front_default} />
                </p>
              </div>
          ) 
        }
        </div>
    );
    }
