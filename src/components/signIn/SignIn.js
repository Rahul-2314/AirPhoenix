import React from "react";
import "./signIn.css";
import logo from "../../assets/signIn.png";
import { Link } from "react-router-dom";

const SignIn = () => {
	return (
		<div className="signin-container">
			<div className="signin-box">
				<img src={logo} alt="Logo" className="logo" />
				<form>
					<div className="form-group">
						<label>Email</label>
						<input type="email" placeholder="Your email" required />
					</div>
					<div className="form-group">
						<label>Password</label>
						<input type="password" placeholder="Password" required />
					</div>
					<button type="submit" className="signin-button">
						<span className="submit_text">Sign In</span>
					</button>
				</form>
				<div className="signin-footer">
					<Link to="/Reset">
						{" "}
						<span>Reset password</span>
					</Link>
					<p>
						don't have an account?&nbsp;
						<Link to="/SignUp">
							<span>Sign-Up</span>
						</Link>
					</p>
				</div>
			</div>
		</div>
	);
};

export default SignIn;
