import React from "react";
import Greeting from "./Greeting";
import HeaderBody from "./HeaderBody";

export default function MainHeader() {
	const name = "Pikachu";
	const color = "SteelBlue";

	return (
		<>
			<Greeting name={name} color={color} />
			<HeaderBody />
		</>
	);
}
