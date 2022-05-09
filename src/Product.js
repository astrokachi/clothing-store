import React, { useState } from "react";
import "./Product.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
	addToCart,
	replace,
	selectCartItems,
	setMutated,
} from "./features/counter/cartSlice";

const Product = ({ product, setProduct }) => {
	const dispatch = useDispatch();
	const [quantity, setQuantity] = useState(1);
	const items = useSelector(selectCartItems);
	

	const addItemToCart = () => {
		const check = items.filter((item) =>
			item.data.name.includes(product.data.name)
		);

		const index = items.indexOf(check[0]);
		console.log("i", index);

		// console.log(index);
		if (!check[0] && !product?.data.price.includes(",")) {
			const nums = product.data.price.split("$");
			const num = +Number.parseFloat(+nums[1]).toFixed(2);
			dispatch(addToCart({ ...product, quantity, price: +Number.parseFloat(num * quantity).toFixed(2) }));
		} else if (!check[0] && product?.data.price.includes(",")) {
			const nums = product.data.price.split("$");
			const num = nums[1];
			const onums = num.split(",");
			const onum = +(onums[0] + onums[1]);
			dispatch(addToCart({ ...product, quantity, price: +Number.parseFloat(onum * quantity).toFixed(2) }));
		} else if (check[0] !== null && index > -1) {
			const newob = { ...check[0], quantity: check[0].quantity + quantity };
			console.log(newob);
			dispatch(setMutated({ ...newob }));
			dispatch(replace(index));
		}
	};

	const handleIncrease = () => {
		setQuantity(quantity + 1);
	};

	const handleDecrease = () => {
		quantity > 1 && setQuantity(quantity - 1);
	};

	return (
		<div className="product">
			<Link to="/products">
				<button className="feat__button product__back">Back to products</button>
			</Link>
			<div className="product__flex">
				<div
					className="product--image"
					style={{
						background: `url(${product.data?.image})`,
						backgroundSize: "cover",
						backgroundRepeat: "no-repeat",
						backgroundPosition: "center",
					}}
				/>
				<div className="product__contentBlock">
					<h1 className="product__header">{product.data?.name}</h1>
					<h3 className="product__price">{product.data?.price}</h3>
					<p className="product__desc">
						Cloud bread VHS hell of banjo bicycle rights jianbing umami
						mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher
						waistcoat, authentic chillwave trust fund. Viral typewriter
						fingerstache pinterest pork belly narwhal. Schlitz venmo everyday
						carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag
						kinfolk microdosing gochujang live-edge
					</p>
					<h3 className="product__avail">
						Available: <span className="product__stock">In stock</span>
					</h3>
					<div className="products--line" />
					<div className="product__count">
						<button className="minus" onClick={handleDecrease}>
							-
						</button>
						<h2 className="product__number">{quantity}</h2>
						<button className="plus" onClick={handleIncrease}>
							+
						</button>
					</div>
					<button
						className="feat__button product__cart"
						onClick={addItemToCart}
					>
						Add to Cart
					</button>
				</div>
			</div>
		</div>
	);
};

export default Product;
