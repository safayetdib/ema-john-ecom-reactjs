import React from 'react';
import './Cart.css';

const Cart = (props) => {
	const { cart } = props;

	let quantity = 0;
	let totalPrice = 0;
	let totalShipping = 0;

	for (const product of cart) {
		product.quantity = product.quantity || 1;

		quantity = quantity + product.quantity;
		totalPrice = totalPrice + product.price * product.quantity;
		totalShipping = totalShipping + product.shipping;
	}

	const tax = (totalPrice * 7) / 100;

	const grandTotal = totalPrice + totalShipping + tax;

	return (
		<div className="cart">
			<h1 className="cart-title">Order Summery</h1>
			<div className="cart-summary">
				<h3>Selected Items: {quantity}</h3>
				<h3>Total Price: ${totalPrice}</h3>
				<h3>Total Shipping Charges: ${totalShipping}</h3>
				<h3>Tax: ${tax}</h3>
				<h2>Grand Total: ${grandTotal}</h2>
			</div>
			<div className="cart-buttons">
				<button className="clear-cart-btn">Clear Cart</button>
				<button className="review-order-btn">Review Order</button>
			</div>
		</div>
	);
};

export default Cart;
