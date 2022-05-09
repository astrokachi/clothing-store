import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectCartItems } from "../features/counter/cartSlice";
import "./Sub.css";

const Sub = () => {
	const items = useSelector(selectCartItems);
	const total = [];
	const [num, setNum] = useState(0);

	useEffect(() => {
		calcTotal();
	}, []);

	const calcTotal = () => {
		let tot;
		items.map((item) => {
			if (item.data.price.includes(",")) {
				const nums = item.data.price.split("$");
				const num = nums[1];
				const onums = num.split(",");
				const onum = +(onums[0] + onums[1]);
				setNum(onum);
			} else {
				const nums = item.data.price.split("$");
				const num = +nums[1];
				setNum(num);
			}
			total.push(num * item.quantity);
		});
		console.log("total", total);
	};

	return (
		<div className="sub">
			<div className="sub__con">
				<div className="sub__first">
					<h2 className="first__a">Subtotal</h2>
					<h2 className="first__b">{total}</h2>
				</div>
				<div className="sub__second">
					<h2 className="second__a">Shipping fee</h2>
					<h2 className="second__b">$24</h2>
				</div>
				<div className="cart--line" />
				<div className="sub__third">
					<h2 className="third__a">Order total</h2>
					<h2 className="third__b">{total + 24}</h2>
				</div>
				<button className="feat__button sub__button">
					PROCEED TO CHECKOUT
				</button>
			</div>
		</div>
	);
};

export default Sub;
