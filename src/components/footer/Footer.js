import React,{useEffect} from "react";
import { Link } from "react-router-dom";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaAngellist } from "react-icons/fa";
import logo from "../../assets/logo.jpeg";
import "./footer.css";

const Footer = ( prop) => {
	let getYear = () => {
		let currentYear = new Date().getFullYear();
		return currentYear;
	};
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<footer className="footer">
			<Link to="/" className="footer_logo">
				<img src={logo} alt="logo" />
			</Link>
			<ul className="permalinks">
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/about">About</Link>
				</li>
				<li>
					<Link to="/theCohort">The Cohort</Link>
				</li>
				<li>
					<Link to="/freeContent">Free Content</Link>
				</li>
				<li>
					<Link to="/contact">Contact</Link>
				</li>
			</ul>
			<div className="footer__socials">
				<Link
					to="https://www.linkedin.com/in/rahul-chowdhury-45b61828b/"
					target="_blank"
					rel="noreferrer"
				>
					<BsLinkedin />
				</Link>
				<Link
					to="https://github.com/Rahul-2314"
					target="_blank"
					rel="noreferrer"
				>
					<FaGithub />
				</Link>
				<Link
					to="https://stack.angellist.com/company/rechargeroute"
					target="_blank"
					rel="noreferrer"
				>
					<FaAngellist />
				</Link>
			</div>
			<div className="footer__copyright">
				<small>
					Copyright &copy; {getYear()}, 🐥AirPhoenix. All rights reserved.
				</small>
			</div>
		</footer>
	);
};

export default Footer;
