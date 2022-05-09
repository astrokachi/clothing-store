import React, { useEffect, useState } from "react";
import "./App.css";
import Home from "./Home";
import Navbar from "./components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { decrement, selectValue } from "./features/counter/counterSlice";
import { auth, db } from "./firebase";
import { login, logout, selectUser } from "./features/counter/userSlice";
import Signup from "./Signup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./About";
import { collection, getDocs } from "firebase/firestore";
import Products from "./Products";
import Product from "./Product";
import Cart from "./Cart";

function App() {
	const [name, setName] = useState("");
	const value = useSelector(selectValue);
	const dispatch = useDispatch();
	const user = useSelector(selectUser);
	const [hamburger, setHamburger] = useState(false);
	const [products, setProducts] = useState([]);
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(false);
	const [product, setProduct] = useState({});

	useEffect(() => {
		getProducts();
	}, []);

	useEffect(() => {
		console.log(products);
	}, [products]);



	function getProducts() {
		const colRef = collection(db, "products");
		getDocs(colRef)
			.then((res) => {
				const prods = res.docs.map((doc) => ({
					data: doc.data(),
					id: doc.id,
				}));
				setProducts(prods);
				setLoading(true);
				setData(prods);
			})
			.catch((err) => {
				console.log(err.message);
			});
	}

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
	}, [dispatch, name]);

	const handleClickFalse = () => {
		if (value) {
			console.log(value);
			dispatch(decrement());
		}
	};

	const appham = () => {
		if (hamburger) {
			setHamburger(false);
		}
	};

	return (
		<div>
			<Router>
				{!user ? (
					<Signup name={name} setName={setName} />
				) : (
					<div className="app">
						<Navbar hamburger={hamburger} setHamburger={setHamburger} />
						<div
							className="app__con"
							onClick={() => {
								handleClickFalse();
								appham();
							}}
						>
							<Routes>
								<Route path="/" element={<Home products={products} setProduct={setProduct} />} />
								<Route path="/about" element={<About />} />
								<Route
									path="/products"
									element={
										<Products
											products={data}
											setProducts={setData}
											data={products}
											setProduct={setProduct}
										/>
									}
								/>
								{product.data && (
									<Route
										path={`/products/product`}
										element={
											<Product product={product} setProduct={setProduct} />
										}
									/>
								)}
								<Route path="/cart" element={<Cart />} />
								{/* <Route path="/checkout" element={<checkOut />} /> */}
							</Routes>
						</div>
						<div className="bottom">
							<p className="bottom__text">
								©<span className="bottom__store"> Welcome store.</span> All
								rights reserved.
							</p>
						</div>
					</div>
				)}
			</Router>
		</div>
	);
}

export default App;
