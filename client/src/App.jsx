import React, { useState, useEffect } from "react";
import "./App.css";

import MainHeader from "./components/MainHeader";
import PokemonList from "./components/PokemonList";
import FetchData from "./components/FetchData";

/* class Welcome extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<h1 style={{ color: "steelblue", fontWeight: "bold" }}>
				Hi {this.props.name}!
			</h1>
		);
	}
} */

function App() {
	const [myPokemon, setMyPokemons] = useState([
		"Pikachu",
		"Arceus",
		"Shedinja",
		"Cubone",
		"Chestnaught",
	]);

	const [count, setCount] = useState(0);
	const [name, setName] = useState("Charmander");
	const [newPokemon, setNewPokemon] = useState("");
	const [bgColor, setBgColor] = useState("white");

	const changeName = (e) => {
		setName(e.target.value);
	};

	const addPokemon = (pokemonName) => {
		setMyPokemons([...myPokemon, pokemonName]);
	};

	const setRandomBackgroundColor = () => {
		const colors = [
			"red",
			"blue",
			"green",
			"yellow",
			"purple",
			"black",
			"white",
			"pink",
			"orange",
		];
		const randomColor = colors[Math.floor(Math.random() * colors.length)];
		setBgColor(randomColor);
	};

	useEffect(() => {
		console.log("Component rendered!");
	}, [count]);

	return (
		<div
			className="container"
			style={{ backgroundColor: bgColor, padding: "100px" }}
		>
			<article>
				<hgroup>
					<div>
						<MainHeader />{" "}
					</div>
				</hgroup>

				<p>Meet all my friends:</p>

				{/* <PokemonList pokemons={pokemon} /> */}
				<FetchData />

				<button onClick={() => alert("Hi there!")}>Click Me!</button>
			</article>
			<br />
			<br />

			<h3>My Counter: {count}</h3>
			<button onClick={() => setCount(count + 1)}>Increase</button>
			<button onClick={() => setCount(count - 1)}>Decrease</button>
			<br />
			<br />

			<h1>Meet my Pokemon: {name}</h1>
			<input type="text" value={name} onChange={changeName} />
			<br />
			<br />

			<h1>Add a Pokemon</h1>
			<input
				type="text"
				value={newPokemon}
				onChange={(e) => setNewPokemon(e.target.value)}
			/>
			<button onClick={() => addPokemon(newPokemon)}>Add Pokemon</button>
			<br />
			<br />

			<h1>Change Background Color</h1>
			<button onClick={() => setRandomBackgroundColor()}>
				Change Background
			</button>
		</div>
	);
}

export default App;
