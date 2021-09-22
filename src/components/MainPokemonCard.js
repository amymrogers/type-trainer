import React, { Component } from 'react';

class MainPokemonCard extends React.Component {
    render() {
        return <div class="flex flex-col items-center p-4">
            <span>You have encountered a wild </span>
            <p class="text-3xl font-bold" style={{ textTransform: 'capitalize' }}>{this.props.pokemon.name}</p>
            <img width="200px" src={this.props.pokemon.sprite} />
            <div class="type-badges flex flex-row">
                <span class={"px-4 py-2 rounded font-bold " + this.props.pokemon.type1} style={{ textTransform: 'capitalize' }}>{this.props.pokemon.type1}</span>
                <span class={"ml-2 px-4 py-2 rounded font-bold " + this.props.pokemon.type2} style={{ textTransform: 'capitalize' }}>{this.props.pokemon.type2}</span>
            </div>
            <p class="text-gray-400">#{this.props.pokemon.number}</p>
        </div>;
    }
}

export default MainPokemonCard;