import { useState, useEffect } from "react"

export default function Body() {

    async function getPokeData() {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=5&offset=0')
        const pokeData = await response.json()
        const pokeNames = []
        const pokeImages = []
        const pokeInfo = []
        for (let i = 0; i< pokeData.results.length; i++) {
            const pokeUrl = pokeData.results[i].url
            const pokeResponse = await fetch(pokeUrl)
            const pokemonData = await pokeResponse.json()
            const pokemonName = pokemonData.name
            const pokemonImage = pokemonData.sprites.front_default
            pokeNames.push(pokemonName)
            pokeImages.push(pokemonImage)
        }
        for (let i = 0; i < 5; i++) {
            const pokemonTemplate = {
                name: 'name',
                image: 'image',
            }
            const pokemon = Object.create(pokemonTemplate)
            pokemon.name = pokeNames[i]
            pokemon.image = pokeImages[i]
            pokeInfo.push(pokemon)
        }
    }
    getPokeData()
    
    return (
        <div className="flex flex-1 p-8">
            <div className="w-full flex flex-row justify-between h-full items-center">
                <div className="bg-gray-200 w-1/6 h-2/5">
                    <h1></h1>
                    <img src=""/>
                </div>
                <div className="bg-gray-200 w-1/6 h-2/5">
                    <h1></h1>
                    <img src=""/>
                </div>
                <div className="bg-gray-200 w-1/6 h-2/5">
                    <h1></h1>
                    <img src=""/>
                </div>
                <div className="bg-gray-200 w-1/6 h-2/5">
                    <h1></h1>
                    <img src=""/>
                </div>
                <div className="bg-gray-200 w-1/6 h-2/5">
                    <h1></h1>
                    <img src=""/>
                </div>
            </div>
        </div>
    )
    
}

