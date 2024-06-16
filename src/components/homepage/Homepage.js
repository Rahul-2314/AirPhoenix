import React,{useEffect} from "react";
import "./homepage.css";
import img1 from "../../assets/illustration-people.png";
import { Link } from "react-router-dom";

export default function Homepage() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div className="homepage">
			<h5>We Are</h5>
			<h2>The #1 Global Community of Entrepreneurial University Students.</h2>
			<h3>
				Start or join a startup among a group of ambitious future leaders.
			</h3>
			<div className="cohort">
				<Link to="/theCohort">
					<button className="cohortpage">Learn About Cohort</button>
				</Link>
			</div>
			<div className="image1">
				<img src={img1} alt="the cohort" />
			</div>
			<p></p>
		</div>
	);
}
