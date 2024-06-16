import React,{useEffect} from 'react'
import "./about.css";

export default function About() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	
  return (
		<div>
			<div className="heading_about">
				<h5>
					What <span className="mark">?</span>
				</h5>
				<h2>We Do</h2>
				<p>
					🌸We rally university students behind a single mission: to do
					something that &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; matters.
					<br></br>
					🌸Students leverage our community and resources to work with startups,
					or launch &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ventures/projects of their
					own.
					<br></br>🌸And it all starts with our cohort: A 4 week program that
					leads to Fellowship with &nbsp;&nbsp;&nbsp;&nbsp; Catalyst.
					<br></br>🌸This community offers a home to students who are
					disenchanted by "traditional"
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;paths, and who are interested in
					building things.<br></br>🌸By opening the door to entrepreneurship, we
					believe we can 10x a student's &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; future income, skills, and wisdom. They
					just have to do the work.
				</p>
			</div>
		</div>
	);
}
