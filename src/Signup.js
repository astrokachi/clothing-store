import React, { useState } from "react";
import "./Signup.css";
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "./firebase";

const Signup = () => {
	const [register, setRegister] = useState(null);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState(null);

	const createUser = async () => {
		try {
			await createUserWithEmailAndPassword(auth, email, password);
		} catch (error) {
			console.log(error);
			setError(error.message);
		}
	};

	const signin = async () => {
		try {
			await signInWithEmailAndPassword(auth, email, password);
		} catch (error) {
			console.log(error);
			setError(error.message);
		}
	};

	return (
		<>
			{error === "Firebase: Error (auth/network-request-failed)." ? (
				<p className="inter">Please check your internet connection.</p>
			) : (
				<>
					<></>
					{!register ? (
						<>
							<div className="signin">
								<div className="signin__con">
									<h1 className="signin__header">
										Sign up to register your account
									</h1>
									<p className="signin__signup">
										Already have an account?{" "}
										<span
											className="signup__button"
											onClick={() => setRegister(true)}
										>
											sign in
										</span>{" "}
									</p>
									{/* <form className="signin__form">
								<p className="signin__input">Name</p>
								<input
									value={name}
									className="sign__input"
									placeholder="Enter your Name"
									type={"email"}
									onChange={(e) => setName(e.target.value)}
								></input>
							</form> */}
									<form className="signin__form">
										<p className="signin__input">Email Address</p>
										<input
											value={email}
											className="sign__input"
											placeholder="Enter your email"
											type={"email"}
											onChange={(e) => setEmail(e.target.value)}
										></input>
									</form>
									<form className="signin__form">
										<p className="signin__input">Password</p>
										<input
											value={password}
											className="sign__input"
											type={"password"}
											onChange={(e) => setPassword(e.target.value)}
											placeholder="Enter your password"
										/>
									</form>
									{error === "Firebase: Error (auth/invalid-email)." && (
										<p className="err">Invalid username or password.</p>
									)}
									{error === "Firebase: Error (auth/email-already-in-use)." && (
										<p className="err">Email already in use.</p>
									)}
									<div className="sign__buttoncon">
										<button className="feat__button " onClick={createUser}>
											Sign Up
										</button>
									</div>
								</div>
							</div>
						</>
					) : (
						<div className="signin">
							<div className="signin__con">
								<h1 className="signin__header">Sign in to your account</h1>
								<p className="signin__signup">
									Don't have an account?{" "}
									<span
										className="signup__button"
										onClick={() => setRegister(false)}
									>
										sign up
									</span>{" "}
								</p>
								<form className="signin__form">
									<p className="signin__input">Email Address</p>
									<input
										value={email}
										className="sign__input"
										placeholder="Enter your email"
										type={"email"}
										onChange={(e) => setEmail(e.target.value)}
									/>
								</form>
								<form className="signin__form">
									<p className="signin__input">Password</p>
									<input
										placeholder="Enter your password"
										value={password}
										className="sign__input"
										type={"password"}
										onChange={(e) => setPassword(e.target.value)}
									/>
								</form>
								<div className="sign__buttoncon">
									<button className="feat__button " onClick={signin}>
										Sign In
									</button>
								</div>
							</div>
						</div>
					)}
				</>
			)}
		</>
	);
};

export default Signup;
