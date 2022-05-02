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
import { selectUser, selectUsername } from "../features/counter/userSlice";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import Fade from "react-reveal/Fade";

const Navbar = ({ hamburger, setHamburger }) => {
	const dispatch = useDispatch();
	const value = useSelector(selectValue);
	const user = useSelector(selectUser);
	const username = useSelector(selectUsername);

	const logOut = () => {
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
					<div className="navbar__item">Home</div>
					<div className="navbar__item">About</div>
					<div className="navbar__item">Products</div>
					<div className="navbar__item">Checkout</div>
				</div>
				<div className="navbar__aside">
					<div className="cart">
						<h3>Cart</h3>
						<FaShoppingCart className="car" />
					</div>

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
			<Fade right when={hamburger}>
				<div className={!hamburger ? "sidenav" : "on"}>
					<div className="sidee">
						<p className="email side">You're logged in as </p>
						<p className="name side"> {username}</p>
					</div>
					<div className="sidenavoff">
						<div className="navbar__item">Home</div>
						<div className="navbar__item">About</div>
						<div className="navbar__item">Products</div>
						<div className="navbar__item">Checkout</div>
					</div>

					<div className="cart">
						<h3>Cart</h3>
						<FaShoppingCart className="car" />
					</div>

					<button className="button side" onClick={logOut}>
						Logout
					</button>
				</div>
			</Fade>
			<Fade when={value}>
				<div className={value ? "opts" : "opt off"}>
					<div className="namecon">
						<p className="email">You're logged in</p>
						<p className="name">{username}</p>
					</div>
					<button className="button" onClick={logOut}>
						Logout
					</button>
				</div>
			</Fade>
		</div>
	);
};

// {state ? "opt" : "opt off"}

export default Navbar;
