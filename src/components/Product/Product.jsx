import React from 'react';
import './Product.css';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Product = (props) => {
	const { img, name, price, seller, ratings, quantity } = props.product;

	console.log(props.product);

	return (
		<div className="product-card">
			<img src={img} alt="Product Image" />
			<div className="product-info">
				<div>
					<h2>{name}</h2>
					<h3>Price: ${price}</h3>
				</div>
				<div>
					<h5>Manufacturer: {seller}</h5>
					<h5>Rating: {ratings} star</h5>
				</div>
			</div>
			<button
				className="btn-cart"
				onClick={() => props.handleAddToCart(props.product)}>
				Add to Cart{' '}
				<FontAwesomeIcon icon={faShoppingCart} style={{ marginLeft: '6px' }} />
			</button>
		</div>
	);
};

export default Product;
