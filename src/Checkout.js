import React from "react";
import "./Checkout.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Checkout = () => {
	const cart = useSelector((state) => state.cart);

	return (
		<div>
			{cart.items[0] ? (
				<div className="checkout">
					<div className="checkout__header"></div>
					<div className="checkout__carddeets"></div>
					<div className="checkout__button"></div>
				</div>
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

export default Checkout;
