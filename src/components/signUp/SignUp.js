import React, { useEffect } from "react";
import "./signUp.css";
import logo from "../../assets/signUp.png";
import { Link } from "react-router-dom";

const SignUp = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div className="SignUp-container">
			<div className="SignUp-box">
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
					<div className="form-group">
						<label>Re-Enter Password</label>
						<input type="password" placeholder="Re-Enter Password" required />
					</div>
					<button type="submit" className="SignUp-button">
						<span className="submit_text">Sign Up</span>
					</button>
				</form>
				<div className="SignUp-footer">
					<p>
						already a member?&nbsp;
						<Link to="/SignIn">
							<span>Sign-In</span>
						</Link>
					</p>
				</div>
			</div>
		</div>
	);
};

export default SignUp;
