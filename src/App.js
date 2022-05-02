import React, { useEffect, useState } from "react";
import "./App.css";
import Home from "./Home";
import Navbar from "./components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { decrement, selectValue } from "./features/counter/counterSlice";
import { auth } from "./firebase";
import { login, logout, selectUser } from "./features/counter/userSlice";
import Signup from "./Signup";

function App() {
	const [name, setName] = useState();
	const value = useSelector(selectValue);
	const dispatch = useDispatch();
	const user = useSelector(selectUser);
	const [hamburger, setHamburger] = useState(false);

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((userLogged) => {
			if (userLogged) {
				dispatch(
					login({
						uid: userLogged.uid,
						email: userLogged.email,
						name: name,
					})
				);
			} else {
				dispatch(logout());
			}
		});
		return unsubscribe;
	}, [dispatch]);

	const handleClickFalse = () => {
		console.log(value);
		dispatch(decrement());
	};

	return (
		<div>
			{!user ? (
				<Signup name={name} setName={setName} />
			) : (
				<div className="app">
					<Navbar hamburger={hamburger} setHamburger={setHamburger} />
					<div
						className="app__con"
						onClick={() => {
							handleClickFalse();
							setHamburger(false)
						}}
					>
						<Home />
					</div>
					<div className="bottom">
						<p className="bottom__text">
							©<span className="bottom__store"> Welcome store.</span> All rights
							reserved.
						</p>
					</div>
				</div>
			)}
		</div>
	);
}

export default App;
