import React from "react";
import "./Card.css";

const Card = ({ svg, title, text }) => {
	return (
		<div className="card">
			<div className="svgcon">{svg}</div>
			<p>{title}</p>
			<p>{text}</p>

		</div>
	);
};

export default Card;
