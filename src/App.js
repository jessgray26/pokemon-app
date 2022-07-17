import React from'react';
import Search from './components/Search';
import PokemonList from './components/PokemonList';
import WildPokemon from './components/WildPokemon';

import './App.css';

export default class App extends React.Component {
  render(){
    return(
      <div>
        <div>
          <img src="https://i.pinimg.com/originals/1d/7e/83/1d7e836aa727aa30038c1fb8bf7fc7b6.gif"/>
          <p><Search/></p>        
          <p><WildPokemon/></p>
        <hr></hr>
        </div>
        <div>
          <p>Need help remembering the name of a pokemon?</p>
          <p><PokemonList/></p>
          </div>
      </div>
      
    );
  }
};
