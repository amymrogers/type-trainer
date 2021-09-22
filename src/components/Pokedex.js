import React, { Component, useState } from 'react';
import axios from 'axios';
import MainPokemonCard from './MainPokemonCard';
import TypeButton from './TypeButton';

class Pokedex extends React.Component {
    state = {
        targetPokemon: {
            name: "",
            number: "",
            sprite: "",
            type1: "",
            type2: "",
        },
        typesPoints: [
            {
                name: "normal",
                damage: 1,
            },
            {
                name: "poison",
                damage: 1,
            },
            {
                name: "ground",
                damage: 1,
            },
            {
                name: "rock",
                damage: 1,
            },
            {
                name: "bug",
                damage: 1,
            },
            {
                name: "ghost",
                damage: 1,
            },
            {
                name: "steel",
                damage: 1,
            },
            {
                name: "dragon",
                damage: 1,
            },
            {
                name: "dark",
                damage: 1,
            },
            {
                name: "flying",
                damage: 1,
            },
            {
                name: "fire",
                damage: 1,
            },
            {
                name: "psychic",
                damage: 1,
            },
            {
                name: "ice",
                damage: 1,
            },
            {
                name: "fighting",
                damage: 1,
            },
            {
                name: "water",
                damage: 1,
            },
            {
                name: "grass",
                damage: 1,
            },
            {
                name: "electric",
                damage: 1,
            },
            {
                name: "fairy",
                damage: 1,
            }
        ]
    }

    componentDidMount() {
        this.getNewPokemon()
    }

    resetTypes = () => {
        this.setState({
            typesPoints: [
                {
                    name: "normal",
                    damage: 1,
                },
                {
                    name: "poison",
                    damage: 1,
                },
                {
                    name: "ground",
                    damage: 1,
                },
                {
                    name: "rock",
                    damage: 1,
                },
                {
                    name: "bug",
                    damage: 1,
                },
                {
                    name: "ghost",
                    damage: 1,
                },
                {
                    name: "steel",
                    damage: 1,
                },
                {
                    name: "dragon",
                    damage: 1,
                },
                {
                    name: "dark",
                    damage: 1,
                },
                {
                    name: "flying",
                    damage: 1,
                },
                {
                    name: "fire",
                    damage: 1,
                },
                {
                    name: "psychic",
                    damage: 1,
                },
                {
                    name: "ice",
                    damage: 1,
                },
                {
                    name: "fighting",
                    damage: 1,
                },
                {
                    name: "water",
                    damage: 1,
                },
                {
                    name: "grass",
                    damage: 1,
                },
                {
                    name: "electric",
                    damage: 1,
                },
                {
                    name: "fairy",
                    damage: 1,
                }
            ]
        })
    }

    updateTypePoints = (type) => {
        axios.get(`https://pokeapi.co/api/v2/type/${type}/`).then((response) => {

            let ids = this.state.typesPoints;
            //  2x effective moves
            response.data.damage_relations.double_damage_from.map((item) => (
                ids[ids.findIndex(el => el.name === item.name)].damage = ids[ids.findIndex(el => el.name === item.name)].damage * 2
            ))

            //  0.5x effective moves
            response.data.damage_relations.half_damage_from.map((item) => (
                ids[ids.findIndex(el => el.name === item.name)].damage = ids[ids.findIndex(el => el.name === item.name)].damage * 0.5
            ))

            //  0x effective moves
            response.data.damage_relations.no_damage_from.map((item) => (
                ids[ids.findIndex(el => el.name === item.name)].damage = ids[ids.findIndex(el => el.name === item.name)].damage * 0
            ))
            this.setState({
                typesPoints: ids
            })

        })
    }

    getNewPokemon = () => {
        let types = []
        let RandomNumber = Math.floor(Math.random() * 898) + 1;
        this.resetTypes()

        axios.get(`https://pokeapi.co/api/v2/pokemon/${RandomNumber}`).then((response) => {
            types.push(response.data.types[0].type.name);
            this.updateTypePoints(response.data.types[0].type.name)

            // Check to see if there's a secondary type
            if (response.data.types.length > 1) {
                types.push(response.data.types[1].type.name)
                this.updateTypePoints(response.data.types[1].type.name)
            }
            else {
                types.push("hidden")
            }

            this.setState({
                targetPokemon: {
                    name: response.data.name,
                    number: response.data.id,
                    sprite: response.data.sprites.front_default,
                    type1: types[0],
                    type2: types[1],
                }
            })
        })
    }

    attackPokemon = (name, dmg) => {
        console.log("Attacked with " + name + " for " + dmg + "x damage!");
        this.getNewPokemon();
    }

    render() {
        return <div class="container mx-auto md:px-4 bg-white border-gray-200 shadow-md dark:bg-gray-800 mt-0 lg:mt-12 rounded-lg max-w-6xl">
            <div class="flex flex-row flex-1 justify-end mt-4 mx-2 md:mx-0">
                <button class="text-gray-500 hover:bg-gray-100 p-2 rounded inline-flex items-center" onClick={this.getNewPokemon}>
                    <svg xmlns="http://www.w3.org/2000/svg" class="text-gray-500 w-3 h-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                    <span class="text-sm">Find another Pokémon</span>
                </button>
            </div>

            <MainPokemonCard
                pokemon={this.state.targetPokemon}
            />

            <div class="flex-grow space-y-2 p-4 mx-4 mb-4">
                <span class="text-xl">Which move type will you use?</span>
                <div class="grid gap-4 grid-cols-2 md:grid-cols-3">
                    {this.state.typesPoints.map((item, i) => (
                        <TypeButton
                            name={item.name}
                            damage={item.damage}
                            onClick={() => this.attackPokemon(item.name, item.damage)}
                        />
                    ))}

                </div></div>
        </div>
    }
}

export default Pokedex;