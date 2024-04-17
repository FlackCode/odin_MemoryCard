import { useState, useEffect } from "react"
function shuffleArray(array){
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

export default function Body({ setCurrentScore, setCurrentBestScore }) {
    const [pokeInfo, setPokeInfo] = useState([])
    const [lastClicked, setLastClicked] = useState(null)

    useEffect(() => {
        async function getPokeData() {
            const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=5&offset=0')
            const pokeData = await response.json()
            const pokeNames = []
            const pokeImages = []

            for (let i = 0; i < pokeData.results.length; i++) {
                const pokeUrl = pokeData.results[i].url
                const pokeResponse = await fetch(pokeUrl)
                const pokemonData = await pokeResponse.json()
                const pokemonName = pokemonData.name.charAt(0).toUpperCase() + pokemonData.name.slice(1)
                const pokemonImage = pokemonData.sprites.front_default
                pokeNames.push(pokemonName)
                pokeImages.push(pokemonImage)
            }

            const pokeInfoArray = pokeNames.map((name, index) => ({
                name: name,
                image: pokeImages[index],
            }));

            setPokeInfo(pokeInfoArray)
        }
        getPokeData()
    }, [])
    
    function handleClick(index) {
        if(lastClicked !== index){
            setLastClicked(index)
            setPokeInfo(shuffleArray([...pokeInfo]))
            setCurrentScore(prevScore => prevScore + 1)

        }
        if(lastClicked == index){
            setLastClicked(null)
        }
    }
    
    return (
        <div className="flex flex-1 p-8">
            <div className="w-full flex flex-row justify-between h-full items-center">
                {pokeInfo.map((pokemon, index) => (
                    <button key={index} className="bg-gray-200 w-1/6 h-2/5 flex flex-col justify-evenly items-center hover:cursor-pointer" onClick={() => handleClick(index)}>
                        <h1 className="font-bold text-lg">{pokemon.name}</h1>
                        <img src={pokemon.image} alt={pokemon.name} draggable="false" className="w-32 h-32"/>
                    </button>
                ))}
            </div>
        </div>
    )
}