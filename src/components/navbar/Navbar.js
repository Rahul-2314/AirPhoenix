import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.jpeg";
import "./navbar.css";

const Navbar = (props) => {
	const [showMenu, setShowMenu] = useState(false);

	const toggleMenu = () => {
		setShowMenu(!showMenu);
	};

	return (
		<nav className="navbar">
			<div className="container-fluid">
				<Link to="/" className="navbar-brand">
					<img src={logo} alt="logo" />
				</Link>
				<button
					className={`toggle-button ${showMenu ? "open" : ""}`}
					onClick={toggleMenu}
				>
					<span className="toggle-icon">
						{showMenu ? <>&#10005;</> : <>&#9776;</>}
					</span>
				</button>
				<div className={`navbar-collapse ${showMenu ? "show" : ""}`}>
					<ul className="navbar-nav">
						<li className="nav-item">
							<Link to="/" className="nav-link" onClick={toggleMenu}>
								Home
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/theCohort" className="nav-link" onClick={toggleMenu}>
								The Cohort
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/freeContent" className="nav-link" onClick={toggleMenu}>
								Free Content
							</Link>
						</li>
						<li className="nav-item">
							<Link to="contact" className="nav-link" onClick={toggleMenu}>
								Contact
							</Link>
						</li>
					</ul>
					<div className="auth-buttons">
						<Link to="/signIn">
							<button className="sign-in">
								{props.logIn ? "User" : "Sign In"}
							</button>
						</Link>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
