import React, { useContext, useState } from 'react';
import './SignUp.css';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const SignUp = () => {
	const [error, setError] = useState('');
	const { createUser } = useContext(AuthContext);

	const handleFormSubmit = (e) => {
		e.preventDefault();

		const form = e.target;
		const email = form.email.value;
		const password = form.password.value;
		const confirmPassword = form.confirmPassword.value;

		console.log(email, password, confirmPassword);

		setError('');

		if (password !== confirmPassword) {
			setError('You password did not match');
			return;
		} else if (password.length < 6) {
			setError('Your password must be 6 characters long');
			return;
		}

		createUser(email, password)
			.then((result) => {
				const loggedUser = result.user;
				console.log(loggedUser);

				form.reset();
			})
			.catch((error) => {
				setError(error.message);
			});
	};

	return (
		<div className="form-container">
			<h2 className="form-title">Sign Up</h2>
			<form onSubmit={handleFormSubmit}>
				<div className="form-control">
					<label htmlFor="email">Email</label>
					<input type="email" name="email" id="email" required />
				</div>
				<div className="form-control">
					<label htmlFor="password">Password</label>
					<input type="password" name="password" id="password" required />
				</div>
				<div className="form-control">
					<label htmlFor="confirmPassword">Confirm Password</label>
					<input
						type="password"
						name="confirmPassword"
						id="confirmPassword"
						required
					/>
				</div>

				{error && <p className="error-text">&#9888; {error}</p>}

				<button className="login-btn">Submit</button>

				<div className="new-account">
					<p>Already have an account?</p>
					<Link to="/login">Login</Link>
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

export default SignUp;
