import React, { useEffect, useState } from "react";
import CardImg from "./components/CardImg";
import "./Products.css";

const Products = ({ products, data, setProducts }) => {
	const [active, setActive] = useState("All");
	const [sort, setSort] = useState("lowest")
	const [search, setSearch] = useState("")


	const handleSearch = () => {
		const filtered = data?.filter(product => product.data.name.toLowerCase().includes(search))
		// setProducts(filtered)
	}

	return (
		<div className="products">
			<div className="products__sidepanel">
				<div>
					<input value={search} onChange={(e) => setSearch(e.target.value)} onInput={handleSearch} className="products__search" placeholder="search" />
				</div>
				<div className="products__categories">
					<div className="products__header">
						<h2>Category</h2>
					</div>
					<div className="products__category">
						<h4 className={`products__text ${active === "All" ? "active" : "" }`} onClick={() => setActive("All")}>All</h4>
						<h4 className={`products__text ${active === "Office" ? "active" : "" }`} onClick={() => setActive("Office")}>Office</h4>
						<h4 className={`products__text ${active === "Living Room" ? "active" : "" }`} onClick={() => setActive("Living Room")}>Living Room</h4>
						<h4 className={`products__text ${active === "Kitchen" ? "active" : "" }`} onClick={() => setActive("Kitchen")}>Kitchen</h4>
						<h4 className={`products__text ${active === "Bedroom" ? "active" : "" }`} onClick={() => setActive("Bedroom")}>Bedroom</h4>
						<h4 className={`products__text ${active === "Dining" ? "active" : "" }`} onClick={() => setActive("Dining")}>Dining</h4>
						<h4 className={`products__text ${active === "Kids" ? "active" : "" }`} onClick={() => setActive("Kids")}>Kids</h4>
					</div>
				</div>
			</div>

			<div className="products__cards">
				<div className="products__header">
					<h3 className="products__headtext">{products.length} products found</h3>
					<div className="products--line" />
					<div className="products__sortcon">
						<h2 className="products__sorttext">Sort by</h2>
						<h2 className="products__sort">
							{/* <label for="price">Choose an order</label> */}
							<select name="price" value={sort} onChange={(e) => setSort(e.target.value)}>
								<option value={"lowest"} >Price (Lowest)</option>
								<option value={"highest"} >Price (Highest)</option>
								<option value={"A-Z"} >Name (A - Z) </option>
								<option value={"Z-A"} >Name (Z - A) </option>
							</select>
						</h2>
					</div>
				</div>
				<div className="product__con">
				{products ? products.map((product) => {
					return (
						<div key={product.id} className="product">
							<div className="products__cardCon">
								<CardImg product={product}/>
							</div>
						</div>
					);
				}) : ""}
				</div>
			</div>

		</div>
	);
};

export default Products;
