import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

const Login = () => {
	return (
		<div className="form-container">
			<h2 className="form-title">Login</h2>
			<form>
				<div className="form-control">
					<label htmlFor="">Email</label>
					<input type="email" name="email" id="email" required />
				</div>
				<div className="form-control">
					<label htmlFor="">Password</label>
					<input type="password" name="password" id="password" required />
				</div>

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
