document.addEventListener('DOMContentLoaded', () => {
    const pokedexContainer = document.getElementById('pokedex');

    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
        .then(response => response.json())
        .then(data => {
            const pokemonPromises = data.results.map(pokemon => fetch(pokemon.url).then(res => res.json()));
            return Promise.all(pokemonPromises);
        })
        .then(pokemons => {
            pokemons.forEach(pokemon => {
                const card = document.createElement('div');
                card.classList.add('bg-white', 'border', 'border-gray-300', 'rounded-lg', 'shadow-md', 'p-4', 'text-center', 'w-48');
                card.innerHTML = `
                    <img class="w-24 h-24 mx-auto" src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
                    <h3 class="text-xl font-bold mt-2">${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h3>
                    <p class="text-gray-700"># ${pokemon.id}</p>
                    <p class="text-gray-700">Type: ${pokemon.types.map(typeInfo => typeInfo.type.name).join(' / ')}</p>
                    <p class="text-gray-700">Height: ${pokemon.height / 10} m</p>
                    <p class="text-gray-700">Weight: ${pokemon.weight / 10} kg</p>
                `;
                pokedexContainer.appendChild(card);
            });
        })
        .catch(error => console.error('Error fetching Pokémon data:', error));
});
