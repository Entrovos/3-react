import React from "react";

export default function PokemonList(props) {
	return (
		<ul>
			{props.pokemons.map((pokemon) => (
				<li key={pokemon.id}>
					{" "}
					{pokemon.name} {pokemon.type}
				</li>
			))}
		</ul>

		// <ul>
		// 	{props.pokemons.map((pokemon, index) => (
		// 		<li key={index}>Welcome {pokemon}</li>
		// 	))}
		// </ul>
	);
}
