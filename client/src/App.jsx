import React, { useState } from "react";
import "./App.css";

import MainHeader from "./components/MainHeader";
import PokemonList from "./components/PokemonList";

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
	const myPokemon = [
		"Pikachu",
		"Arceus",
		"Shedinja",
		"Cubone",
		"Chestnaught",
	];

	const [count, setCount] = useState(0);

	return (
		<div className="container">
			<article>
				<hgroup>
					<div>
						<MainHeader />{" "}
					</div>
				</hgroup>

				<p>Meet all my friends:</p>
				<PokemonList pokemons={myPokemon} />

				<button onClick={() => alert("Hi there!")}>Click Me!</button>
			</article>

			<br />
			<h3>My Counter: {count}</h3>
			<button onClick={() => setCount(count + 1)}>Increase</button>
			<button onClick={() => setCount(count - 1)}>Decrease</button>
		</div>
	);
}

export default App;
