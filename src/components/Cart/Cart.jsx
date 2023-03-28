import React from 'react';
import './Cart.css';

const Cart = () => {
	return (
		<div className="cart">
			<h1 className="cart-title">Order Summery</h1>
			<div className="cart-summary">
				<h3>Selected Items: 6</h3>
				<h3>Total Price: $1140</h3>
				<h3>Total Shipping Charges: $5</h3>
				<h3>Tax: $114</h3>
				<h2>Grand Total: $1559</h2>
			</div>
			<div className="cart-buttons">
				<button className="clear-cart-btn">Clear Cart</button>
				<button className="review-order-btn">Review Order</button>
			</div>
		</div>
	);
};

export default Cart;
