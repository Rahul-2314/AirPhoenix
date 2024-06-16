import React,{useEffect} from "react";
import "./theCohort.css";

const TheCohort = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div className="the-cohort">
			<h5>Dive In</h5>
			<h2>The Cohort</h2>
			<section className="intro">
				<h2>
					Open the gates to a lifetime of more income, more impact, and more
					fulfilling work.
				</h2>
				<p className="intro_para">Apply to Cohort 4 by the Priority Deadline →</p>
			</section>

			<section className="what-is-cohort">
				<h2>What's a Cohort?</h2>
				<p>
					Those who follow our lessons come out of the program with a startup
					idea ready to work on, or with a job at a startup. Students become
					fellows by successfully completing the Cohort, and may remain in our
					close community indefinitely.
				</p>
			</section>

			<section className="success-stories">
				<h2>Some Success Stories</h2>
				<div className="stories">
					<div className="story">
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam assumenda reiciendis corporis laudantium impedit, placeat aperiam veritatis recusandae eum iusto voluptates possimus tenetur quas repudiandae illo? Recusandae sequi vero illum.
						</p>
						<p>XYZ - Cohort 1</p>
					</div>
				</div>
			</section>

			<section className="cohort-details">
				<h2>The Cohort Details</h2>
				<div className="weeks">
					<div className="week">
						<div className="card">
							<h3>Week 1</h3>
							<p>The Startup Eco-system</p>
						</div>
					</div>
					<div className="week">
						<div className="card">
							<h3>Week 2</h3>
							<p>Working With Startups</p>
						</div>
					</div>
					<div className="week">
						<div className="card">
							<h3>Week 3</h3>
							<p>Modern Startup Wisdom</p>
						</div>
					</div>
					<div className="week">
						<div className="card">
							<h3>Week 4</h3>
							<p>The Builder Mentality</p>
						</div>
					</div>
				</div>
			</section>

			<section className="pitch-competition">
				<h2>The Pitch Competition</h2>
				<p>
					Upon completion of this Cohort, students love the opportunity to pitch
					their startup idea in our Pitch Competition. Typically, students pitch
					an idea they began working on during the 4-week Cohort.
				</p>
			</section>

			<section className="team">
				<h2>Who runs it?</h2>
				<p>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error corrupti quod unde! Praesentium sequi quod iste a impedit explicabo cupiditate quae corporis culpa ut! Ratione delectus corrupti sunt id earum.
				</p>
				<p>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis quia nemo eius distinctio minus quo minima molestiae quae veniam eos, sequi dicta eveniet. Magni amet similique fugit molestias eum? Assumenda?
				</p>
			</section>

			<section className="finances">
				<h2>Finances</h2>
				<div className="tuition">
					<h3>Cohort Tuition</h3>
					<p>Details about tuition.</p>
				</div>
				<div className="dues">
					<h3>Fellowship Dues</h3>
					<p>Details about fellowship dues.</p>
				</div>
			</section>

			<section className="faq">
				<h2>Frequently Asked Questions</h2>
				<div className="faq-item">
					<h3>What if I already have an internship or job?</h3>
					<p>Answer to the question.</p>
				</div>
				<div className="faq-item">
					<h3>What if I don't have a startup idea?</h3>
					<p>Answer to the question.</p>
				</div>
				<div className="faq-item">
					<h3>Is this program hard to get into?</h3>
					<p>Answer to the question.</p>
				</div>
				<div className="faq-item">
					<h3>
						What if I'm not interested in the course but want to join the
						community?
					</h3>
					<p>Answer to the question.</p>
				</div>
			</section>
		</div>
	);
};

export default TheCohort;
