import React from "react";
import "./CardImg.css";
import { BiSearch } from "react-icons/bi";

const CardImg = () => {
	return (
		<div className="cardImg">
			<div className="cardImg__img">
				<BiSearch className="cardImg__search" />
				<div className="cardImg__cover"></div>
			</div>
			<div className="cardImg__text">
				<p className="cardImg__title">Entertainment center</p>
				<p className="cardImg__pricing">$455.99</p>
			</div>
		</div>
	);
};

export default CardImg;
