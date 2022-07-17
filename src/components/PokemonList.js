import React, { Component } from 'react';
import axios from 'axios';

import ViewAll from './ViewAll';

export default class PokemonList extends Component{

    state = {
        url: 'https://pokeapi.co/api/v2/pokemon?limit=980',
        pokemon: null,
        active: false,
        show: false,
    };

    async componentDidMount(){
        const res = await axios.get(this.state.url);
        this.setState({ pokemon: res.data['results'] })
        console.log(res.data);
    }

    render(){
        const { show } = this.state;
        return(
            <div>
                <button className="view-btn" onClick={() => this.setState({ show: !show })}>View All Pokemon</button>
                    {this.state.pokemon ? (
                        <div className="list" style={{ display: (show ? 'block' : 'none') }}>
                            {this.state.pokemon.map(pokemon => (
                                <ViewAll
                                    key={pokemon.name}
                                    name={pokemon.name}
                                />
                            ))}
                        </div>
                    ) : (
                        <p>Loading</p>
                    )}
            </div>
        );
    }
}