import React from "react";
import img from "../img.png";
import "./Navbar.css";
import { useDispatch, useSelector } from "react-redux";
import { FaShoppingCart, FaUserCircle } from "react-icons/fa";
import {
	incremented,
	decrement,
	selectValue,
} from "../features/counter/counterSlice";
import { logout, selectUser } from "../features/counter/userSlice";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { Link } from "react-router-dom";
import { selectCartItems } from "../features/counter/cartSlice";

const Navbar = ({ hamburger, setHamburger }) => {
	const dispatch = useDispatch();
	const value = useSelector(selectValue);
	const user = useSelector(selectUser);
	const cart = useSelector(selectCartItems);

	const quantity = useSelector((state) => state.cart.quantity);

	const logOut = () => {
		dispatch(logout());
		signOut(auth);
	};

	const handleClickTrue = () => {
		if (value) {
			dispatch(decrement());
		} else {
			dispatch(incremented());
		}
		console.log(value);
	};

	return (
		<div>
			<div className="navbar">
				<div className="navbar__image">
					<img className="img" src={img} alt="img" />
				</div>
				<div className={"hamburger"} onClick={() => setHamburger(!hamburger)}>
					<span className={!hamburger ? "ham a" : "ham a close"}></span>
					<span className={!hamburger ? "ham b" : "ham b close"}></span>
					<span className={!hamburger ? "ham c" : "ham c close"}></span>
				</div>
				<div className="navbar__navItems">
					<Link to={"/"}>
						<div className="navbar__item">Home</div>
					</Link>
					<Link to={"/about"}>
						<div className="navbar__item">About</div>
					</Link>
					<Link to={"/products"}>
						<div className="navbar__item">Products</div>
					</Link>
					{/* <Link to="/checkout">
						<div className="navbar__item">Checkout</div>
					</Link> */}
				</div>
				<div className="navbar__aside">
					<Link to={"/cart"}>
						<div className="navbar__cart">
							<div className="cc">{quantity}</div>
							<h3>Cart</h3>
							<FaShoppingCart className="car" />
						</div>
					</Link>

					<div
						className="log"
						onClick={() => {
							handleClickTrue();
						}}
					>
						{/* <h3></h3> */}
						<FaUserCircle className="user" />
					</div>
				</div>
			</div>
			<div className={!hamburger ? "sidenav" : "on"}>
				<div className="sidee">
					<p className="email side">You're logged in </p>
					{/* <p className="name side"></p> */}
				</div>
				<div className="sidenavoff">
					<Link to={"/"} onClick={() => setHamburger(!hamburger)}>
						<div className="navbar__item">Home</div>
					</Link>
					<Link to={"/about"} onClick={() => setHamburger(!hamburger)}>
						<div className="navbar__item">About</div>
					</Link>
					<Link to={"/products"} onClick={() => setHamburger(!hamburger)}>
						<div className="navbar__item">Products</div>
					</Link>
					{/* <Link to="/checkout" onClick={() => setHamburger(!hamburger)}>
							<div className="navbar__item">Checkout</div>
						</Link> */}
				</div>
				<Link to="/cart" onClick={() => setHamburger(!hamburger)}>
					<div className="navbar__cart">
						<div className="ccc">{quantity}</div>
						<h3>Cart</h3>
						<FaShoppingCart className="car" />
					</div>
				</Link>

				<button className="button side" onClick={logOut}>
					Logout
				</button>
			</div>

			<div className={value ? "opts" : "opt off"}>
				<div className="namecon">
					<p className="email">You're logged in</p>
					<p className="name">{user.name}</p>
				</div>
				<button className="button" onClick={logOut}>
					Logout
				</button>
			</div>
		</div>
	);
};

// {state ? "opt" : "opt off"}

export default Navbar;
