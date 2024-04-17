import { useState, useEffect } from "react"
export default function Body({score, setScore, bestScore, setBestScore}) {
    const [pokemonLogic, setPokemonLogic] = useState([])
    const [pokemonDisplay, setPokemonDisplay] = useState([])
    const [clickedPokemon, setClickedPokemon] = useState('')
    useEffect(() => {
        async function getData() {
            const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=5&offset=5')
            const data = await response.json()
            const pokeNames = []
            const pokeImages = []
            for (let i = 0; i<data.results.length; i++) {
                const url = data.results[i].url
                const urlResponse = await fetch(url)
                const urlData = await urlResponse.json()
                const pokemonName = urlData.name.charAt(0).toUpperCase() + urlData.name.slice(1)
                const pokemonImage = urlData.sprites.front_default
                pokeNames.push(pokemonName)
                pokeImages.push(pokemonImage)
            }
            const pokeArray = pokeNames.map((name, index) => ({
                name: name,
                image: pokeImages[index],
            }))
            setPokemonLogic(pokeArray)
        }
        getData()
        
    }, [])
    useEffect(() => {
        setPokemonDisplay(pokemonLogic);
    }, [pokemonLogic]);

    function shuffleArray(array) {
		let shuffledArray = array.slice(0);
		for (let i = 0; i < shuffledArray.length; i++) {
			const j = Math.floor(Math.random() * shuffledArray.length);
			[shuffledArray[i], shuffledArray[j]] = [
				shuffledArray[j],
				shuffledArray[i],
			];
		}
		return shuffledArray;
	};
    function incrementScore() {
        setScore(score => score + 1)
        console.log(score)
        
    }
    function handleClick(pokemonName) {
        if (clickedPokemon === pokemonName) {
            setBestScore(bestScore => bestScore = score)
            setScore(0)
            setClickedPokemon('')
        } else {
            setClickedPokemon(pokemonName)
            incrementScore()
        }
        
        const shuffledArray = shuffleArray(pokemonDisplay)
        setPokemonDisplay(shuffledArray)
    }
    return (
        <div className="flex flex-1 p-8">
            <div className="w-full flex flex-row justify-between h-full items-center">
                {pokemonDisplay.map((pokemon, index) => (
                    <button key={index} className="bg-gray-200 w-1/6 h-2/5 flex flex-col justify-evenly items-center hover:cursor-pointer hover:bg-gray-300" onClick={() => handleClick(pokemon.name)}>
                        <img src={pokemon.image} draggable="false" className="w-32 h-32"></img>
                        <h1 className="font-bold text-lg">{pokemon.name}</h1>
                    </button>
                ))}
            </div>
        </div>
    )
}