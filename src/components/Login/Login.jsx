import React, { useContext, useState } from 'react';
import './Login.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const Login = () => {
	const [error, setError] = useState('');
	const [show, setShow] = useState(false);

	const { signIn } = useContext(AuthContext);

	const navigate = useNavigate();
	const location = useLocation();

	const from = location.state?.from?.pathname || '/';

	const handleLogin = (e) => {
		e.preventDefault();
		const form = e.target;
		const email = form.email.value;
		const password = form.password.value;

		console.log(email, password);

		setError('');

		if (password.length < 6) {
			setError('Your password must be 6 characters long');
			return;
		}

		signIn(email, password)
			.then((result) => {
				const loggedUser = result.user;
				console.log(loggedUser);

				form.reset();

				navigate(from, { replace: true });
			})
			.catch((error) => {
				setError(error.message);
			});
	};

	return (
		<div className="form-container">
			<h2 className="form-title">Login</h2>
			<form onSubmit={handleLogin}>
				<div className="form-control">
					<label htmlFor="email">Email</label>
					<input type="email" name="email" id="email" required />
				</div>
				<div className="form-control">
					<label htmlFor="password">Password</label>
					<input
						className="password-field"
						type={show ? 'text' : 'password'}
						name="password"
						id="password"
						required
					/>
					<p className="show-password" onClick={() => setShow(!show)}>
						<small>{show ? 'Hide' : 'Show'}</small>
					</p>
				</div>

				{error && <p className="error-text">&#9888; {error}</p>}

				<button className="login-btn">Login</button>

				<div className="new-account">
					<p>New to Ema-John?</p>
					<Link to="/signup">Create New Account</Link>
				</div>

				<div className="or-line">
					<hr />
					<p>or</p>
					<hr />
				</div>

				<div>
					<button className="google-btn">
						<img src="/assets/google.svg" alt="" />
						Continue with Google
					</button>
				</div>
			</form>
		</div>
	);
};

export default Login;
