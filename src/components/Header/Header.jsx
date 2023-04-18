import React, { useContext, useState } from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';
import AuthProvider, { AuthContext } from '../providers/AuthProvider';

const Header = () => {
	const { user, logout } = useContext(AuthContext);

	const [showMenu, setShowMenu] = useState(false);

	const toggleMenu = () => {
		setShowMenu(!showMenu);
	};

	const handleLogout = () => {
		logout()
			.then((result) => {})
			.catch((error) => {
				console.log(error.message);
			});
	};

	return (
		<header className="navbar">
			<nav className="navbar-container">
				<Link className="navbar-logo" to="/">
					<img src={logo} alt="logo" />
				</Link>
				{user && <div className="user-info">Welcome {user.email}!</div>}
				<div className={showMenu ? 'navbar-menu active' : 'navbar-menu'}>
					<Link className="navbar-menu-item" to="/">
						Shop
					</Link>
					<Link className="navbar-menu-item" to="/orders">
						Orders
					</Link>
					<Link className="navbar-menu-item" to="/inventory">
						Manage Inventory
					</Link>

					{!user ? (
						<>
							<Link className="navbar-menu-item" to="/login">
								Login
							</Link>
							<Link className="navbar-menu-item" to="/signup">
								Sign Up
							</Link>
						</>
					) : (
						<button onClick={handleLogout} className="navbar-menu-item">
							Logout
						</button>
					)}
				</div>

				<div className="navbar-toggle" onClick={toggleMenu}>
					<span className="navbar-toggle-icon">
						{!showMenu ? (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth="1.5"
								stroke="currentColor"
								className="w-6 h-6">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
								/>
							</svg>
						) : (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth="1.5"
								stroke="currentColor"
								className="w-6 h-6">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M6 18L18 6M6 6l12 12"
								/>
							</svg>
						)}
					</span>
				</div>
			</nav>
		</header>
	);
};

export default Header;
