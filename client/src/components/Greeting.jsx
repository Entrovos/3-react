import React, { useState } from "react";

export default function Greeting(props) {
	const [color, setColor] = useState("");

	return (
		<div>
			<h1 style={{ color: color }}>
				Meet my <i>Pokemon</i>
			</h1>
			<button onClick={() => setColor(color === "blue" ? "red" : "blue")}>
				Toggle Color
			</button>
		</div>
	);
}
