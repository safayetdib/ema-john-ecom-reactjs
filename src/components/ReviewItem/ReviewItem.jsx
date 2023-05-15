import React from 'react';
import './ReviewItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const ReviewItem = ({ product, handleRemoveFromCart }) => {
	const { _id, img, name, price, quantity, shipping } = product;

	return (
		<div className="review-item">
			<div className="item-details">
				<img src={img} alt="" />
				<div>
					<h4>{name}</h4>
					<p>
						Price: <span className="orange-text">${price}</span>
					</p>
					<p>
						Order Quantity: <span className="orange-text">{quantity}</span>
					</p>
				</div>
			</div>
			<button onClick={() => handleRemoveFromCart(_id)}>
				<FontAwesomeIcon icon={faTrashAlt} />
			</button>
		</div>
	);
};

export default ReviewItem;
