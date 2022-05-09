import React, { useEffect, useState } from "react";
import "./Cardcomp.css";

import { useDispatch } from "react-redux";
import { MdDelete } from "react-icons/md";
import { removeFromCart } from "../features/counter/cartSlice";

const Cardcomp = ({ item }) => {
	const quantity = item.quantity;
	const dispatch = useDispatch();
	const [num, setNum] = useState(0);

	useEffect(() => {
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
	}, [item]);

	useEffect(() => {
		console.log(num)
	}, [num])

	const handleRemove = () => {
		dispatch(removeFromCart(item));
	};

	return (
		<div className="cardcomp">
			<div className="cardcomp__con">
				<div className="cardcomp__item">
					<div
						className="cardcomp__image"
						style={{
							background: `url(${item.data.image})`,
							backgroundSize: "contain",
							backgroundRepeat: "no-repeat !important",
							backgroundPosition: "center",
						}}
					/>
					<div className="cardcomp__name">
						{item.data.name}
						<div className="cardcomp__smprice">{item.data.price}</div>
					</div>
				</div>
				<div className="cardcomp__price">{item.data.price}</div>
				<div className="product__count cardcomp__quantity ">
					{/* <button className="minus">-</button> */}
					{quantity}
					{/* <button className="plus">+</button> */}
				</div>
				<div className="cardcomp__Subtotal">${+Number.parseFloat(num * quantity).toFixed(2)}</div>
				<MdDelete className="cardcomp__trash" onClick={handleRemove} />
			</div>
		</div>
	);
};

export default Cardcomp;
