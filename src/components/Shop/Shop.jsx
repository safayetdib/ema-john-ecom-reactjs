import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import './Shop.css';
import {
	addToDb,
	deleteShoppingCart,
	getShoppingCart,
} from '../../utilities/fakedb';
import { Link, useLoaderData } from 'react-router-dom';

const Shop = () => {
	const [cart, setCart] = useState([]);
	const [products, setProducts] = useState([]);
	const { totalProducts } = useLoaderData();

	const [currentPage, setCurrentPage] = useState(0);
	const [itemsPerPage, setItemsPerPage] = useState(10);
	const totalPages = Math.ceil(totalProducts / itemsPerPage);

	// const pageNumbers = [];
	// for (let i = 1; i < totalPages; i++) {
	// 	pageNumbers.push(i);
	// }
	const pageNumbers = [...Array(totalPages).keys()];

	// useEffect(() => {
	// 	fetch('http://localhost:5000/products')
	// 		.then((res) => res.json())
	// 		.then((data) => setProducts(data));
	// }, []);

	useEffect(() => {
		fetch(
			`http://localhost:5000/products?page=${currentPage}&limit=${itemsPerPage}`
		)
			.then((res) => res.json())
			.then((data) => {
				setProducts(data);
			});
	}, [currentPage, itemsPerPage]);

	useEffect(() => {
		const storedCart = getShoppingCart();
		const ids = Object.keys(storedCart);

		fetch('http://localhost:5000/productsById', {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify(ids),
		})
			.then((res) => res.json())
			.then((cartProducts) => {
				const savedCart = [];
				// step 1 : get id
				for (const id in storedCart) {
					// step 2 : get product by using id
					const addedProduct = cartProducts.find(
						(product) => product._id === id
					);

					if (addedProduct) {
						// step 3 : get quantity of the product
						const quantity = storedCart[id];
						addedProduct.quantity = quantity;
						// step 4 : add the addedProduct to saved cart
						savedCart.push(addedProduct);
					}
				}
				// step 5 : set the cart
				setCart(savedCart);
			});
	}, []);

	const handleAddToCart = (product) => {
		let newCart = [];

		const exists = cart.find((pd) => pd._id === product._id);

		if (!exists) {
			product.quantity = 1;
			newCart = [...cart, product];
		} else {
			exists.quantity = exists.quantity + 1;
			const remaining = cart.filter((pd) => pd._id !== product._id);
			newCart = [...remaining, exists];
		}

		setCart(newCart);
		addToDb(product._id);
	};

	const handleClearCart = () => {
		setCart([]);
		deleteShoppingCart();
	};

	// content per page
	const options = [5, 10, 20];
	const handleSelectChange = (e) => {
		setItemsPerPage(parseInt(e.target.value));
		setCurrentPage(0);
	};

	return (
		<>
			<div className="shop-container">
				<div className="products-container">
					{products.map((product) => (
						<Product
							key={product._id}
							product={product}
							handleAddToCart={handleAddToCart}
						/>
					))}
				</div>
				<div className="cart-container">
					<Cart cart={cart} handleClearCart={handleClearCart}>
						<Link to="/orders">
							<button className="review-order-btn">Review Order</button>
						</Link>
					</Cart>
				</div>
			</div>

			<div className="pagination">
				<p>Current Page: {currentPage}</p>

				{pageNumbers.map((number) => (
					<button
						onClick={() => setCurrentPage(number)}
						key={number}
						className={currentPage === number ? 'selected' : ''}>
						{number}
					</button>
				))}

				<select value={itemsPerPage} onChange={handleSelectChange}>
					{options.map((option) => (
						<option key={option} value={option}>
							{option}
						</option>
					))}
				</select>
			</div>
		</>
	);
};

export default Shop;
