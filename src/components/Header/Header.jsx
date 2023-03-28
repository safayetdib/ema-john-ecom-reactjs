import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';

const Header = () => {
	return (
		<header className="header">
			<nav>
				<img src={logo} alt="logo" />
				<div>
					<a href="/order">Order</a>
					<a href="/review">Order Review</a>
					<a href="/inventory">Manage Inventory</a>
					<a href="/login">Login</a>
				</div>
			</nav>
		</header>
	);
};

export default Header;
