import { useState } from 'react';
import Axios from 'axios';
import Pokemon from './Pokemon';

export default function Search() {
    const [search, setSearch] = useState("");
    const [pokemon, setPokemon] = useState({});
    const [loading, setLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState(false);

    function searchPoke() {
      setLoading(true);

      Axios('https://pokeapi.co/api/v2/pokemon/' + search)
      .then(function (response) {
          setPokemon(response.data);
          setLoading(false);
      })
      .catch(function (error) {
        setLoading(true);
        setErrorMessage("Not Found!");
      });
    }
  
    return (
      <div className="Search">
        <input type="text" required onChange={(event) => {
          setSearch(event.target.value);
        }} />
        <button onClick={() => searchPoke()}>Search</button>

        {
          (loading == false) ? (
            <div>
              <p></p>
            </div>
          ) : (
            <div style={{color: "red"}} className="error"> {errorMessage} </div>
          ) 
        }
        {
          (loading == true) ? (
            <div>
              <p></p>
            </div>
          ) : (
            <div>
              <p>
              <Pokemon name={pokemon.name} id={pokemon.id} sprites={pokemon.sprites.front_default}/>
              </p>
            </div>
          ) 
        }
      </div>
    );
  }