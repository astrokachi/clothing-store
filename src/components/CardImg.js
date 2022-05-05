import React from "react";
import "./CardImg.css";
import { BiSearch } from "react-icons/bi";

const CardImg = ({ product }) => {
	return (
		<div className="cardImg">
			<div
				className="cardImg__img"
				style={{
					background: `url(${product.data.image})`,
					backgroundSize: "cover",
					backgroundRepeat: "no-repeat",
					backgroundPosition: "center"
				}}
			>
				<BiSearch className="cardImg__search" />
				<div className="cardImg__cover"></div>
			</div>
			<div className="cardImg__text">
				<p className="cardImg__title">{product.data.name}</p>
				<p className="cardImg__pricing">{product.data.price}</p>
			</div>
		</div>
	);
};

export default CardImg;
