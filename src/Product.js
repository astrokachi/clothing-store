import React from "react";
import "./Product.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { increase, decrease, selectCount } from "./features/counter/countSlice";


const Product = ({ product }) => {

  const dispatch = useDispatch()
  const count = useSelector(selectCount)

  const handleIncrease = () => {
    dispatch(increase())
  }

  const handleDecrease = () => {
    dispatch(decrease())
  }


	return (
		<div className="product">
			<Link to="/products">
				<button className="feat__button product__back">Back to products</button>
			</Link>
			<div className="product__flex">
				<div className="product--image" />
				<div className="product__contentBlock">
					<h1 className="product__header">{product.data.name}</h1>
					<h3 className="product__price">{product.data.price}</h3>
					<p className="product__desc">
						Cloud bread VHS hell of banjo bicycle rights jianbing umami
						mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher
						waistcoat, authentic chillwave trust fund. Viral typewriter
						fingerstache pinterest pork belly narwhal. Schlitz venmo everyday
						carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag
						kinfolk microdosing gochujang live-edge
					</p>
          <h3 className="product__avail">Available: <span className="product__stock">In stock</span></h3>
          <div className="products--line" />
          <div className="product__count">
            <button className="minus" onClick={handleDecrease}>-</button>
            <h2 className="product__number">{count}</h2>
            <button className="plus" onClick={handleIncrease}>+</button>
          </div>
          <button className="feat__button product__cart">Add to Cart</button>
				</div>
			</div>
		</div>
	);
};

export default Product;
