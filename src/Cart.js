import React, { useEffect } from "react";
import "./Cart.css";
import Cardcomp from "./components/Cardcomp";

import { useSelector } from "react-redux";
import Sub from "./components/Sub";
import { Link } from "react-router-dom";

const Cart = () => {
	const cart = useSelector((state) => state.cart);

	return (
		<div className="cart">
			{cart.items[0] ? (
				<>
					<div className="cart__header">
						<h2>Item</h2>
						<h2>Price</h2>
						<h2>Quantity</h2>
						<h2>Subtotal</h2>
						<div className="width"></div>
					</div>
					<div className="cart--line a" />
					{cart.items.map((item, index) => {
						return <Cardcomp item={item} key={index} />;
					})}
					<div className="cart--line" />
					<Sub />
				</>
			) : (
				<div className="fill">
					<h2 className="empty">YOUR CART IS EMPTY</h2>
					<Link to="/products">
						<button className="feat__button">Fill It</button>
					</Link>
				</div>
			)}
		</div>
	);
};

export default Cart;
