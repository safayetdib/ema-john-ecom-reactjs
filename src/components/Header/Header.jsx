import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<header className="header">
			<nav>
				<Link to="/">
					<img src={logo} alt="logo" />
				</Link>
				<div>
					<Link to="/">Shop</Link>
					<Link to="/orders">Orders</Link>
					<Link to="/inventory">Manage Inventory</Link>
					<Link to="/login">Login</Link>
				</div>
			</nav>
		</header>
	);
};

export default Header;
