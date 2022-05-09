import React from "react";
import { useSelector } from "react-redux";
import { selectTotal } from "../features/counter/cartSlice";
import "./Sub.css";

const Sub = () => {
	// const items = useSelector(selectCartItems);
	// const total = [];
	// const [num, setNum] = useState(0);
	const total = useSelector(selectTotal)

	console.log(total)

	return (
		<div className="sub">
			<div className="sub__con">
				<div className="sub__first">
					<h2 className="first__a">Subtotal</h2>
					<h2 className="first__b">${+Number.parseFloat(total).toFixed(2)}</h2>
				</div>
				<div className="sub__second">
					<h2 className="second__a">Shipping fee</h2>
					<h2 className="second__b">$24</h2>
				</div>
				<div className="cart--line" />
				<div className="sub__third">
					<h2 className="third__a">Order total</h2>
					<h2 className="third__b">${+Number.parseFloat(total + 24).toFixed(2)}</h2>
				</div>
				<button className="feat__button sub__button">
					PROCEED TO CHECKOUT
				</button>
			</div>
		</div>
	);
};

export default Sub;
